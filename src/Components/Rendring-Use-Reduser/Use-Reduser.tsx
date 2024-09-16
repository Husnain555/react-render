import {useReducer} from "react";
const intial = 0
export function reduser (state:number,action:{type:string}){
    // console.log(action,state)
    switch (action.type){
        case 'increment':
            return state +1
        case 'decrement':
            return state -1
        case 'reset':
            return intial
        default:
            return state

    }
}



export function Reducer11(){
    const [value,dispatch] = useReducer(reduser,intial)
    console.log('rendering')
    return(
        <div>
            {value}

            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <p>Same rendering as use-state function just difference here the use-reducer  use <strong>dispatch function</strong> and use-state use <strong>setter function</strong>
            the main difference i getting that use-reducer re-render on same value again again</p>
        </div>
    )
}