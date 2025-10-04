import React from 'react';

interface Country {
  name: string;
  image: string;
  alt: string;
}

interface ClientCountryGridProps {
  countries: Country[];
}

const ClientCountryGrid: React.FC<ClientCountryGridProps> = ({ countries }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {countries.map((country, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={country.image}
            alt={country.alt}
            title={country.alt}
            className="h-16 w-auto mb-2 object-contain"
          />
          <span className="text-sm font-medium text-gray-700 text-center">{country.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ClientCountryGrid;
