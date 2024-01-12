import React from 'react';

const PromptBox = ({prompt, 
        handlePromptChange, 
        handleSubmit,
         placeholderText, 
         buttonText,
        error,
        disableButton,
        labelText,
        })=>{
            
            const handleKeyDown = (e) =>{
                if (e.key === "Enter"){
                    handleSubmit();
                }
            }

    return(
        <>
            <div className='flex items-center mb-4'>
                {labelText &&(<label htmlFor="" className='m-4'>{labelText}</label>)}

                <input
                className="w-full mr-4 py-2 px-4 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded shadow"
                type="text"
                value={prompt}
                onChange={handlePromptChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholderText || "Enter Prompt"}
                />

            {!disableButton && (
            <button
            onClick={handleSubmit}
            className={"py-2 px-4 bg-white shadow text-gray-900 font-bold rounded-xl hover:shadow-xl transition-colors duration-200 uppercase}"}
            >
            {buttonText || "Enter"}
          </button>
        )}
            </div>
            <p className={`text-red-500 ${error ? "block" : "hidden"}`}>{error}</p>
        </>
    )
}

export default PromptBox;
