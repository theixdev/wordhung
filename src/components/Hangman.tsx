import React from "react";
import { GameStatus } from '../types/Enums';

interface IHangmanProps {
    try: number
    gameStatus: GameStatus
}

//create a function that will turn a string into an array of letters

const Hangman = (props: IHangmanProps) => {

    return (
        <div className="scale-75 flex">
            <div className="m-auto">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 230.1 276.23" width="auto" height="auto">
                    <style type="text/css">

                    </style>
                    {props.gameStatus != GameStatus.Victory && (
                        <>
                            <rect x="18" y="14.6" className="gallow" width="17.5" height="231.2" />
                            <rect x="99.8" y="-49.6" transform="matrix(6.123234e-17 -1 1 6.123234e-17 85.1371 131.8952)" className="gallow" width="17.5" height="145.9" />
                            <polygon className="gallow" points="70.6,33.9 91.7,33.5 35.5,77.8 35.5,61.8 " />
                            <rect x="110.9" y="155.3" transform="matrix(6.123234e-17 -1 1 6.123234e-17 -137.25 376.621)" className="gallow" width="17.5" height="203.3" />
                            <polygon className="gallow" points="38.7,214 36.8,193.1 85,245.8 69.1,247 " />

                        </>
                    )
                    }

                    {(props.try > 0 || props.gameStatus === GameStatus.Victory) && <path className="st0 body" d="M164.3,162.8c0-15.8,0-31.6,0-47.4" />}
                    {(props.try > 1 || props.gameStatus === GameStatus.Victory) && <path className="st0 l-leg" d="M145.2,201.2c6.4-13.2,12.8-26.5,19.1-39.7" />}
                    {(props.try > 2 || props.gameStatus === GameStatus.Victory) && <path className="st0 r-leg" d="M197.2,195.7c-11-11.4-21.9-22.8-32.9-34.1" />}
                    {(props.try > 3 || props.gameStatus === GameStatus.Victory) && <path className="st0 l-arm" d="M137.2,123.2c9.3,2.6,18.5,5.3,27.8,7.9" />}
                    {(props.try > 4 || props.gameStatus === GameStatus.Victory) && <path className="st0 r-arm" d="M164,131.1c9.1-3,18.3-6,27.4-9" />}
                    {props.try > 5 && <rect x="164.1" y="33.5" className="rope" width="3.1" height="47.4" />}
                    {(props.try > 5 || props.gameStatus === GameStatus.Victory) && <ellipse className="head" cx="164.4" cy="91.9" rx="27.1" ry="23.5" />}
                    {(props.try > 6 ) && (
                        <>
                            <g>
                                <line className="st5 l-eye" x1="152.8" y1="81.8" x2="156.7" y2="87.6" />
                                <line className="st5 l-eye" x1="152.1" y1="87" x2="157.5" y2="82.5" />
                            </g>
                            <g>
                                <line className="st5 r-eye" x1="170.6" y1="83" x2="176.6" y2="92" />
                                <line className="st5 r-eye`" x1="169.4" y1="90.9" x2="177.7" y2="84.1" />
                            </g>
                            <line className="st5 mouth" x1="149.4" y1="98.9" x2="171.8" y2="102" />
                            <path className="st6 tongue" d="M169.1,102.8c-0.2,2.6-3.3,6.1-4.9,5.6c-1.9-0.6-2.7-8.1-0.5-7.6C165.5,101.3,169.2,100.9,169.1,102.8z" />
                        </>)}
                        {props.gameStatus === GameStatus.Victory && (
                            <> 
                            <path className="st6 tongue" d="M171.8,100.1c-0.7,3.2-9.3,7.6-13.7,7c-5.2-0.7-7.6-10.1-1.5-9.4C161.8,98.3,172.2,97.8,171.8,100.1z"/>
                                <circle className="winningeyes" cx="156.3" cy="80" r="3.4" fill="#000000"/>
                                <circle className="winningeyes" cx="173" cy="83.4" r="3.4" fill="#000000"/>
                             </>
                        )}
                </svg>
            </div>
        </div>





    )
}

export default Hangman;