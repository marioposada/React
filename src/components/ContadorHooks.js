import React , {useState} from 'react';

export default function ContadorHooks(){
    
const [first, setfirst] = useState(0)

const sumar = () => {
    setfirst(first + 1)
}

const restar = () => {
    setfirst(first - 1)
}
    return(
        <>
        <h2>Hooks - useState</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{first}</h3>
        </>

    )
}

