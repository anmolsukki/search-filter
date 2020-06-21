import React, { useState, useEffect } from 'react';
import CountryCodeList from "./CountryCode.json";

const Search = () => {
    const [countryCode, setCountry] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');

    useEffect(() => {
        setCountry(CountryCodeList);
    }, [countryCode]);

    return (
        <div>
            <h5 className="heading">Search By Country Name, Code</h5>
            <input type="text" className="input-field" placeholder="Search" value={searchCountry} onChange={(e) => setSearchCountry(e.target.value)} />
            {countryCode.filter(country => {
                return (
                    !searchCountry.trim() ||
                    country.name.toLowerCase().includes(searchCountry.trim().toLowerCase()) ||
                    JSON.stringify(country.dial_code).toLowerCase().includes(searchCountry.trim().toLowerCase()) ||
                    country.code.toLowerCase().includes(searchCountry.trim().toLowerCase())
                );
            }).map((country, index) => {
                return (
                    <div className="list" key={index}>
                    <div>Country: <b>{country.name}</b></div>
                    <div>Digital Code: <b>{country.dial_code}</b></div>
                    <div>Code: <b>{country.code}</b></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Search;
