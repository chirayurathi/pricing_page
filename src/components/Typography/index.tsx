import React from 'react';
import Style from './Typography.module.css'

const Typography = (
    props: {
        element:string,
        children:string,
        color?:string,
        paddingLeft?:number,
        paddingRight?:number,
        paddingTop?:number,
        paddingBottom?:number
    }) => {

  return (
    <div className={Style.Typography} 
    style={
        {
            color:props.color,
            paddingLeft:props.paddingLeft && `${props.paddingLeft}%`,
            paddingRight:props.paddingRight && `${props.paddingRight}%`,
            paddingTop:props.paddingTop && `${props.paddingTop}%`,
            paddingBottom:props.paddingBottom && `${props.paddingBottom}%`,
        }
    }>
        {
            props.element === 'h1'?
            <h1>{props.children}</h1>
            :props.element === 'h2'?
            <h2>{props.children}</h2>
            :props.element === 'h3'?
            <h3>{props.children}</h3>
            :<p>{props.children}</p>
        }
    </div>
  );

}

export default Typography;