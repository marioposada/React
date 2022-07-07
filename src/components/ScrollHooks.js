import React, {useState,useEffect} from 'react';

export default function ScrollHooks (){
const [scroll,setScroll] = useState(0);

    useEffect(()=> {
        console.log("Moviendo el scroll");

        const detectarScroll = () => setScroll(window.scrollY);

       window.addEventListener("scroll",detectarScroll);
    })

    useEffect(()=> {
        console.log("Fase de desmontaje")

     return () => {
        console.log("Fase de desmontaje")
     }
    })

    useEffect(()=> {
        console.log("Aca podemos cargar una API externa")
    },[])
    return(
        <>
        <p>Scroll Y es {scroll}</p>
        </>
    )
}