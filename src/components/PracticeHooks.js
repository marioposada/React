import React, {useState} from 'react';
import { Box, Flex } from "@chakra-ui/react"

export default  function PracticeHooks(props){


    const [hora,setHora] = useState(props.estado)

   
    
 function Dia (){
    return(
        <Box>Estamos en BRf</Box>
        
    )
 }
 function Noche (){
    return(
        <Box textAlign="center"  display="flex" alignItems="center" justifyContent="space-between" w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)'>Estamos estudiando React</Box>
    )
 }

    return(
        <>
        {hora === "dia" ? <Dia /> : <Noche />}
        </>
    )


} 
