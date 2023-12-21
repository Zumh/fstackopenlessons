const Hello = (props) => {
    return (
        <div>
            <h1>Hello World {props.name} {props.age}</h1>
        </div>
    )

}

const App = () => {

    /*return (
        <div>
            <h1>Hello World</h1>
        </div>
    ) */
    
    const a = 10 ;
    const b = 20;
    const now  = new Date()
    const friends = ['John', 'Paul', 'George', 'Ringo'];

    console.log(now, a+b)
    // ES6 
    return (
        <div>
            <p>Hello World, it is {now.toString()}</p>
            <p>{a} plus {b} is {a+b}</p>
            <Hello name='John' age={30 + 40}/>
            
            <p>{friends}</p>
        </div>
    )
}

export default App; 

