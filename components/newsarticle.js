import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShareIcon from '@mui/icons-material/Share';
import Box from "@material-ui/core/Box";
import { ThumbUp } from "@mui/icons-material";
import { Container } from "@mui/material";
//import { Link } from 'react-router-dom';

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
            <IconButton>
              <ThumbUp />
              <Typography variant="body1" color="green" pl={2}>
                {props.likeNumber}
              </Typography>
            </IconButton>

            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderRoundedIcon />
            </IconButton>
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
