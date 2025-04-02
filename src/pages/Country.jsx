import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/UI/Loader";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
     
    useEffect(() => {
        startTransition(async() => {
           const res = await getCountryData();
           setCountries(res.data);
        });
    },[]); 

    if(isPending) return <Loader />;
    return <h1>Country Page</h1>;
}