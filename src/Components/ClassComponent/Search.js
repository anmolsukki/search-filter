import React, { Component } from 'react';
import countriesList from "./Country.json";

class Search extends Component {
    state = {
        search: ""
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { search } = this.state;
        const filteredCountries = countriesList.filter(country => {
            return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        return (
            <div>
                <h5 className="heading">Search By Country Name</h5>
                <input type="text" className="input-field" placeholder="Search" onChange={this.onchange} />
                <div>
                    {filteredCountries.map((country, index) => {
                        return (
                            <div className="list" key={index}>{country.name}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Search;
