import * as React from "react";
// import GameRow from "../components/selectionRow"
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";

var clickFlag = {
  BigTech: [false, false, false, false, false, false, false, false],
  Hardware: [false, false, false, false, false, false, false, false],
  GameDevelopers: [false, false, false, false, false, false, false, false]
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

const Game = ({ images, key, id }) => {
  const index = key;
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
  const id = text.replace(" ", "");

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center" }}>{text}</h1>
        <Grid container justifyContent="center" spacing={4}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Game images={images} key={value} id={id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function techSelectionPage() {
  const bigTech = [
    "https://www.nicepng.com/png/detail/13-134960_silver-apple-logo-png.png",
    "https://th.bing.com/th/id/OIP.PLNPLZcOtiOxDr5qIBRZsgAAAA?w=150&h=200&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.yB26NarqPlXQddoNoa16EgAAAA?w=150&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "https://th.bing.com/th/id/OIP.WzMe56XBwwOgRazzVzCuHwAAAA?w=182&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "https://th.bing.com/th/id/OIP.lAE0Hr86nHKTOi0QmkG3kwHaHa?w=150&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "",
    "",
    ""
  ];

  const hardware = [
    "https://th.bing.com/th/id/OIP.qTO0psTA3wypgB2ywEmV7wAAAA?w=150&h=200&c=7&r=0&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.KyxCoHaR0ubQ2iJYWcUlLwAAAA&w=150&h=200&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://th.bing.com/th/id/OIP.FsxxSbGP6D4fhgSE2qAFRAAAAA?w=150&h=200&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.hVrd-UZTZ0ylBNBCM-Ie0AAAAA?w=150&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "https://th.bing.com/th/id/OIP.1xZW6uOrTz-3mLLB39DMgQAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "",
    "",
    ""
  ];

  const gameDevs = [
    "https://th.bing.com/th/id/OIP.SKYABeMeth9g3kWCt21c8wAAAA?w=172&h=146&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "https://th.bing.com/th/id/OIP.44EEoEWaKoouGAn-qC6l2QHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "https://th.bing.com/th/id/OIP.Bq625HE5KARpk4x9UhrDzwAAAA?w=150&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "https://th.bing.com/th/id/OIP.15XlyFM5gN0t0fDricrTawAAAA?w=152&h=171&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRUd14qPH58ORoqReg2YzX8dHOjs6zgFxwA&usqp=CAU",
    "",
    "",
    ""
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
