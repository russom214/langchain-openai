"use client"
import React from 'react';
import Title from "../components/Title"
import TwoColumnLayout from '../components/TwoColumnLayout';
import PageHeader from '../components/PageHeader';
import ResultSources from '../components/ResultSources';
import PromptBox from '../components/PromptBox';


const Memory = () =>{
    return(
        <>
            <Title headingText={"Memory"} emoji="🧠" />
            <TwoColumnLayout leftChildren={
                <>
                <PageHeader
                  heading="I remember everything"
                  boldText="Let's see if it can remember your name and favourite food. This tool will let you ask anything contained in a PDF document. "
                  description="This tool uses Buffer Memory and Conversation Chain.  Head over to Module X to get started!"
                />
              </>
            } rightChildren={
                <>
                <ResultSources/>
                <PromptBox/>
                </>
            }/>
        </>
    )
}

export default Memory;