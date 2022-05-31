import React from 'react';
import Typography from '../../Typography';
import { PriceCardInterface } from '../PriceCardInterface';
import Style from './PriceCard.module.css'

const PriceCard = (
    props: PriceCardInterface & {width:number,key:number,index:number, active:number, setActive:React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <div className={`${Style.PriceCard} ${props.index===props.active&&Style.CardActive}`} style={{width:`${props.width}%`}}>
        <div className={Style.CardHeader}>
            <Typography element='h3'>{props.cardTitle}</Typography>
            {props.subTitle!==undefined && <Typography element='p'>{props.subTitle}</Typography>}
            {props.isStar && <i className="fa-regular fa-star"></i>}
        </div>
        <div className={Style.CardBody}>
            <div><span>${props.price}</span>/mo</div>
            <Typography element='p'>{`${props.users} users included`}</Typography>
            <Typography element='p'>{`${props.storage} GB of storage`}</Typography>
            <Typography element='p'>Help center access</Typography>
            <Typography element='p'>{props.support}</Typography>
            <button onClick={()=>{console.log(props.index); props.setActive(props.index)}}>{props.buttonText}</button>
        </div>
    </div>
  );
}

export default PriceCard;