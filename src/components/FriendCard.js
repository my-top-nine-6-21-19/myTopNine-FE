import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// export class FriendCard extends Component {
//   render() {
//     return (
//       <div>
//         <div className="card">
//           <div className="image">
//           <img src="https://cdn.pixabay.com/photo/2017/01/31/08/42/comic-characters-2023311_640.png"></img>
//           </div>
//           <div className="card-body">
//             <h1>{this.props.friend.name}</h1>
//             <h4 className="card-rank">{this.props.friend.rank}</h4>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default FriendCard;

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
