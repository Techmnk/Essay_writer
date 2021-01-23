import React, { useState } from 'react';
import Displaywatch from './Displaywatch';
import Stopwatch_Btn from './Stopwatch_Btn';
import "./Text_time.css"


function Text_time() {
    const [count, setcount] = useState(0)
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    // Not started = 0
    // started = 1
    // stopped = 2

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
    };

    const resume = () => start();



    // var counterstart = (function () {
    //     var executed = false;
    //     return function () {
    //         if (!executed) {
    //             executed = true;
    //             if (count === 1) {
    //                 start()

    //             }
    //         }
    //     };
    // })();






    const getWordCount = (e) => {
        const numWords = e.target.value.split(" ").filter(item => {
            return item !== "";
        });
        setcount(numWords.length);

    };


    // const stoptimer = () => {
    //     if (count === 10) {

    //     }
    // }

    const progress = () => {
        var color = ""
        if (count <= 25) {
            color = "warning"
        }

        if (count > 25 && count <= 50) {
            color = "info"
        }

        if (count > 50 && count <= 75) {
            color = "primary"
        }

        if (count > 75 && count <= 100) {
            color = "success"
        }

        return color;
    }




    return (
        <div className="text_time">
            <div className="text_area">
                <textarea onChange={getWordCount} class="form-control" id="exampleFormControlTextarea1 myinput" rows="15"></textarea>
                <p>{count}</p>
                <div className="progress">
                    <div className={`progress-bar bg-${progress()}`} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: `${count}%` }}></div>
                </div>
            </div>


            <div className="stop_watch">
                <div className="main-section">
                    <div className="clock-holder">
                        <div className="stopwatch">
                            <Displaywatch time={time} />
                            <Stopwatch_Btn status={status} resume={resume} reset={reset} stop={stop} start={start} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Text_time