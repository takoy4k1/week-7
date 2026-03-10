import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchCountries = async () => {

      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );

        const data = await response.json();

        setCountries(data);
        setFilteredCountries(data);

      } catch (err) {
        setError("Failed to fetch countries");
      } finally {
        setLoading(false);
      }

    };

    fetchCountries();

  }, []);

  const handleSearch = (query) => {

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(filtered);

  };

  if (loading)
    return <h2 className="text-center mt-10 text-xl">Loading countries...</h2>;

  if (error)
    return <h2 className="text-center mt-10 text-red-500">{error}</h2>;

  return (
    <div className="min-h-screen bg-gray-100">

      <h1 className="text-4xl font-bold text-center py-6">
         Country Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />

      <CountryList countries={filteredCountries} />

    </div>
  );
}

export default App;