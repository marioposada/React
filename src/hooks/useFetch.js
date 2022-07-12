import { useEffect, useState } from "react";

export const useFetch = (url) => {
const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null)


  useEffect(() => {

    const getData = (url) => {
try {
    
} catch (error) {
    
}


    }
    

    return () => {
      
    };
  }, [url]);

  return [data,isPending,error]
};

