import React from "react";
import Letter from "./Letter";

interface IWordlistProps {
    letterArray: string[];
    guessArray: string[];
    inputGuess : (event: React.MouseEvent) => void
}

//create a function that will turn a string into an array of letters


const Word = (props: IWordlistProps) => {

    return (
        <div className="Word py-7" onClick={props.inputGuess}>
            {props.letterArray.map((char, index) => {
                return <Letter key={index} letter={char} isGuessed={props.guessArray.indexOf(char) !== -1} />
            })}
        </div>
    )
}

export default Word;
