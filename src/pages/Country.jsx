import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SeacrhFilter";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const[search,setSearch]= useState("all");
     
    useEffect(() => {
        startTransition(async() => {
           const res = await getCountryData();
           setCountries(res.data);
        });
    },[]); 

    if(isPending) return <Loader />;
    return (
        <section className="country-section">

            <SearchFilter  search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
            <ul className=" container grid grid-four-cols">{
                countries.map((curCountry , index) =>{
                    return <CountryCard country ={curCountry} key={index} />
                 })
                }</ul>
        </section>
    )
}