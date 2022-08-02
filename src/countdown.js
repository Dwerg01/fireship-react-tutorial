import React,{useState, useEffect} from "react";


const Countdown = ({hr, min, sec}) => {
    const [over, setOver] = useState(false);
    const [paused, setPaused] = useState(true);
    const [[h, m, s], setTime] = useState([hr, min, sec]);

    const tick = () => {
        if (paused || over) {
            return;
        }
        if (hr === 0 && min === 0 && sec === 0) {
            setOver(true);
        } else if ( min === 0 && sec === 0) {
            setTime([h - 1, 59, 59])
        } else if ( sec === 0 ) {
            setTime([h, m - 1, 59] )
        } else {
            setTime([ h, m, s - 1])
        }
    }

    const handleReset = () => {
        setTime([hr, min, sec])
        setPaused(true);
        setOver(false);
    };
    
    const handlePause = () => setPaused(!paused);
    
    const fmt = (val) => val.toString().padStart(2, '0');

    useEffect(() => {
        let ticker = setInterval(tick(), 1000);
        return () => {
            clearInterval(ticker);
        };
        
    
    });
        return (
        <div>
            <h3 className="countdown">{`${fmt(h)}:${fmt(m)}:${fmt(s)}`}</h3> 
            <button onClick={handlePause}>{paused ? "Start" : "Pause"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        );
};

function CountdownComp() {
    return (
        <div>
            <Countdown hr={0} min={1} sec={45} />
        </div>
    );
    
}  

export default CountdownComp;