import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

function CarouselSlide(props) {
  const { backgroundImage, title } = props.content;

  const useStyles = makeStyles(() => ({
    card: {
      backgroundImage,
      padding: '75px 50px',
      margin: '0px 25px',
      width: '80vh',
      height: '50vh',
      display: 'flex',
      justifyContent: 'center',
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <h1>{title}</h1>
    </Card>
  );
}

export default CarouselSlide
