import React from 'react';
import Typography from '../Typography';
import Style from './Header.module.css'

const Header = (
    props: {
        width:number
    }) => {
  return (
    <div className={Style.Header} style={{width:`${props.width}%`}}>
      <Typography element='h1'>Pricing</Typography>
    </div>
  );
}

export default Header;