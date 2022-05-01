import React from "react";

interface IButtonProps {
   buttonText: string
   handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

//create a function that will turn a string into an array of letters

const Button = (props: IButtonProps) => {

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded m-4" onClick={props.handleClick}>
            {props.buttonText}
        </button>
    )
}

export default Button;



