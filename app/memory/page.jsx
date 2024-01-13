"use client"
import React, { useState } from 'react';

import Title from "../components/Title"
import TwoColumnLayout from '../components/TwoColumnLayout';
import PageHeader from '../components/PageHeader';
import ResultSources from '../components/ResultSources';
import PromptBox from '../components/PromptBox';


const Memory = () =>{
    const [prompt, setPrompt] = useState("")
    const [error, setError] = useState(null)
    const [message, setMessage] = useState([])
    const [firstMsg, setFirstMsg] = useState(true)

    const handlePromptChange = (e) =>{
        setPrompt(e.target.value)
    }

    //When ever we use prompt it is going to update prompt.
    const handleSubmitPrompt = async ()=>{
        console.log("sending", prompt)
        try{

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: prompt, type: "user", sourceDocuments: null },
              ]);

            const response = await fetch('api/memory', {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({input: prompt, firstMsg}),
            });

            //response error
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`)
            }

            //reset the prompt
            setPrompt("")
            setFirstMsg(false)
            //convert the response error to json
            const responseResult=  await response.json();
                console.log({responseResult})

            setMessage((prevMessages) => [
                    ...prevMessages,
                    { text: responseResult.output.response, type: "bot", sourceDocuments: null },
                  ]);
            setError("")
        }catch (err){
                console.error(err);
                setError(err);
        }
    }

    return(
        <>
            <Title headingText={"Memory"} emoji="🧠" />
            <TwoColumnLayout leftChildren={
                <>
                <PageHeader
                  heading="Buffer Memory"
                  boldText="Let's see if it can remember your name and favourite food. This tool will let you ask anything contained in a PDF document. "
                  description="This tool uses Buffer Memory and Conversation Chain. "
                />
              </>
            } rightChildren={
                <>
                <ResultSources message={message} pngFile="brain"/>
                <PromptBox
                prompt={prompt}
                handleSubmit={handleSubmitPrompt}
                handlePromptChange={handlePromptChange}
                error={error}
                />
                </>
            }/>
        </>
    )
}

export default Memory;