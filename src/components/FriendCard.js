import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    minWidth: 200,
    margin: 20,
    transition: "box-shadow 200ms ease",
    "&:hover": {
      boxShadow: "10px 10px 15px 0px rgba(0,0,0,0.50)"
    },
    "& img": {
      maxWidth: "100%",
      height: "auto",
      margin: "auto",
      objectFit: "contain",
      maxHeight: 200
    },
    "& p": {
      fontSize: "2rem"
    }
  },
  listRank: {
    // color: '#C0C0C0',
    color: "black",
    fontWeight: 800,
    fontSize: "2rem",
    margin: "15px 0"
  }
});
// <img src="image.png" onError="this.onerror=null;this.src='/images/noimage.gif';" />
export default function FriendCard(props) {
  const classes = useStyles();

  return (
    <>
      {props.ranked ? (
        <h3 className={classes.listRank}>{props.friend.rank}</h3>
      ) : (
        <></>
      )}

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Friend"
            image={props.friend.picture}
            title="Friend"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.friend.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
