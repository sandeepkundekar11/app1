import React from "react";
const Card = (props) => {
    return (
        <div className="card">
            <div className="card_count">
                {props.count}
            </div>
            <div className="card_time">
                <div>{props.hour}</div>
                <div>:</div>
                <div>{props.minute}</div>
                <div>:</div>
                <div>{props.second}</div>
                <div>:</div>
                <div>{props.milisecond}</div>
            </div>
        </div>
    )
};
export default Card;