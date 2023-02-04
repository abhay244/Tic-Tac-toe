import React from "react";

import "./game.css"
const SquareComponent = (props) => {
    const classes = (props.className ? `${props.className} square` : `square`)
    console.log(props);
    return (
        // <span
        //     className={classes + (props.state === "X" ? ` fc-aqua` : ` fc-white`)}
        //     onClick={() => props.onClick(props.index)}>
        //    {/* {props.state} */}
           
        // </span>
        <div onClick={props.onClick} className={classes + (props.state === "X" ? ` fc-aqua` : ` fc-white`)}>
            {props.state===""?"":<img src={`image/${props.state}.png`} alt={props.state} />}
            
        </div>
    )
}
export default SquareComponent