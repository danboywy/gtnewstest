import NewsCard from "../components/newsarticle";
import * as React from "react";
import Stack from "@mui/material/Stack";

export default function test() {
  return (
    <Stack direction="column" spacing={2} sx={{ paddingLeft: "25%" }}>
      <NewsCard
        title="PlayStation Will Reveal Spartacus, Its Game Pass Competitor, Very Soon - Report"
        description=" According to a new report from Bloomberg, the subscription service will combine PlayStation Now and PlayStation Plus. Additionally, there will be multiple tiers within the service that have a variety of modern PlayStation games and older classic ones. The most expensive tier will reportedly offer extended demos and game streaming over the internet. The report also notes that Spartacus won't match what's arguably the most enticing feature of Xbox Game Pass. Whereas the latter offers its first-party releases on launch days, such as Halo Infinite and the upcoming Starfield, PlayStation's service is not expected to do the same thing with its own first-party launch titles like the upcoming God of War Ragnarok."
        image="https://www.gamespot.com/a/uploads/screen_kubrick/1576/15769789/3248282-gowps4_screen_kratosatreus_e32017_1497330590.jpg"
        link="https://www.gamespot.com/articles/playstation-will-reveal-spartacus-its-game-pass-competitor-next-week-report/1100-6501916/"
        likeNumber="50"
      />

      <NewsCard
        title="Elden Ring Sorceress Sellen Quest Guide"
        description=" There are an abundance of NPCs and side quests in Elden Ring, but if you're focused on a particular playstyle, you'll want to know which ones to really focus on. Sorceress Sellen, as you'd expect, is one to seek if you're playing as a magic build. Sorceress Sellen can be found early on in the game and is a disgraced member of the Academy of Raya Lucaria. Working with her awards multiple spells and gear, specialized for magic wielders. Here is how to complete Sorceress Sellen's quest."
        image="https://assets.xboxservices.com/assets/1d/5b/1d5bc84f-2135-4e2f-8ca6-bb000d97db7f.jpg?n=Elden-Ring_GLP-Poster-Image-1084_1920x1080.jpg"
        link="https://www.gamespot.com/articles/elden-ring-sorceress-sellen-quest-guide/1100-6501705/"
        likeNumber="22"
      />

      <NewsCard
        title="Tiny Tina's Wonderlands Review"
        description=" Shoot thousands of goblins in the face with a flaming crossbow, throw gigantic meteors at gross anthropomorphic mushrooms, and hang out with a queen horse that’s literally made out of diamonds. That’s Tiny Tina’s Wonderlands in a nutshell, and if that all sounds like a reskinned Borderlands 3, it’s because it is. But that doesn’t end up being such a bad thing! The excellent writing and stellar voice acting performances combine beautifully with the twisted and insane FPS mayhem to create something extremely memorable. This fantasy twist on the Borderlands formula delivers the adventure I dreamt of playing ever since playing the Borderlands 2 DLC that inspired it, and although it very much plays it safe in a lot of ways, it’s been an absolute blast so far."
        image="https://i.ytimg.com/vi/VtkTb-CFVcI/maxresdefault.jpg"
        link="https://www.ign.com/articles/tiny-tinas-wonderlands-review-pc-xbox-playstation"
        likeNumber="83"
      />
      <NewsCard
        title="Kirby and the Forgotten Land Review"
        description="Kirby is no stranger to reinvention. His ability to transform himself into all sorts of shapes and sizes aside, the games he’s in often experiment with new settings and gimmicks as well – whether it’s rolling a limbless Kirby with the DS stylus in Canvas Curse, piloting mechs in Planet Robobot, or fundamentally changing how he transforms in Epic Yarn. Kirby and the Forgotten Land might seem like another addition to that list at first glance, this time warping the traditionally 2D structure into 3D levels. But in reality, this platformer feels like the next big step for a more classic Kirby formula rather than an upheaval of it, and it’s one that skillfully translates the things I love about Kirby into a fresh – but still familiar – new perspective."
        image="https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_1200/v1/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero"
        link="https://www.ign.com/articles/kirby-and-the-forgotten-land-review"
        likeNumber="83"
      />
    </Stack>
  );
}
