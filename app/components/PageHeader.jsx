import React from 'react';
import { pressStart2P, instrumentSans } from "../styles/fonts";

const PageHeader = ({heading, boldText, description})=>{
    return(
        <>
        <h1 className={`${pressStart2P.className} px-4 mb-10 text-6xl uppercase`}>{heading}</h1>
        <p className={`${instrumentSans.className} px-4 mb-10`}><strong>{boldText}</strong>{description}</p>
        </>
    )
}

export default PageHeader;