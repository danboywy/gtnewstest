import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { ref, set } from "firebase/database";
import { initDB } from "../stores/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

var clickFlag = {
  BigTech: [false, false, false, false, false, false, false, false],
  Hardware: [false, false, false, false, false, false, false, false],
  GameDevelopers: [false, false, false, false, false, false, false, false]
};

const tech = {
  BigTech: ["Apple", "Tesla", "Amazon", "Microsoft", "Netflix"],
  Hardware: ["Nvidia", "Intel", "AMD", "Cisco", "Dell"],
  GameDevelopers: [
    "Valve",
    "Activision Blizzard",
    "Rockstar Games",
    "Epic Games",
    "Ubisoft"
  ]
};

const categories = ["BigTech", "Hardware", "GameDevelopers"];

async function getList() {
  var techList = [];
  var gameList = [];

  for (var i = 0; i < categories.length; i++) {
    for (var j = 0; j < tech["BigTech"].length; j++) {
      if (clickFlag[categories[i]][j] === true) {
        techList.push(tech[categories[i]][j]);
      }
    }
  }

  const games = {
    Shooter: [
      "Counter-Strike: Global Offensive",
      "Valorant",
      "Apex Legends",
      "Fortnite",
      "Halo Infinite",
      "Tom Clancy's Rainbow Six Siege",
      "Overwatch",
      "Destiny 2"
    ],
    MOBA: [
      "League of Legends",
      "Dota 2",
      "Smite",
      "Heroes of the Storm",
      "Paladins",
      "Arena of Valor",
      "Battlerite",
      "Vainglory"
    ],
    Sports: [
      "FIFA 22",
      "NBA 2K22",
      "Riders Republic",
      "Madden NFL 21",
      "Rocket League",
      "EA Sports UFC 4",
      "MLB The Show 21",
      "Tony Hawk's Pro Skater 1 + 2"
    ],
    RPG: [
      "Elden Ring",
      "Assassin's Creed Valhalla",
      "Fallout 4",
      "The Witcher 3: Wild Hunt",
      "The Elder Scrolls V: Skyrim",
      "The Legend of Zelda: Breath of the Wild",
      "Dark Souls 3",
      "Stardew Valley"
    ],
    Racing: [
      "Forza Horizon 5",
      "Need for Speed Heat",
      "Dirt 5",
      "TrackMania",
      "iRacing",
      "Gran Turismo 7",
      "Project CARS",
      "F1 2020"
    ]
  };
  const gameCategories = ["Shooter", "MOBA", "Sports", "RPG", "Racing"];

  const data = window.localStorage.getItem("current_game_selection");
  if (data !== null) {
    const selectedGames = JSON.parse(data);

    for (i = 0; i < gameCategories.length; i++) {
      for (j = 0; j < games["Shooter"].length; j++) {
        if (selectedGames[gameCategories[i]][j] === true) {
          gameList.push(games[gameCategories[i]][j]);
        }
      }
    }
  }

  // here is where we would update the database
  console.log(gameList);
  console.log(techList);

  const auth = getAuth();
  // console.log(auth);
  const user = auth.currentUser;
  // console.log(user);
  const uid = user.uid;
  // console.log(uid);
  
  writeUserData(uid, gameList, techList);

  localStorage.clear();

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     writeUserData(uid, gameList, techList);
  //     localStorage.clear();
  //   } 
  //   else {
  //     console.log("Error while getting the user ID.");  
  //   }
  // });
}

function writeUserData(userId, games, tech) {
  const db = initDB();

  set(ref(db, 'Selection Info/' + userId), {
    Games: games,
    Tech: tech
  });
}

function toggle(id) {
  // console.log("toggled " + id);

  const num = parseInt(id, 10);
  const cat = id.replace(/[0-9]/g, "");

  if (clickFlag[cat][num] === false) {
    clickFlag[cat][num] = true;
    document.getElementById(id).style.outlineColor = "#1c74ec";
    document.getElementById(id).style.outlineWidth = "6px";
  } else {
    clickFlag[cat][num] = false;
    document.getElementById(id).style.outlineColor = "black";
    document.getElementById(id).style.outlineWidth = "3px";
  }
}

function displayCurrentSelection(selectedTech) {
  for (var i = 0; i < categories.length; i++) {
    for (var j = 0; j < clickFlag["BigTech"].length; j++) {
      if (selectedTech[categories[i]][j] === true) {
        toggle(j + categories[i]);
      }
    }
  }
}

const Game = ({ images, index, id }) => {
  const idNum = index + id;

  return (
    <Grid key={index} item>
      <div onClick={() => toggle(idNum)}>
        <Paper
          id={idNum}
          sx={{
            width: 300,
            height: 200,
            outlineStyle: "solid",
            outlineColor: "black",
            outlineWidth: "3px",
            marginBottom: 5,
            backgroundImage: "url(" + images[index] + ")",
            backgroundSize: "cover"
          }}
        />
      </div>
    </Grid>
  );
};

const GameRow = ({ images, text }) => {
  const id = text.replace(" ", "");

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center" }}>{text}</h1>
        <Grid container justifyContent="center" spacing={4}>
          {[0, 1, 2, 3, 4].map((value) => (
            <Game images={images} index={value} id={id} key={value + text} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function TechSelectionPage() {
  const bigTech = [
    "data:image/png;base64,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",
    "https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6.png",
    "https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png",
    "https://cra.org/crn/wp-content/uploads/sites/7/2017/03/MSFT_logo_png_678x452.png",
    "https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
  ];

  const hardware = [
    "https://logowik.com/content/uploads/images/nvidia3433.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png",
    "https://logowik.com/content/uploads/images/814_amd_logo.jpg",
    "https://www.seekpng.com/png/detail/199-1992938_cisco-systems-logo-png-transparent-cisco-logo.png",
    "https://www.logo.wine/a/logo/Dell/Dell-Logo.wine.svg"
  ];

  const gameDevs = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Valve-logo.jpg/1200px-Valve-logo.jpg",
    "https://images03.military.com/sites/default/files/styles/full/public/media/veteran-jobs/100%2C000-jobs/2014/01/activisionblizzardlogo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0jLkBNEksIPrNH6vN2OlMXSTqPfxstkHKg&usqp=CAU",
    "https://www.kindpng.com/picc/m/647-6472101_epic-games-logo-png-transparent-png.png",
    "https://1000logos.net/wp-content/uploads/2020/06/Ubisoft-Logo.png"
  ];

  const [currentSelection, setCurrentSelection] = useState({
    BigTech: [false, false, false, false, false, false, false, false],
    Hardware: [false, false, false, false, false, false, false, false],
    GameDevelopers: [false, false, false, false, false, false, false, false]
  });

  // called when page loads
  useEffect(() => {
    const data = window.localStorage.getItem("current_tech_selection");
    if (data !== null) {
      setCurrentSelection(JSON.parse(data));
      displayCurrentSelection(JSON.parse(data));
    }
  }, []);

  // called when currentSelection is updated
  useEffect(() => {
    window.localStorage.setItem(
      "current_tech_selection",
      JSON.stringify(currentSelection)
    );
  }, [currentSelection]);


  return (
    <div>
      <div>
        <Button
          type="submit"
          variant="contained"
          href="/gameNews"
          onClick={() => getList()}
          sx={{ mt: 3, mb: 2, ml: 1, mr: 2, float: "right" }}
        >
          Done
        </Button>
        <Button
          type="submit"
          variant="contained"
          href="/gameSelection"
          onClick={() => setCurrentSelection(clickFlag)}
          sx={{ mt: 3, mb: 2, float: "right" }}
        >
          Back
        </Button>
      </div>

      <div>
        <GameRow images={bigTech} text={"Big Tech"} />

        <GameRow images={hardware} text={"Hardware"} />

        <GameRow images={gameDevs} text={"Game Developers"} />
      </div>
    </div>
  );
}
