import React from "react";
import Typography from "../Typography";
import Style from "./Footer.module.css";


const Footer = (props: { width: number }) => {

    const linkList = [
        {
            header:"Company",
            subLinks:[
                "Team",
                "History",
                "Contact Us"
            ]
        },
        {
            header:"Features",
            subLinks:[
                "cool stuff",
                "Random Feature",
                "Team Feature"
            ]
        },
        {
            header:"Resources",
            subLinks:[
                "resource",
                "resource name",
                "Another resource"
            ]
        },
        {
            header:"Legal",
            subLinks:[
                "Privacy Policy",
                "Terms of use"
            ]
        }
    ];

  return (
    <div className={Style.Footer} style={{ width: `${props.width}%` }}>
        {linkList.map((section,index)=>(
        <div key={index} className={Style.Section}>
            <Typography element="h3">{section.header}</Typography>
            {section.subLinks.map((link,index)=>(
                <Typography element="p" color="gray" key={index}>{link}</Typography>
            ))}
        </div>
        ))}
    </div>
  );
};

export default Footer;
