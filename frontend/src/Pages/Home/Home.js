import React from 'react';
import Card from '../../components/Card/Card';
import { Container, Grid } from '@material-ui/core';
import './Home.css';


function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <Container fixed>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}

export default Home
