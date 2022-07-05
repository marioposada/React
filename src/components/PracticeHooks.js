import React, {useState} from 'react';

export default  function PracticeHooks(props){


    const [hora,setHora] = useState(props.estado)
    
 function Dia (){
    return(
        <h3>Estamos en BRf</h3>
    )
 }
 function Noche (){
    return(
        <h3>Estamos estudiando React</h3>
    )
 }

    return(
        <>
        {hora === "dia" ? <Dia /> : <Noche />}
        </>
    )


} 
