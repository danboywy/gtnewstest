import styles from "../styles/Feed.module.css";
import { useRouter } from "next/router";


export const Feed = ({ articles, pageNumber }) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            {!!article.urlToImage && <img src={article.urlToImage} />}
            <h1
            
              onClick={() =>
                window.open(((window.location.href = article.url), "_blank"))
              }
            >
              {article.title}
            </h1>

            <p style={{ fontSize: "21px" }}>{article.description}</p>

            <div style={{ paddingLeft: "60%" }}>
             
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {

 

  {


    const articles = [
      {
        author: 'Valentina Palladino',
        title: "Apple's third-gen AirPods drop to $150, plus the rest of the week's best tech deals",
        description: "A number of gadgets remain on sale as we head into the holiday weekend. Apple's latest AirPods remain $30 off and down to $150, and you can pick up the AirPods Pro for $175. Certain colors of the Apple Watch Series 7 are on sale for as low as $313, plus you c…",
        url: 'https://www.engadget.com/apple-third-gen-airpods-drop-to-150-best-tech-deals-this-week-154519360.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2021-10/72e88700-359a-11ec-bfb9-b69664469f60',
        publishedAt: '2022-04-15T15:45:19Z',
        content: "A number of gadgets remain on sale as we head into the holiday weekend. Apple's latest AirPods remain $30 off and down to $150, and you can pick up the AirPods Pro for $175. Certain colors of the App… [+6300 chars]"
      },
      {
        author: 'Jon Fingas',
        title: 'Amazon re-awarded $10 billion NSA cloud contract after Microsoft dispute',
        description: `Microsoft failed in its attempt to challenge Amazon's $10 billion NSA contract. Nextgov has learned the NSA re-awarded the "Wild and Stormy" cloud computing deal to Amazon Web Services after reviewing the 
        decision. While the Government Accountability Office r…`,
        url: 'https://www.engadget.com/amazon-web-services-re-awarded-nsa-cloud-contract-152924596.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2021-12/9c224b80-5dc0-11ec-beaf-51f90d1d02b0',
        publishedAt: '2022-04-28T15:29:24Z',
        content: `Microsoft failed in its attempt to challenge Amazon's $10 billion NSA contract. Nextgov has learned the NSA re-awarded the "Wild and Stormy" cloud computing deal to Amazon Web Services after reviewin… [+1110 chars]`
      },
      {
        author: 'Kris Holt',
        title: "Apple's AirPods Max are $99 off at Amazon",
        description: "Apple's AirPods Max\r\n" +
          " over-ear headphones are once again on sale. The price has dropped by $99 at Amazon, where they're currently $450\r\n" +
          ". One important thing to note is that you'll only get the full discount with two of the color options. The silver and space…",
        url: 'https://www.engadget.com/apple-airpods-max-amazon-good-deal-141214804.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2020-12/5c3b6610-4493-11eb-befb-0b1948212105',
        publishedAt: '2022-04-21T14:12:14Z',
        content: "Apple's AirPods Max\r\n" +
          " over-ear headphones are once again on sale. The price has dropped by $99 at Amazon, where they're currently $450\r\n" +
          ". One important thing to note is that you'll only get the full … [+874 chars]"
      },
      {
        author: 'Steve Dent',
        title: 'Apple Watch Series 7 models fall to new all-time lows in one-day Amazon sale',
        description: "If you've been eyeing the latest Apple Watch Series 7 but are waiting for a deal, it may be time to act. No less than four models, including the 41mm and 45mm models with and without cellular, are on sale at Amazon at all-time low prices. Each model (in multi…",
        url: 'https://www.engadget.com/apple-watch-series-7-models-fall-to-new-all-time-lows-at-amazon-for-today-only-083221206.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/b030ba80-b3ec-11ec-bbef-6937241f649e',
        publishedAt: '2022-04-04T08:32:21Z',
        content: "If you've been eyeing the latest Apple Watch Series 7 but are waiting for a deal, it may be time to act. No less than four models, including the 41mm and 45mm models with and without cellular, are on… [+1510 chars]"
      },
      {
        author: 'Steve Dent',
        title: 'Apple Watch Series 7 falls to a new all-time low of $314 at Amazon',
        description: 'Apple Watch Series 7 models are still on sale at Amazon starting at $330, but one model in particular just fell even further. The 41mm GPS model with a green aluminum case and green "Clover Sport" band has now dropped to $314 or $85 off, marking a new low pri…',
        url: 'https://www.engadget.com/apple-watch-series-7-falls-to-a-new-all-time-low-of-314-at-amazon-092612107.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/57dcc0c0-b975-11ec-affe-06cf0ab3e8f2',
        publishedAt: '2022-04-11T09:26:12Z',
        content: 'Apple Watch Series 7 models are still on sale at Amazon starting at $330, but one model in particular just fell even further. The 41mm GPS model with a green aluminum case and green "Clover Sport" ba… [+1311 chars]'
      },
      {
        author: 'Jon Fingas',
        title: 'Beats Fit Pro are on sale for $180 right now',
        description: "It's an ideal moment to buy wireless earbuds for those springtime walks and workouts. Amazon has put the Beats Fit Pro on sale for $180, or $20 off — a good value when the store previously offered a gift card in lieu of a discount. You can also buy the Beats …",
        url: 'https://www.engadget.com/beats-fit-pro-studio-buds-airpods-sale-131544330.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/8b62a350-c7b8-11ec-a5af-d26c5ceedf70',
        publishedAt: '2022-04-29T13:15:44Z',
        content: "It's an ideal moment to buy wireless earbuds for those springtime walks and workouts. Amazon has put the Beats Fit Pro on sale for $180, or $20 off a good value when the store previously offered a gi… [+1143 chars]"
      },
      {
        author: 'Steve Dent',
        title: 'Amazon Music Unlimited price is going up a dollar to $9 for Prime members',
        description: `The price for an Amazon Music Unlimited plan is going up from $8 to $9 for Prime members, Amazon has confirmed. It's also raising the price for a "Single Device" subscription from $4 to $5, as spotted byConsumer Reports reporter Nicholas De Leon. Non-Prime me…`,
        url: 'https://www.engadget.com/amazon-music-unlimited-price-is-going-up-a-dollar-to-899-for-prime-members-074553977.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2019-07/180871c0-a4a0-11e9-9fef-c6385fd16cc9',
        publishedAt: '2022-04-06T07:45:53Z',
        content: `The price for an Amazon Music Unlimited plan is going up from $8 to $9 for Prime members, Amazon has confirmed. It's also raising the price for a "Single Device" subscription from $4 to $5, as spotte… [+1064 chars]`
      },
      {
        author: 'Kyle Barr',
        title: "Honda Hopes You'll Forget About Tesla With $40 Billion EV Investment",
        description: 'People better be prepared for an all-electric future of car ownership. Though in terms of companies paving the road to get to widespread acceptance, some are planning bigger than others.Read more...',     
        url: 'https://gizmodo.com/honda-hopes-youll-forget-about-tesla-with-40-billion-e-1848782606',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a6fd587ef25f8bab214ad389a5cfc1f4.jpg',
        publishedAt: '2022-04-12T17:10:00Z',
        content: 'People better be prepared for an all-electric future of car ownership. Though in terms of companies paving the road to get to widespread acceptance, some are planning bigger than others.\r\n' +
          'Japanese ca… [+3464 chars]'
      },
      {
        author: 'Valentina Palladino',
        title: "Apple's AirPods Pro are on sale for $175 again",
        description: "Apple's best sounding earbuds have been discounted on and off throughout the past few months, and now they're back down to one of the best prices we've seen all year. The AirPods Pro are 30 percent off again at Amazon, bringing them down to $175. That's just …",
        url: 'https://www.engadget.com/apples-airpods-pro-are-on-sale-for-175-again-124633984.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2020-07/bd13d570-cdc0-11ea-bddb-696b5bd00b0a',
        publishedAt: '2022-04-14T12:46:33Z',
        content: "Apple's best sounding earbuds have been discounted on and off throughout the past few months, and now they're back down to one of the best prices we've seen all year. The AirPods Pro are 30 percent o… [+2019 chars]"
      },
      {
        author: 'Igor Bonifacic',
        title: 'Apple’s second-generation AirPods are back down to $100',
        description: 'If you missed the chance to buy Apple’s second-generation AirPods when they were $100 a few weeks ago, Amazon has once again discounted them to that price. While we think most people are better off purchasing the third-generation AirPods or AirPods Pro due to…',
        url: 'https://www.engadget.com/amazon-airpods-beats-studio-pro-sale-164248746.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2020-07/c9ee07d0-c117-11ea-b67f-851aefcf30f2',
        publishedAt: '2022-05-01T16:42:48Z',
        content: 'If you missed the chance to buy Apples second-generation AirPods when they were $100 a few weeks ago, Amazon has once again discounted them to that price. While we think most people are better off pu… [+1462 chars]'
      },
      {
        author: 'Andrew Liszewski',
        title: 'Beats Reveals New Colors for Studio Buds and New Features for Android Users',
        description: 'The Beats Studio Buds were the brand’s first compact true wireless earbuds and not only delivered a cheaper alternative to the Apple AirPods Pro with similar specs, but they were also Android-friendly. Almost a year after their debut, Beats is rolling out som…',
        url: 'https://gizmodo.com/beats-reveals-new-colors-and-features-for-studio-buds-1848774999',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6dea99050072fe9685761d4cdb327123.jpg',
        publishedAt: '2022-04-12T17:00:00Z',
        content: 'The Beats Studio Buds were the brands first compact true wireless earbuds and not only delivered a cheaper alternative to the Apple AirPods Pro with similar specs, but they were also Android-friendly… [+2345 chars]'
      },
      {
        author: 'Kris Holt',
        title: 'Amazon’s latest renewable energy projects include its largest solar farm to date',
        description: 'Just ahead of Earth Day\r\n' +
          ' on Friday, Amazon\r\n' +
          ' has announced investments in 37 more renewable energy projects around the world. The company says these will increase its renewable energy capacity by almost 30 percent, up from 12.2 gigawatts to 15.7 GW.The compa…',
        url: 'https://www.engadget.com/amazon-renewable-energy-investments-earth-day-wind-solar-142308675.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/4caba8c0-c0b3-11ec-bff7-d1abd3d326fa',
        publishedAt: '2022-04-20T14:23:08Z',
        content: 'Just ahead of Earth Day\r\n' +
          ' on Friday, Amazon\r\n' +
          ' has announced investments in 37 more renewable energy projects around the world. The company says these will increase its renewable energy capacity by al… [+1530 chars]'
      },
      {
        author: 'Mack DeGeurin',
        title: 'Amazon Blasts Away Competition With 20% Growth in Workplace Injuries',
        description: "Amazon accounts for about 33% of all warehouse workers but was responsible for 49% of the nation's warehouse injuries last year.",
        url: 'https://gizmodo.com/amazon-blasts-away-competition-with-20-growth-in-workp-1848785053',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8ed611f406fb9631d8b67eaa1cfc757f.jpg',
        publishedAt: '2022-04-12T23:50:00Z',
        content: 'Amazons most recent example of double digit growth likely isnt one its eager to tell shareholders.\r\n' +
          'Last year Amazon facility workers endured nearly 40,000 injuries, with the company recording a 20% … [+5196 chars]'
      },
      {
        author: null,
        title: 'Nasdaq futures jump 2% after Meta earnings beat - Reuters.com',
        description: 'Nasdaq 100 futures jumped more than 2% on Thursday as Meta Platforms shares soared after a stronger-than-expected profit, taking some pressure off growth and technology stocks that have been battered recently.',
        url: 'https://www.reuters.com/business/nasdaq-futures-jump-2-after-meta-earnings-beat-2022-04-28/',
        urlToImage: 'https://www.reuters.com/resizer/tC5MfMuNn1ZuIEZue78DIFYWBiQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QF724RKCFNKPLOLWFOV63NC5LU.jpg',
        publishedAt: '2022-04-28T09:25:00Z',
        content: 'April 28 (Reuters) - Nasdaq 100 futures jumped more than 2% on Thursday as Meta Platforms shares soared after a stronger-than-expected profit, taking some pressure off growth and technology stocks th… [+1232 chars]'
      },
      {
        author: 'Mack DeGeurin',
        title: "Apple's Whipping Out the Big Guns to Kill Antitrust Legislation",
        description: 'Apple’s vying to rejoin its seat alongside Meta and Amazon as a member of the four dollar sign club of corporate political influence.Read more...',
        url: 'https://gizmodo.com/apples-whipping-out-the-big-guns-to-kill-antitrust-legi-1848830140',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/23bbcdccf1eecbcc882e230e1c119e15.jpg',
        publishedAt: '2022-04-22T18:20:00Z',
        content: 'Apples vying to rejoin its seat alongside Meta and Amazon as a member of the four dollar sign club of corporate political influence.\r\n' +
          'Apple, Meta, and Amazon all amped up their lobbying spending in t… [+5830 chars]'
      },
      {
        author: 'Brenda Stolyar',
        title: 'The Apple Watch Series 7 Is At Its Lowest Price Ever',
        description: 'The latest smartwatch from Cupertino currently has a less daunting price tag.',
        url: 'https://www.wired.com/story/apple-watch-deal-april-2022/',
        urlToImage: 'https://media.wired.com/photos/617b269f61ff71e763a1cb4f/191:100/w_1280,c_limit/Gear-Apple-Watch-Series-7-Review-top.jpg',
        publishedAt: '2022-04-04T18:33:43Z',
        content: "Tired of tracking your workouts with your iPhone but don't want to drop a ton of cash on a shiny, new smartwatch? Well, you're in luck. The Apple Watch Series 7 (8/10, WIRED Recommends) is on sale fo… [+1726 chars]"
      },
      {
        author: 'Igor Bonifacic',
        title: "Tesla's deliveries increased despite supply shortages and plant closures",
        description: 'Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n' +
          ' on Saturday. “This was an exceptionally difficult quarter due to supply chain interruptions and China Zero-Covid policy,” Musk said\r\n' +
          ' on Twitter shortly after Tesl…',
        url: 'https://www.engadget.com/tesla-q-1-2022-deliveries-214141313.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-03/733d9be0-b2cd-11ec-b7f9-382caaedc1ae',
        publishedAt: '2022-04-02T21:41:41Z',
        content: 'Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n' +
          ' on Saturday. This was an exceptionally difficult quarter due to supply chain interruptions and China Ze… [+920 chars]'
      },
      {
        author: 'Khamosh Pathak',
        title: 'These Windows Apps Are Outdated, Risky, or Scammy',
        description: 'Every computer develops some cruft over time: the small app you installed years ago and forgot about, or a cleaning utility you downloaded when you wanted to free up some space, but is still running in the background. Plus, Windows comes with its own bloatwar…',
        url: 'https://lifehacker.com/these-windows-apps-are-outdated-risky-or-scammy-1848707239',
        urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eabb254cb2c8d17e8ec7375aaf9ef580.jpg',
        publishedAt: '2022-04-04T20:30:00Z',
        content: 'Every computer develops some cruft over time: the small app you installed years ago and forgot about, or a cleaning utility you downloaded when you wanted to free up some space, but is still running … [+3750 chars]'
      },
      {
        author: 'Jon Fingas',
        title: "Amazon's Eero Pro mesh routers are up to 25 percent off",
        description: 'Does your lone WiFi router not quite cover your home? This might be a good time to upgrade. Amazon is running a sale on Eero mesh routers that includes particularly steep discounts for higher-end Eero Pro models. The Eero Pro 6 represents one of the better va…',
        url: 'https://www.engadget.com/amazon-eero-pro-6-wifi-mesh-router-sale-131254699.html',
        urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2022-04/5652a790-c237-11ec-b7fa-aa7307a757d3',
        publishedAt: '2022-04-22T13:12:54Z',
        content: 'Does your lone WiFi router not quite cover your home? This might be a good time to upgrade. Amazon is running a sale on Eero mesh routers that includes particularly steep discounts for higher-end Eer… [+1448 chars]'
      },
      {
        author: 'Ron Amadeo',
        title: 'Before Google kills free Gsuite accounts, why not offer a family email plan?',
        description: "Apple and Microsoft sell custom domain email to consumers, but Google doesn't.",
        url: 'https://arstechnica.com/gadgets/2022/04/before-google-kills-free-gsuite-accounts-why-not-offer-a-family-email-plan/',
        urlToImage: 'https://cdn.arstechnica.net/wp-content/uploads/2020/12/gmail-760x380.jpg',
        publishedAt: '2022-04-15T21:06:16Z',
        content: '6 with 6 posters participating\r\n' +
          `Some longtime Google users are facing a rough transition. In the early days of Google's business-focused productivity servicefirst called "Google Apps for Your Domain"… [+5964 chars]`
      }
    ];

    return {
      props: {
        articles,
        
      }
    };
  }
};

export default Feed;
