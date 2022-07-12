import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {

   let url = "https://jsonplaceholder.typicode.com/photos"


let {data,isPending,error} = useFetch(url);
console.log(JSON.stringify(data))


  return (
    <>
      <h2> Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3 style={{whiteSpace:"pre-wrap"}}>{JSON.stringify(data)}</h3>
      <h3>{JSON.stringify(error)}</h3>
    
</>
  )
}
