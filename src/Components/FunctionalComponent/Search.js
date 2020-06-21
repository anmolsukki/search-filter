import React, { useState, useEffect } from 'react';
import languageList from "./Language.json";

const Search = () => {
    const [languages, setLanguage] = useState([]);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        setLanguage(languageList);
    }, [languages]);

    const bySearch = (lang, search) => {
        if (search) {
            return lang.name.toLowerCase().includes(search.toLowerCase());
        }
        else return lang;
    };

    const filteredList = (language, search) => {
        return language.filter(lang => bySearch(lang, search));
    };

    return (
        <div>
            <h5 className="heading">Search By Language Name</h5>
            <input type="text" className="input-field" placeholder="Search" onChange={e => setSearch(e.target.value)} />
            {filteredList(languages, search).map((langs, index) => (
                <div className="list" key={index}>{langs.name}</div>
            ))}
        </div>
    )
}

export default Search;
