export const SearchFilter = ({search , setSearch,filter,setFilter}) =>{

    const handleInputChange =(event)=>{
setSearch(event.target.value);
    };

    const handleSelectChange =(event)=>{
        setFilter(event.target.value);
    };

    
    return <section className="section-searchFilter container">
        <input type="text" placeholder="search" value={search} on onChange={handleInputChange} />

        <div>
            <select name="" id="" className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
            </select>
        </div>
    </section>

}