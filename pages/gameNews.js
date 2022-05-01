import styles from '../styles/Feed.module.css';
import { useRouter } from 'next/router';
import IconButton from "@mui/material/IconButton";
import { ThumbUp } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import ShareIcon from '@mui/icons-material/Share';
import { LikeButton } from '@lyket/react';
import { UpdownButton } from '@lyket/react';

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

export default function Feed() {
  const articles = [
    {
      author: 'Igor Bonifacic',
      title: "Ubisoft's new 'team battle arena' game isn't a battle royale, claims company",
      description: `Following a leak early Saturday, Ubisoft announced it was working on a new "team battle arena" game codenamed Project Q. Before Ubisoft's official announcement, leaker Tom Henderson shared footage of Project Q, showcasing a title that looks like a mix between…`,
      url: 'https://www.engadget.com/ubisoft-project-q-announced-205040384.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/ae0585c0-c345-11ec-baff-a4c99d8b523d',
      publishedAt: '2022-04-23T20:50:40Z',
      content: `Following a leak early Saturday, Ubisoft announced it was working on a new "team battle arena" game codenamed Project Q. Before Ubisoft's official announcement, leaker Tom Henderson shared footage of… [+1148 chars]`
    },
    {
      author: 'Jessica Conditt',
      title: "The 'Overwatch 2' beta brings fresh content to a stale game",
      description: 'My love of indie games and weird hardware is well documented, but I have to admit it here: The game I’ve sunk the most hours into is Overwatch. I’ve been playing since it came out in 2016, mostly on PlayStation, but I also have accounts on Xbox and PC. I main…',
      url: 'https://www.engadget.com/overwatch-2-beta-first-look-160005268.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/48564b70-c7d1-11ec-b5f7-efe10d4e7666',
      publishedAt: '2022-04-29T16:00:05Z',
      content: 'My love of indie games and weird hardware is well documented, but I have to admit it here: The game Ive sunk the most hours into is Overwatch. Ive been playing since it came out in 2016, mostly on Pl… [+6389 chars]'
    },
    {
      author: 'Kris Holt',
      title: "'Fortnite' players raised $144 million for Ukraine relief efforts",
      description: 'Epic Games\r\n' +
        ' and Microsoft\r\n' +
        ' have wrapped up their campaign to support Ukraine relief efforts through Fortnite\r\n' +
        ' after raising\r\n' +
        ' an impressive $144 million. Both companies donated their proceeds\r\n' +
        ' from the game for the last two weeks to humanitarian causes su…',
      url: 'https://www.engadget.com/fortnite-ukraine-relief-total-epic-games-xbox-150039827.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/547d7db0-b426-11ec-bbfe-7b0a4c35793d',
      publishedAt: '2022-04-04T15:00:39Z',
      content: 'Epic Games\r\n' +
        ' and Microsoft\r\n' +
        ' have wrapped up their campaign to support Ukraine relief efforts through Fortnite\r\n' +
        ' after raising\r\n' +
        ' an impressive $144 million. Both companies donated their proceeds\r\n' +
        ' fr… [+578 chars]'
    },
    {
      author: 'Kris Holt',
      title: "Halo Infinite's delayed second season starts on May 3rd",
      description: 'Microsoft and 343 Industries have revealed that season two of Halo Infinite\r\n' +
        ' will get underway on May 3rd. The season, which is called Lone Wolves, will herald the arrival of fresh arena and Big Team Battle maps, more modes (including Land Grab and free-for-…',
      url: 'https://www.engadget.com/halo-infinites-season-two-release-date-140453875.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/954ebd20-b743-11ec-bff7-5566a94f18ec',
      publishedAt: '2022-04-08T14:04:53Z',
      content: 'Microsoft and 343 Industries have revealed that season two of Halo Infinite\r\n' +
        ' will get underway on May 3rd. The season, which is called Lone Wolves, will herald the arrival of fresh arena and Big Tea… [+1032 chars]'
    },
    {
      author: 'Germain Lussier',
      title: "Halo's First Episode Is Now Available for Free",
      description: 'Imagine being a fan of Halo, waiting what feels like decades to see the game brought to live-action, only for it to happen, it be released, and you can’t watch it. That surely happened to some of the faithful this week when Halo debuted on Paramount+, if they…',
      url: 'https://gizmodo.com/halos-first-episode-is-now-available-for-free-1848738589',
      urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/939d758c634119ccd7370a2a4ea4803e.jpg',
      publishedAt: '2022-04-01T19:00:00Z',
      content: 'Imagine being a fan of Halo, waiting what feels like decades to see the game brought to live-action, only for it to happen, it be released, and you cant watch it. That surely happened to some of the … [+1574 chars]'
    },
    {
      author: 'Roberto Baldwin',
      title: 'Hummer EV first drive: An enormous electric super-truck',
      description: 'The Hummer has always been ostentatious. So it should have been a surprise to no one that the Hummer EV is not only large, but also heavy, and really not all that efficient as an EV. But what it lacks in miles per kilowatt, it makes up for in over-the-top fun…',
      url: 'https://www.engadget.com/hummer-ev-first-drive-an-enormous-electric-super-truck-133030316.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/8a302740-b724-11ec-ba4f-36ac5955b8da',
      publishedAt: '2022-04-08T13:30:30Z',
      content: 'The Hummer has always been ostentatious. So it should have been a surprise to no one that the Hummer EV is not only large, but also heavy, and really not all that efficient as an EV. But what it lack… [+301 chars]'
    },
    {
      author: 'Jez Corden',
      title: "... I kinda want Halo Infinite's cancelled 'Overwatch' mode",
      description: 'Am I the only one?\n' +
        '\n' +
        "OK, I realize that Overwatch isn't the shooter du jour right now. In fact, Activision revealed at a shareholder meeting recently that it has lost tens of millions of monthly active users across its properties, and that no doubt includes Ov…",
      url: 'https://www.windowscentral.com/i-kinda-want-halo-infinites-cancelled-overwatch-mode',
      urlToImage: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2022/04/halo-wars-2-heroes.jpg',
      publishedAt: '2022-04-26T22:15:02Z',
      content: 'Source: Microsoft | Halo Wars 2\r\n' +
        "OK, I realize that Overwatch isn't the shooter du jour right now. In fact, Activision revealed at a shareholder meeting recently that it has lost tens of millions of … [+5481 chars]"
    },
    {
      author: 'Jon Fingas',
      title: "'Borderlands 3' will finally add PlayStation cross-play support this spring",
      description: "Sure, Tiny Tina's Wonderlands supports cross-play on all platforms, but what about that promised Borderlands 3 update? Don't worry, it's coming. Gearbox has confirmedBorderlands 3 will add cross-play support for PlayStation sometime later this spring. PS4 and…",
      url: 'https://www.engadget.com/borderlands-3-crossplay-playstation-210734766.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/5df73210-c27b-11ec-abff-8016b4f08dff',
      publishedAt: '2022-04-22T21:07:34Z',
      content: "Sure, Tiny Tina's Wonderlands supports cross-play on all platforms, but what about that promised Borderlands 3 update? Don't worry, it's coming. Gearbox has confirmedBorderlands 3 will add cross-play… [+1177 chars]"
    },
    {
      author: 'Chris Scullion',
      title: 'A leaked Overwatch 2 gameplay trailer shows off new character Sojourn | VGC - Video Games Chronicle',
      description: '<ol><li>A leaked Overwatch 2 gameplay trailer shows off new character Sojourn | VGC  Video Games Chronicle\r\n' +
        '</li><li>Sojourn Gameplay Trailer | Overwatch 2  PlayOverwatch\r\n' +
        "</li><li>Overwatch Reveals Sojourn's Abilities in New Gameplay Video  GameRant\r\n" +
        '</li><l…',
      url: 'https://www.videogameschronicle.com/news/a-leaked-overwatch-2-gameplay-trailer-shows-off-new-character-sojourn/',
      urlToImage: 'https://www.videogameschronicle.com/files/2022/04/overwatch.jpg',
      publishedAt: '2022-04-14T12:14:40Z',
      content: 'A gameplay trailer for Sojourn, a new Overwatch 2 character, has leaked early.\r\n' +
        'The trailer was reportedly shown on the game’s official Taiwanese YouTube page and was then removed, but not before oth… [+2184 chars]'
    },
    {
      author: 'Adam Benjamin',
      title: "The Overwatch 2 Beta Starts Today. Here's How to Get In - CNET",
      description: "If Blizzard doesn't email you an invitation, you can earn one by watching Twitch streams.",
      url: 'https://www.cnet.com/tech/gaming/the-overwatch-2-beta-starts-today-heres-how-to-get-in/',
      urlToImage: 'https://www.cnet.com/a/img/resize/274cb031e8fe2dd499e1d00e609b8c792b64b4e2/2019/11/01/9eaa873b-ecfa-4eed-92dd-f2dc7f171f42/screen-shot-2019-11-01-at-3-18-56-pm.png?auto=webp&fit=crop&height=630&width=1200',      publishedAt: '2022-04-26T15:00:03Z',
      content: 'Sojourn is in, one tank is out and more changes await in the Overwatch 2 beta.\r\n' +
        'Blizzard Entertainment\r\n' +
        "It's here. It's finally, really here. We get our hands on the Overwatch 2 beta today, just over… [+3879 chars]"
    },
    {
      author: 'Adam Benjamin',
      title: "The Overwatch 2 Beta Is Live. Here's How to Download - CNET",
      description: 'The first beta for Overwatch 2 is out, bringing new 5v5 gameplay to the hero-based shooter.',
      url: 'https://www.cnet.com/tech/gaming/the-overwatch-2-beta-is-live-heres-how-to-download/',
      urlToImage: 'https://www.cnet.com/a/img/resize/274cb031e8fe2dd499e1d00e609b8c792b64b4e2/2019/11/01/9eaa873b-ecfa-4eed-92dd-f2dc7f171f42/screen-shot-2019-11-01-at-3-18-56-pm.png?auto=webp&fit=crop&height=630&width=1200',      publishedAt: '2022-04-26T19:01:00Z',
      content: 'Sojourn is in, one tank is out and more changes await in the Overwatch 2 beta.\r\n' +
        'Blizzard Entertainment\r\n' +
        "It's here. It's finally, really here. We now have our hands on the Overwatch 2 beta, just over … [+3883 chars]"
    },
    {
      author: 'James Whitbrook and Gordon Jackson',
      title: 'Updates From Doctor Strange 2, John Wick, and More',
      description: 'David Cronenberg’s next movie gets a release date, as does the latest adaptation of Salem’s Lot. Team Archie gets ready to face some trauma in new pictures from the latest Riverdale. Plus, The Flash sets itself up for the rest of season 8, and a new look at e…',
      url: 'https://gizmodo.com/dr-strange-2-raimi-featurette-john-wick-chapter-4-tease-1848835099',
      urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e7fa0c797568d74ed714850beedbc33e.png',
      publishedAt: '2022-04-25T13:45:00Z',
      content: 'David Cronenbergs next movie gets a release date, as does the latest adaptation of Salems Lot. Team Archie gets ready to face some trauma in new pictures from the latest Riverdale. Plus, The Flash se… [+6327 chars]'
    },
    {
      author: 'Igor Bonifacic',
      title: 'Microsoft’s Xbox Series S is $50 off at Adorama today only',
      description: 'For today only, you can get $50 off the Xbox Series S\r\n' +
        ' through camera retailer Adorama. With the discount, Microsoft’s entry-level ninth-generation console costs $250. That matches one of the best prices we’ve seen for the system to date. To take advantage o…',
      url: 'https://www.engadget.com/xbox-series-s-sale-adorama-210546529.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-01/754e8fa0-7aa8-11ec-b3db-f57bc08e7b47',
      publishedAt: '2022-04-05T21:05:46Z',
      content: 'For today only, you can get $50 off the Xbox Series S\r\n' +
        ' through camera retailer Adorama. With the discount, Microsofts entry-level ninth-generation console costs $250. That matches one of the best pr… [+1228 chars]'
    },
    {
      author: null,
      title: 'Halo Infinite Season 2: Lone Wolves - Official Announcement Trailer - IGN',
      description: '<ol><li>Halo Infinite Season 2: Lone Wolves - Official Announcement Trailer  IGN\r\n' +
        '</li><li>Halo Infinite trailer gives glimpse at Season 2, due next month  Eurogamer.net\r\n' +
        '</li><li>Halo Infinite | Season 2 Announce - Lone Wolves  HALO\r\n' +
        '</li><li>Halo Infinite S…',
      url: 'https://www.youtube.com/supported_browsers?next_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dno8b25PuOeo',
      urlToImage: null,
      publishedAt: '2022-04-08T13:38:12Z',
      content: 'Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\n' +
        'Remind me later'
    },
    {
      author: 'Jon Fingas',
      title: 'Chevrolet is making an all-electric Corvette',
      description: `One of Chevy's most iconic cars will get the EV treatment. GM has confirmed that it's developing a "fully electric" Corvette, and an "electrified" (read: hybrid) version will be available as soon as 2023. 
      The automaker didn't provide more details, and even th…`,
      url: 'https://www.engadget.com/chevrolet-corvette-ev-hybrid-142342494.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/5fb10190-c4a0-11ec-bffd-b264963c0924',
      publishedAt: '2022-04-25T14:23:42Z',
      content: `One of Chevy's most iconic cars will get the EV treatment. GM has confirmed that it's developing a "fully electric" Corvette, and an "electrified" (read: hybrid) version will be available as soon as … [+1197 chars]`
    },
    {
      author: 'James Whitbrook and Gordon Jackson',
      title: 'Updates From Ultraman, Riverdale, and More',
      description: 'Steph Curry stars in a peculiar get for Nope. Get a glimpse of what’s coming on Halo. Superman & Lois, Naomi, and more tease what’s next. Plus, Riverdale teases its continued descent into hysteria with a teaser for its upcoming time travel episode. Spoilers n…',
      url: 'https://gizmodo.com/netflix-ultraman-anime-season-3-final-2023-1848804084',
      urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/249b6eab0029660e2112dfde41045d7c.png',
      publishedAt: '2022-04-18T13:51:00Z',
      content: 'Steph Curry stars in a peculiar get for Nope. Get a glimpse of whats coming on Halo. Superman &amp; Lois, Naomi, and more tease whats next. Plus, Riverdale teases its continued descent into hysteria … [+4717 chars]'
    },
    {
      author: 'James Whitbrook and Gordon Jackson',
      title: 'Riverdale Is Already Planning the Return of Sabrina the Teenage Witch',
      description: 'Zack Snyder’s sci-fi Netflix epic Rebel Moon casts as an Imperial ruler. Erin Kellyman goes post-apocalyptic in Alan Friel’s next horror film. Plus, a look at what’s to come on Outlander and Halo, and Aasif Mandvi teases what’s in store for Ben when Evil retu…',
      url: 'https://gizmodo.com/riverdale-season-6-sabrina-spellman-kiernan-shipka-retu-1848775743',
      urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1e1ee0d1651d880a5d7621c185d368cf.png',
      publishedAt: '2022-04-11T13:45:00Z',
      content: 'Zack Snyders sci-fi Netflix epic Rebel Moon casts as an Imperial ruler. Erin Kellyman goes post-apocalyptic in Alan Friels next horror film. Plus, a look at whats to come on Outlander and Halo, and A… [+5939 chars]'
    },
    {
      author: 'Kris Holt',
      title: "Epic Games receives $2 billion investment from Sony and Lego's parent company",
      description: 'Epic Games\r\n' +
        ' has received two big briefcases stuffed with cash which will help it "advance the company’s vision to build the metaverse and support its continued growth.” Sony\r\n' +
        ' and Kirkbi, the majority owner of The Lego Group\r\n' +
        ', are each plowing $1 billion in…',
      url: 'https://www.engadget.com/epic-games-funding-sony-the-lego-group-kirkbi-163347495.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/8dceefe0-b2a5-11ec-bb6c-5303990aad18',
      publishedAt: '2022-04-11T16:33:47Z',
      content: 'Epic Games\r\n' +
        ' has received two big briefcases stuffed with cash which will help it "advance the companys vision to build the metaverse and support its continued growth. Sony\r\n' +
        ' and Kirkbi, the majority… [+1380 chars]'
    },
    {
      author: null,
      title: 'Fortnite Ukraine Fundraiser Closes by Raising $144 Million in Over Two Weeks - CGMagazine',
      description: '<ol><li>Fortnite Ukraine Fundraiser Closes by Raising $144 Million in Over Two Weeks  CGMagazine\r\n' +
        "</li><li>Epic Games' Ukraine fundraising effort raised $144 million across two weeks  MobileSyrup\r\n" +
        '</li><li>‘Fortnite’ Ukraine Relief Donation Total Is Unlike An…',
      url: 'https://www.cgmagonline.com/news/fortnite-ukraine-fundraiser-144-million/',
      urlToImage: 'https://cdn1.cgmagonline.com/wp-content/uploads/2022/04/news-fortnite-ukraine-fundraiser-closes-by-raising-144-million-over-two-weeks.jpg',
      publishedAt: '2022-04-05T15:05:41Z',
      content: 'Epic Games has revealed that its Fortnite Ukraine Fund is ending with a final tally of $144 million, the money will go toward humanitarian aid in Ukraine and will be split between charities including… [+1683 chars]'
    },
    {
      author: 'Ukrinform',
      title: 'Epic Games raises $144M from Fortnite to help Ukrainians - Ukrinform',
      description: '<ol><li>Epic Games raises $144M from Fortnite to help Ukrainians  Ukrinform\r\n' +
        '</li><li>‘Fortnite’ Ukraine Relief Donation Total Is Unlike Anything The Industry Has Seen  Forbes\r\n' +
        "</li><li>Epic Games' Ukraine fundraising effort raised $144 million across two wee…",
      url: 'https://www.ukrinform.net/rubric-ato/3449319-epic-games-raises-144m-from-fortnite-to-help-ukrainians.html',
      urlToImage: 'https://static.ukrinform.com/photos/2022_04/thumb_files/630_360_1649160975-890.jpg',
      publishedAt: '2022-04-05T12:46:36Z',
      content: 'Deputy Prime Minister - Minister of Digital Transformation Mykhailo Fedorov wrote this on Telegram, Ukrinform reports.\r\n' +
        '“VP Epic Games sent all proceeds from the game Fortnite, received from March 20… [+523 chars]'
    }
  ];

  return (
  <>
    <div className={styles.main}>
      {articles.map((article, index) => (
        <div key={index} className={styles.post}>

        {!!article.urlToImage && <img src={article.urlToImage} />}
        <h1  target="_blank" onClick={() => window.open((window.location.href = article.url, '_blank'))}>{article.title}</h1>

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


        <a style = {{paddingLeft:"15px", fontWeight:"bold", fontSize: "20px"}} target="_blank" href={article.url} > Read more </a> 
        <Provider apiKey="pt_4fb580ae0cf8c7b4ea9108775afd4f">
        <div style = {{ fontSize: "20px"}}> <UpdownButton
        id="article"
        namespace="post"
        /> </div>


        </Provider>
        </div>
        </div>
      ))}
    </div>
  </>
  )
}