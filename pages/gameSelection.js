import * as React from "react";
// import GameRow from "../components/selectionRow"
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";

var clickFlag = {
  Shooter: [false, false, false, false, false, false, false, false],
  MOBA: [false, false, false, false, false, false, false, false],
  Sports: [false, false, false, false, false, false, false, false],
  RPG: [false, false, false, false, false, false, false, false],
  Racing: [false, false, false, false, false, false, false, false]
};

function toggle(id) {
  // console.log("clicked " + id);

  const num = parseInt(id);
  const cat = id.replace(/[0-9]/g, "");

  // console.log(num);
  // console.log(cat);

  if (clickFlag[cat][num] === false) {
    clickFlag[cat][num] = true;
    document.getElementById(id).style.outlineColor = "#1c74ec";
    document.getElementById(id).style.outlineWidth = "5px";
  } else {
    clickFlag[cat][num] = false;
    document.getElementById(id).style.outlineColor = "black";
    document.getElementById(id).style.outlineWidth = "3px";
  }

  // console.log(clickFlag);
}

const Game = ({ images, index, id }) => {
  const idNum = index + id;

  return (
    <Grid key={index} item>
      <div onClick={() => toggle(idNum)}>
        <Paper
          id={idNum}
          sx={{
            width: 150,
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
  // const spacing = React.useState(4);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        {/*<h1 style={{marginLeft:240}}>{text}</h1>*/}
        <h1 style={{ textAlign: "center" }}>{text}</h1>
        <Grid container justifyContent="center" spacing={4}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Game images={images} index={value} id={text} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function gameSelectionPage() {
  const shooters = [
    "https://images.mein-mmo.de/medien/2020/02/CSGO-Packshot.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/516575-150x200.jpg",
    "https://www.windowscentral.com/sites/wpcentral.com/files/styles/small/public/field/image/2019/04/apex-legends-box-se.jpg",
    "https://i.pinimg.com/170x/c3/fe/7b/c3fe7b3b4e36361b471c57f0ec371c4a.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/Halo%20Infinite-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/460630-150x200.jpg",
    "https://ccfls.org/bookcover.php?id=hoopla:12221897&size=medium&isn=1630089745",
    "https://static-cdn.jtvnw.net/ttv-boxart/497057-150x200.jpg"
  ];

  const mobas = [
    "https://www.dropingame.com/images/game/cover/150x200/league-of-legends.jpg?5426",
    "https://static-cdn.jtvnw.net/ttv-boxart/29595-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/32507-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/32959_IGDB-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/491115-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/498302_IGDB-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/Battlerite-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/Vainglory-150x200.jpg"
  ];

  const sports = [
    "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2022-150x200.jpg",
    "https://store-images.s-microsoft.com/image/apps.13845.13528939670494828.9f1c9646-ec16-415c-89c6-43719916ff4f.3384b4cc-26fe-443c-b221-b7cfe22aa947",
    "https://static-cdn.jtvnw.net/ttv-boxart/519559_IGDB-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/Madden%20NFL%2021-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/30921-150x200.jpg",
    "https://media.contentapi.ea.com/content/dam/ufc/ufc-4/images/2020/05/ufc4-reveal.png.adapt.crop1x1.320w.png",
    "https://store-images.s-microsoft.com/image/apps.39869.14121046918366911.9b4ade09-9026-4c0f-85aa-78e8234a8d6d.11d4ef2e-c046-4fee-a7a8-f6ac9a56963a?w=400&h=600",
    "https://www.windowscentral.com/sites/wpcentral.com/files/styles/small/public/field/image/2020/09/tony_hawks_pro_skater_1_2_cover_art.jpg"
  ];

  const rpgs = [
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1644843240-elden-ring-pc-1644843154.png",
    "https://www.topdollarpr.com/wp-content/uploads/2020/05/assassins-creed-valhalla-box-art-150x200.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449528891i/28119765._UY200_.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/115977_IGDB-150x200.jpg",
    "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png",
    "https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Breath%20of%20the%20Wild-150x200.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Dark_souls_3_cover_art.jpg/220px-Dark_souls_3_cover_art.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/490744_IGDB-150x200.jpg"
  ];

  const racing = [
    "https://static-cdn.jtvnw.net/ttv-boxart/1757732267_IGDB-150x200.jpg",
    "https://thumbnails.pcgamingwiki.com/1/19/Need_for_Speed_Heat_cover.png/300px-Need_for_Speed_Heat_cover.png",
    "https://m.media-amazon.com/images/M/MV5BZDViODI0OGYtYmNiNS00MjM4LThmM2YtMjBhN2MwMWIwYmVhXkEyXkFqcGdeQXVyMTk5NDI0MA@@._V1_.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/687129551_IGDB-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/19554_IGDB-272x380.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/518014_IGDB-150x200.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/Project%20Cars%203-150x200.jpg",
    "https://upload.wikimedia.org/wikipedia/en/8/84/F1_2020_Cover.jpg"
  ];

  return (
    <div>
      <div>
        <div style={{ margin: "1em 0 0 1em" }}>
          <img
            src="GTNEWS.png"
            alt="GTNews"
            width="110"
            height="100"
            style={{ float: "left" }}
          ></img>
        </div>

        {/*<div>
          <TextField
            variant="outlined"
            label="Search"
            style={{ float: "left" }}
          />
        </div>*/}

        <Button
          type="submit"
          variant="contained"
          href="/techSelection"
          sx={{ mt: 3, mb: 2, ml: 1, mr: 2, float: "right" }}
        >
          Next
        </Button>
        <Button
          type="submit"
          variant="contained"
          href="/signUp"
          sx={{ mt: 3, mb: 2, float: "right" }}
        >
          Back
        </Button>
      </div>

      <div>
        <GameRow images={shooters} text={"Shooter"} />

        <GameRow images={mobas} text={"MOBA"} />

        <GameRow images={sports} text={"Sports"} />

        <GameRow images={rpgs} text={"RPG"} />

        <GameRow images={racing} text={"Racing"} />
      </div>
    </div>
  );
}
