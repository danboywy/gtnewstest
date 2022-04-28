import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@material-ui/core/Box";
import { ThumbUp } from "@mui/icons-material";
import { Container } from "@mui/material";
//import { Link } from 'react-router-dom';
import { useRouter } from "next/router";
import { LikeButton } from "@lyket/react";
import { Provider } from "@lyket/react";
import { FacebookShareButton, FacebookIcon } from "next-share";

import { RedditShareButton, RedditIcon } from "next-share";

import { TwitterShareButton, TwitterIcon } from "next-share";

import { EmailShareButton, EmailIcon } from "next-share";

export default function NewsCard(props) {
  return (
    <Card sx={{ maxWidth: "75%", marginTop: ".5%", display: "grid" }}>
      <CardMedia
        component="img"
        //padding-bottom="40%"
        image={props.image}
        height="300"
        maxWidth="20"
        justify="flex-start"
        alt={props.altText}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ alignContent: "center" }}
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="110%">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Container>
          <Box px={2} mt={-1} pl={60}>
            <div style={{ paddingLeft: "60%" }}>
              <FacebookShareButton
                url={"https://github.com/next-share"}
                quote={
                  "next-share is a social share buttons for your next React apps."
                }
                hashtag={"#nextshare"}
              >
                <FacebookIcon size={40} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://github.com/next-share"}
                title={
                  "next-share is a social share buttons for your next React apps."
                }
              >
                <TwitterIcon size={40} round />
              </TwitterShareButton>

              <RedditShareButton
                url={"https://github.com/next-share"}
                title={
                  "next-share is a social share buttons for your next React apps."
                }
              >
                <RedditIcon size={40} round />
              </RedditShareButton>

              <EmailShareButton
                url={"https://github.com/next-share"}
                subject={"Next Share"}
                body="body"
              >
                <EmailIcon size={40} round />
              </EmailShareButton>

              <Provider apiKey="pt_4fb580ae0cf8c7b4ea9108775afd4f">
                <LikeButton />
              </Provider>
            </div>
            <Button sx={{ left: 20 }} href={props.link} target="_blank">
              {" "}
              Read more
            </Button>
          </Box>
        </Container>
      </CardActions>
    </Card>
  );
}
