import React from 'react';
import CountrySearch from "./Components/ClassComponent/Search";
import LanguageSearch from "./Components/FunctionalComponent/Search";
import MultipleSearch from "./Components/MultipleSearch/Search"
import "./Assets/PortalTheme.css";

export default function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <CountrySearch />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <LanguageSearch />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <MultipleSearch />
        </div>
      </div>
    </div>
  )
}
