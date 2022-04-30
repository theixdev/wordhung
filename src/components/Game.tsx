import React, { ButtonHTMLAttributes, useEffect, useState, useRef } from "react";
import Hangman from "./Hangman";
import Word from "./Word";
import RandomWords from "../data/words.json"

export const Game = () => {
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [failedAttempts, setFailedAttempts] = useState<number>(0);
    const gameWindow = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setWord(RandomWords.data[Math.floor(Math.random() * RandomWords.data.length)]);     
        gameWindow?.current?.focus();
    }, [])

    const wordToArray = (word: string) => {
        return word.split("");
    };

    const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        let letter = event.key;
        if (guessedLetters.indexOf(letter) === -1) {
            setGuessedLetters([...guessedLetters, letter]);
            if (word.indexOf(letter) === -1) {
                setFailedAttempts(failedAttempts + 1);
            }
        }
    }

    const reset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setWord(RandomWords.data[Math.floor(Math.random() * RandomWords.data.length)]);
        setGuessedLetters([]);
        setFailedAttempts(0);
        gameWindow?.current?.focus();
    }

    return (
        <div onKeyUp={onKeyUp} tabIndex={0} ref={gameWindow} className="focus:outline-none h-screen">
            <Word letterArray={wordToArray(word)} guessArray={guessedLetters} />
            <Hangman try={failedAttempts} />
            {failedAttempts >= 7 && (
                <>
                    <div className="text-red-500 text-xl">You are dead. The word was <span className="underline">{word}</span></div>
                    <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => {reset(e)}}>Try Again!</button>
                </>
            )}
            {wordToArray(word).every(val => guessedLetters.includes(val)) && (
                <>
                    <div className="text-green-500 text-xl">You won!</div>
                    <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => {reset(e)}}>Play Again</button>
                </>
            )}
        </div>
    )
}