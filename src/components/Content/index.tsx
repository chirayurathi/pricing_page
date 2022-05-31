import React from "react";
import Typography from "../Typography";
import Style from "./Content.module.css";
import PriceCard from "./PriceCard";
import { PriceCardInterface } from "./PriceCardInterface";

const Content = (props: { width: number }) => {

  const priceList: PriceCardInterface[] = [
    {
      cardTitle:"Free",
      price:0,
      users:10,
      storage:2,
      support:"Email Support",
      buttonText:"Sign up for free"
    },
    {
      cardTitle:"Pro",
      subTitle:"Most Popular",
      isStar:true,
      price:15,
      users:20,
      storage:10,
      support:"Priority Email Support",
      buttonText:"Get Started"
    },
    {
      cardTitle:"Enterprise",
      price:30,
      users:50,
      storage:30,
      support:"Phone & Email Support",
      buttonText:"Contact Us"
    }
  ]
  return (
    <div className={Style.Content} style={{ width: `${props.width}%` }}>
      <Typography element="h3" color="grey" paddingLeft={10} paddingRight={10}>
        Quickly build an effective pricing table for your potential customers
        with this layout. It's built with default Material-Ul components with
        little customization.
      </Typography>
      <div className={Style.PriceLists}>
        {priceList.map(ele => (
          <PriceCard {...ele} width={30} />
        ))}
      </div>
    </div>
  );
};

export default Content;
