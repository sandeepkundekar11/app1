import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import Bell from "../images/Bell.PNG";
import Card from "./card";
const Clock1 = () => {

  const [milisecond_arr, setmilisecond_arr] = useState([]);
  const [second_arr, setsecond_arr] = useState([]);
  const [minute_arr, setminute_arr] = useState([]);
  const [hour_arr, sethour_arr] = useState([])

  const [s1, sets1] = useState(false);
  const [milisecond, setmilisecond] = useState(0);
  const [second, setsecond] = useState(0);
  const [minute, setminute] = useState(0);
  const [hour, sethour] = useState(0)

  useEffect(() => {
    if (s1) {
      let interval = setInterval(() => {
        setmilisecond(milisecond + 1)

        if (milisecond == 100) {
          setmilisecond(0)
          setsecond(second + 1)
        }
        else if (second == 59) {
          setsecond(0)
          setminute(minute + 1)
        }
        else if (minute == 59) {
          setminute(0)
          sethour(hour + 1)
        }
      }, 5)
      return () => {
        clearInterval(interval)
      }
    }
  })

  return (
    <div className="watch_head" >
      <div className="main">
        <div>
          <img src={Bell} alt="" />
          <h1>Stopwatch</h1>
        </div>
        <div className="watch_head1">
          <div>{(hour < 10) ? "0" + hour : hour}</div>
          <div>:</div>
          <div>{(minute < 10) ? "0" + minute : minute}</div>
          <div>:</div>
          <div>{(second < 10) ? "0" + second : second}</div>
          <div>:</div>
          <div>{(milisecond < 10) ? "0" + milisecond + " " : milisecond + " "}</div>
        </div>
        <div className="btns">
          <button onClick={() => {
            sets1(!s1);

          }}>{s1 ? "Stop" : "Start"}</button>
          <button onClick={() => {
            sets1(false)
            setmilisecond(0)
            setsecond(0)
            setminute(0)
            sethour(0)

            setmilisecond_arr([])
            setsecond_arr([])
            setminute_arr([])
            sethour_arr([])
          }}>Restart</button>
          <button onClick={() => {
            setmilisecond_arr(
              [...milisecond_arr, milisecond]
            )
            setsecond_arr(
              [...second_arr, second]
            )

            setminute_arr(
              [...minute_arr, minute]
            )

            sethour(
              [...hour_arr, hour]
            )


          }}>Lap time</button>
        </div>

      </div>
      <div className="container">
        {
          milisecond_arr.map((data, index) => {
            return (
              <Card
                count={"Lap -" + (index + 1)}
                hour={hour_arr[index] == 0 ? hour_arr[index] : "00"}
                minute={(minute_arr[index] < 10) ? "0" + minute_arr[index] : minute_arr[index]}
                second={(second_arr[index] < 10) ? "0" + second_arr[index] : second_arr[index]}
                milisecond={(milisecond_arr[index] < 10) ? "0" + milisecond_arr[index] : milisecond_arr[index]} />
            )
          })
        }
      </div>
    </div>
  )
};
export default Clock1;