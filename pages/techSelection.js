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
  console.log("clicked " + id);

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
  const id = text.replace(" ", "");

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        {/*<h1 style={{marginLeft:240}}>{text}</h1>*/}
        <h1 style={{ textAlign: "center" }}>{text}</h1>
        <Grid container justifyContent="center" spacing={4}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Game images={images} index={value} id={id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function techSelectionPage() {
  const bigTech = ["", "", "", "", "", "", "", ""];

  const hardware = ["", "", "", "", "", "", "", ""];

  const gameDevs = ["", "", "", "", "", "", "", ""];

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
