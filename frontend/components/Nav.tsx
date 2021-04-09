import { AppBar } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <AppBar position='static'>
      <h1>計算アプリケーション</h1>
      <Link href='/add'>
        <a>足し算</a>
      </Link>
      <Link href='/sub'>
        <a>引き算</a>
      </Link>
      <Link href='/mult'>
        <a>割り算</a>
      </Link>
      <Link href='/div'>
        <a>掛け算</a>
      </Link>
    </AppBar>
  );
};

export default Nav;
