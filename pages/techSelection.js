import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

var clickFlag = {
  BigTech: [false, false, false, false, false, false, false, false],
  Hardware: [false, false, false, false, false, false, false, false],
  GameDevelopers: [false, false, false, false, false, false, false, false]
};

function toggle(id) {
  console.log("clicked " + id);

  const num = parseInt(id, 10);
  const cat = id.replace(/[0-9]/g, "");

  if (clickFlag[cat][num] === false) {
    clickFlag[cat][num] = true;
    document.getElementById(id).style.outlineColor = "#1c74ec";
    document.getElementById(id).style.outlineWidth = "5px";
  } else {
    clickFlag[cat][num] = false;
    document.getElementById(id).style.outlineColor = "black";
    document.getElementById(id).style.outlineWidth = "3px";
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

export default function techSelectionPage() {
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

        <Button
          type="submit"
          variant="contained"
          href="/"
          sx={{ mt: 3, mb: 2, ml: 1, mr: 2, float: "right" }}
        >
          Done
        </Button>
        <Button
          type="submit"
          variant="contained"
          href="/gameSelection"
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
