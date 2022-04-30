import React from "react";

interface ILetterProps {
    key: number,
    letter: string;
    isGuessed?:boolean;
}

//create a function that will turn a string into an array of letters

const Word = (props: ILetterProps) => {

    return (
        <>
        {!!props.isGuessed ? <span className="pr-2 text-5xl">{props.letter}</span> : <span className="pr-2 text-5xl">_</span>}
        </>
    )
}

export default Word;
