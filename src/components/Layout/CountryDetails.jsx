import { useParams } from "react-router-dom"

export const CountryDetails = () =>{
   const params = useParams();
   console.log(params);
   return <h1>hello details</h1>
}