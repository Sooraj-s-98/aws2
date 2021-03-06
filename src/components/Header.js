import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
        <div className='App-name'>
          <div className='App-title'>
          <Link className='App-title__link'to='/'>
            Home Chef
            <br/> <small>&nbsp;Restaurant Finder</small>
          </Link>
          </div>
        </div>
  )
};