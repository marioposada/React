import React, { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

function Dia() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
  };

  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="25px" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />
    </Box>
  );
}


function Noche() {
  return (
    <Box
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      h="200px"
      bgGradient="linear(to-r, green.200, pink.500)"
    >
      Estamos estudiando React
    </Box>
  );
}
export default function PracticeHooks(props) {
  
  const [hora, setHora] = useState(props.estado);

  

  return (
  <>
  {hora === "noche" ? <Dia /> : <Noche />}
  </>
  );
}
