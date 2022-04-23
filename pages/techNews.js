import styles from '../styles/Feed.module.css';
import { useRouter } from 'next/router';
import IconButton from "@mui/material/IconButton";
import { ThumbUp } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import ShareIcon from '@mui/icons-material/Share';
import { LikeButton } from '@lyket/react';
import { Provider } from '@lyket/react';
import {
    FacebookShareButton,
    FacebookIcon,
  } from 'next-share';

  import {
    RedditShareButton,
    RedditIcon,
  } from 'next-share'

  import {
    TwitterShareButton,
    TwitterIcon,
  } from 'next-share'

  import {
    EmailShareButton,
    EmailIcon,
  } from 'next-share'




  
export const techNews = ({ articles, pageNumber }) => {
   const router = useRouter();
    //const gameNames = ["Halo", "LeagueOfLegends", "CallofDuty"];
    //for (let index = 0; index < gameNames.length; index++) {
    return (
        <>
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post}>
                        
                        {!!article.urlToImage && <img src={article.urlToImage} />}
                        <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>

                        <p style = {{ fontSize:"21px"}}>{article.description}</p>
                       
            
              <div style = {{paddingLeft:"60%"}}>
              <FacebookShareButton
  url={'https://github.com/next-share'}
  quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#nextshare'}
>
  <FacebookIcon size={40} round />
</FacebookShareButton>

<TwitterShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <TwitterIcon size={40} round />
</TwitterShareButton>


<RedditShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <RedditIcon size={40} round />
</RedditShareButton>

<EmailShareButton
  url={'https://github.com/next-share'}
  subject={'Next Share'}
  body="body"
>
  <EmailIcon size={40} round />
</EmailShareButton>


             <a style = {{paddingLeft:"10px", fontWeight:"bold"}}  href={article.url} > Read more </a> 
             <Provider apiKey="pt_4fb580ae0cf8c7b4ea9108775afd4f">
              <LikeButton
        
      />
              </Provider>
                    </div>
                    </div>
                ))}
            </div>
            
              
    
        </>
    )
}

export const getServerSideProps = async pageContext => {
    
    //for (let index = 0; index < gameNames.length; index++) {
    const pageNumber = pageContext.query.id;

  
 
    
    {

      const keywords =  ["Apple"];
    const apiResponse = await fetch(
        'https://newsapi.org/v2/everything?q=' + keywords.join(" OR ") + '&language=en&pageSize=5&page=${pageNumber}',
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    );
    
    const json = await apiResponse.json();
    const { articles } = json;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber),
        },
    };
};
    }



export default techNews;