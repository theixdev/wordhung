import React, { useEffect, useRef, useState } from 'react';
import { GameStatus } from '../types/Enums';
import RandomWords from "../data/words.json"


const GameLogic = () => {
    const [word, setWord] = useState(RandomWords.data[Math.floor(Math.random() * RandomWords.data.length)]);
    const wordArray: string[] = word.split("");
    const [status, setStatus] = useState(GameStatus.InProgress);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [failedAttempts, setFailedAttempts] = useState<number>(0);
    const gameWindow = useRef<HTMLInputElement>(null);


    useEffect(() => {
        gameWindow.current?.focus();
    }, [])

    useEffect(() => {
        if (wordArray.every(val => guessedLetters.includes(val)) && !!word) {
            setStatus(GameStatus.Victory);
        }
        console.log(guessedLetters);
    }, [guessedLetters])

    useEffect(() => {
       console.log(word);
    }, [word])

    useEffect(() => {
        if (failedAttempts >= 7) {
            setStatus(GameStatus.Defeat);
        }
    }, [failedAttempts])

    const makeGuess = (input:string) => {
        if (status === GameStatus.InProgress) {
            let letter = input.toLowerCase();
            if (guessedLetters.indexOf(letter) === -1) {
                setGuessedLetters([...guessedLetters, letter]);
                if (word.indexOf(letter) === -1) {
                    setFailedAttempts(failedAttempts + 1);
                }
            }         
        }
    }
    const resetGame = () => {
        setWord(RandomWords.data[Math.floor(Math.random() * RandomWords.data.length)]);
        setGuessedLetters([]);
        setFailedAttempts(0);
        setStatus(GameStatus.InProgress);
        gameWindow?.current?.focus();
    }
    return {resetGame, makeGuess, gameWindow, guessedLetters, wordArray, status, failedAttempts};

}

export default GameLogic;


