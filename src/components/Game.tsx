import React, { useEffect, useState, useRef } from "react";
import Hangman from "./Hangman";
import Word from "./Word";
import Button from "././Button";
import { GameStatus } from "../types/Enums";
import GameLogic from "./GameLogic";
import Keyboard, { KeyboardElement, KeyboardHandlerEvent, SimpleKeyboard } from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export const Game = () => {

    const { resetGame, makeGuess, gameWindow, guessedLetters, wordArray, status, failedAttempts } = GameLogic();

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        resetGame();
    }

    return (
        <>
            <div ref={gameWindow} className="focus:outline-none h-screen flex flex-col">
                <Word letterArray={wordArray} guessArray={guessedLetters} />
                <Hangman try={failedAttempts} gameStatus={status} />
                {(() => {
                    switch (status) {
                        case GameStatus.InProgress:
                            return <div className="text-center text-2xl pb-2">
                                <p>Guess the word!</p>
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
                {status === GameStatus.InProgress && (
                    <div className="max-w-[370px] w-full mx-auto mt-auto md:mt-4 pt-2 ">
                        <Keyboard class="keyboard" onKeyPress={makeGuess} layoutName="alphabet" theme={"hg-theme-default myTheme1"} 
                            layout={{
                                'alphabet': [
                                    'Q W E R T Y U I O P',
                                    'A S D F G H J K L ',
                                    'Z X C V B N M {enter}',
                                ]
                            }} 
                            buttonTheme={[{
                                class: "buttonalt",
                                buttons: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
                            }]} />
                    </div>
                )}
            </div>

        </>
    )
}