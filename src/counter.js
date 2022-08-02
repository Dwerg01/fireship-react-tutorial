import React,{useState} from "react";

function CounterComponent() {
    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);

const IncrementCount = () => {
    setCount((prev) => {
        setPrevCount(prev);
    });
    setCount(count + 1);
};
const DecrementCount = () => {
    setCount((prev) => {
        setPrevCount(prev);
    });
    setCount(count - 1);
};



    return (
        <>
            <h3>Current Count: {count}  </h3>
            <h3>Previous Count: {prevCount}  </h3>
            <div className="inline">
                
                <button onClick={DecrementCount} >
                    Decrement
                </button>
                <button onClick={IncrementCount} >
                    Increment
                </button>
            </div>

        </>
    )
}

export default CounterComponent;