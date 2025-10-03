import React from 'react';
import BangladeshMap from './BangladeshMap';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const warehouses = useLoaderData();
    
    return (
       <div className="max-w-4xl max-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h2>
      <BangladeshMap warehouses={warehouses}/>
      </div>
    );
};

export default Coverage;