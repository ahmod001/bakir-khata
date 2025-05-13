import React from 'react';
import getBanglaDate from '../../utils/getBanglaDate';

const Date = () => {
    return (
        <div className="p-1 rounded-md bg-white">
            <h1 className="text-md font-bold text-gray-600">{getBanglaDate()}</h1>
        </div>
    );
};

export default Date;