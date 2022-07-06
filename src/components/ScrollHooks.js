import React, {useState,useEffect} from 'react';

export default function ScrollHooks (){
const [scroll,setScroll] = useState(0);

    useEffect(()=> {
        console.log("Fase de actualizacion");

        const detectarScroll = () => setScroll(window.scrollY);

       window.addEventListener("scroll",detectarScroll);
    })
    return(
        <>
        <p>Scroll Y es {scroll}</p>
        </>
    )
}