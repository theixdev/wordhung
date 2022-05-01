import React, { useEffect, useState, useRef } from "react";
import Hangman from "./Hangman";
import Word from "./Word";
import Button from "././Button";
import { GameStatus } from "../types/Enums"
import GameLogic from "./GameLogic"

export const Game = () => {

    const { resetGame, onKeyUp, gameWindow, guessedLetters, wordArray, status, failedAttempts } = GameLogic();
    const searchRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        resetGame();
    }

    const inputGuess = (event: React.MouseEvent ) => {
        event.preventDefault();
        searchRef.current?.focus();
    }

    return (
        <>
            <input
                style={{height:"0px", width:"0px", opacity:"0"}}
                type="text"
                className="search_bar"
                ref={searchRef}
            />
            <div onKeyUp={onKeyUp} tabIndex={0} ref={gameWindow} className="focus:outline-none h-screen">
                <Word letterArray={wordArray} guessArray={guessedLetters} inputGuess={inputGuess} />
                <Hangman try={failedAttempts} />
                {(() => {
                    switch (status) {
                        case GameStatus.InProgress:
                            return <div className="text-center text-2xl">
                                <p>Guess the word!</p>
                                <Button buttonText="Reset" handleClick={handleButtonClick} />
                            </div>
                        case GameStatus.Victory:
                            return <div className="text-center text-2xl">
                                <p className="text-green-600">You win!</p>
                                <Button buttonText="Play Again" handleClick={handleButtonClick} />
                            </div>
                        case GameStatus.Defeat:
                            return <div className="text-center text-2xl">
                                <p className="text-red-600">You lose. The word was <span className="underline">{wordArray}.</span></p>
                                <Button buttonText="Try Again" handleClick={handleButtonClick} />
                            </div>
                    }
                })()}
            </div>
        </>
    )
}