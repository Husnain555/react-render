import {useState} from "react";

export function State () {
    const [val, setVal] = useState(0)

    function increment() {
        setVal(val + 1)
    }

    function decrement() {
        if (val > 0) {
            setVal(val - 1)
        }
    }

    console.log('render')
    // I console here to check the rendering behaviour of setsate I see it render two time it's because of strict mod
    // and I remove strict mode it renders only one time in time of development its happened after development its only render one
    // time
    function reset() {
        setVal(0)
    }

    return (
        <div>
            {val}
            <button onClick={increment}>Increment</button>
            <br/><br/>
            <button onClick={decrement}>Decrement</button>
            <br/><br/>
            <button onClick={reset}>Reset</button>
            <p>in this when ever i click on a button the Use-state component marked as red flag then react check it convert JSX to JS object (reactElements())
            then react compare these changes and update the DOM in commit phase</p>
            <p>The setter function was guilty to render the use-state hook
            but if out value was the same its not re-render let if we have one more button which increment
            initial value by 5 its only render first time and then second time after this its not re-render then react bail out
            and its not re-render<strong>react use here (Object.ease algorithm) </strong>to compare previous state and current state</p>
        </div>
    )
}
