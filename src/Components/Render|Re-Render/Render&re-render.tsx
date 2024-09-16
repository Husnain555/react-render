export function Render (){
    return(
        <div>
            <h1>Render details</h1>
            <p>In initial phase react 'Render' all the objects and Basically there are 2 phase first was render phase
            and second was Commit phase </p>
            <h1>Render phase</h1>
            <p>In render phase react render all phase by our components pattern </p>
            <h2>Commit Phase</h2>
            <p>In commit phase react put all our components to DOM (virtual DOM)</p>
            <h3>Re-Render</h3>
            <p>In re-render phase if we update any values in our component they was marked as <strong style={{color:'red'}}>FLAGGED</strong>
            and react then compare these updates with previous DOM values and update them if values match with previous values then
                our updated values was rejected by react</p>
        </div>
    )
}