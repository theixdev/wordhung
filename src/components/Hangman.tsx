import React from "react";

interface IHangmanProps {
    try: number
}

//create a function that will turn a string into an array of letters

const Hangman = (props: IHangmanProps) => {

    return (
        <div className="scale-90 pt-4 flex">
            <div className="m-auto">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 230.1 276.23" width="auto" height="auto">
                    <style type="text/css">
                    </style>
                    <path className="st0 hang" d="M199.47,266.34c-58.51,0-117.02,0-175.53,0" />
                    <path className="st0 hang" d="M26.05,267.34c-0.86-84.82-1.72-169.63-2.58-254.45" />
                    <path className="st0 hang" d="M194.34,130.31" />
                    <path className="st0 hang" d="M83.61,120.87" />
                    <path className="st0 hang" d="M147.84,12.4c-42.15-0.22-84.3-0.43-126.45-0.65" />
                    <path className="st0 hang" d="M-180.74,84.74" />
                    <path className="st0 hang" d="M145.34,13.47c0,18.07,0,36.14,0,54.22" />
                    <path className="st1 hang" d="M-164.23,158.03" />
                    {props.try > 0 && <ellipse className="st1 try1" cx="146.34" cy="91.17" rx="27.11" ry="23.48" />}
                    {props.try > 1 && <path className="st1 try2 " d="M-129.13,136.35" />}
                    {props.try > 2 && <path className="st1 try3" d="M146.34,162.05c0-15.8,0-31.6,0-47.4" />}
                    {props.try > 3 && <path className="st1 try4" d="M127.19,200.45c6.38-13.24,12.77-26.47,19.15-39.71" />}
                    {props.try > 4 && <path className="st1 try5" d="M179.23,194.87c-10.96-11.38-21.93-22.75-32.89-34.13" />}
                    {props.try > 5 && <path className="st1 try6" d="M119.23,122.44c9.26,2.62,18.52,5.25,27.78,7.87" />}
                    {props.try > 6 && <path className="st1 try7" d="M146.02,130.31c9.14-3.01,18.29-6.02,27.43-9.02" />}
                </svg>
            </div>
        </div>





    )
}

export default Hangman;