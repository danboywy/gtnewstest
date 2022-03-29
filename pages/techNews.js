import NewsCard from "../components/newsarticle";
import * as React from "react";
import Stack from "@mui/material/Stack";

export default function test() {
  return (
    <Stack direction="column" spacing={2} sx={{ paddingLeft: "25%" }}>
      <NewsCard
        title="Spotify will suspend its services in Russia in light of free speech crackdown"
        description=" Spotify will discontinue access to its streaming services in Russia in light of the country’s dramatic new restrictions on free speech. In early March, the Russian parliament enacted a new law that criminalizes sharing what the government deems to be “false information” about Russia’s operations in Ukraine. The new restrictions also punish any speech that undermines the military, including describing the war in Ukraine using the word “war.” Western news outlets including CNN, ABC and the BBC pulled their broadcasts and operations within Russia in response to the law, which can carry up to a 15-year prison sentence."
        image="https://techcrunch.com/wp-content/uploads/2019/07/spotify-app-icon-iphone.jpg?w=1390&crop=1"
        link="https://techcrunch.com/2022/03/25/spotify-will-suspend-its-services-in-russia-in-light-of-free-speech-crackdown/"
        likeNumber="28"
      />

      <NewsCard
        title="How Europe has expanded its bid to disrupt Big Tech"
        description=" The European Union’s co-legislators reached political agreement on a major reform of digital competition rules late yesterday, which will introduce up-front obligations and restrictions (literally a list of “dos and don’ts”) on the most powerful internet giants — enforced by the threat of substantial fines and other types of penalties if they fail to meet the requirements."
        image="https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-1229220975.jpg?w=1390&crop=1"
        link="https://techcrunch.com/2022/03/25/how-europe-has-expanded-its-bid-to-disrupt-big-tech/"
        likeNumber="22"
      />

      <NewsCard
        title="Apple’s planning to lease you iPhones — and I have questions"
        description=" It’s no secret Apple continually ships boatloads of iPhones every year; it sold 239 million units in 2021, according to analysts. But the company feels it can sell even more — and it apparently has a new idea to do that.
        According to a report by Bloomberg, the Cupertino-based company is working on a new subscription plan to sell you iPhones and other hardware products."
        image="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F03%2FRent-an-iPhone.jpg&signature=2bce0eb76b92da706219c7d17e4756e9"
        link="https://thenextweb.com/news/apple-iphone-subscription-hardware-analysis"
        likeNumber="83"
      />
      <NewsCard
        title="Want to know when the pandemic will be over? Computer science may have the answer"
        description="In early 2022, nearly two years after Covid was declared a pandemic by the World Health Organization, experts are mulling a big question: when is a pandemic “over”?
        So, what’s the answer? What criteria should be used to determine the “end” of Covid’s pandemic phase? These are deceptively simple questions and there are no easy answers."
        image="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F03%2Fcovid.jpeg&signature=72de2172b4386b2c6e43564c30ab3dbd"
        link="https://thenextweb.com/news/when-pandemic-will-be-over-computer-science-may-have-answer"
        likeNumber="83"
      />
    </Stack>
  );
}
