import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Card, CardHeader, CardMedia,
  CardContent, CardActions,
  Button, Typography
} from '@material-ui/core';
import './Card.css';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));


function MyCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Link >


        <CardHeader
          // avatar={
          //   <Avatar aria-label="recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        </CardContent>
      </Link>

      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}

        <Link to="" className="">
          <Button variant="outlined" color="primary">
            Quick Buy
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default MyCard
