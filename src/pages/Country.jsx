import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SeacrhFilter";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const[search,setSearch]= useState();
    const[filter,setFilter]=useState("all");
     
    useEffect(() => {
        startTransition(async() => {
           const res = await getCountryData();
           setCountries(res.data);
        });
    },[]); 

    if(isPending) return <Loader />;

    // here is the main logic
    const searchCountry = (country) => {
     if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase());
     }
     return country;
    };
    

    const filterRegion =(country) =>{
        if(filter === "all") return country;
        return country.region === filter;
    }

    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));
    return (
        <section className="country-section">

            <SearchFilter  search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
            <ul className=" container grid grid-four-cols">{
                filterCountries.map((curCountry , index) =>{
                    return <CountryCard country ={curCountry} key={index} />
                 })
                }</ul>
        </section>
    )
}