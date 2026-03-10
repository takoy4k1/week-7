import React from "react";

function CountryCard({ country }) {

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-32 object-cover rounded"
      />

      <h3 className="text-xl font-semibold mt-3">
        {country.name.common}
      </h3>

      <p className="text-gray-600">
        Capital: {country.capital}
      </p>

      <p className="text-gray-600">
        Population: {country.population.toLocaleString()}
      </p>

      <p className="text-gray-600">
        Region: {country.region}
      </p>

    </div>
  );
}

export default CountryCard;