import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container spacing={10} direction='row' justify='space-around' alignItems='baseline'>
          <Link href='/'>
            <a>
              <Typography variant='h5'>計算アプリケーション</Typography>
            </a>
          </Link>
          <Link href='/add'>
            <a>足し算</a>
          </Link>
          <Link href='/sub'>
            <a>引き算</a>
          </Link>
          <Link href='/div'>
            <a>割り算</a>
          </Link>
          <Link href='/mult'>
            <a>掛け算</a>
          </Link>
          <Link href='/remain'>
            <a>余り計算</a>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
