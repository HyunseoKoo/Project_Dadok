import React, { createContext, useContext } from 'react';

const SearchWordContext = createContext();

export const useSearchWordStore = () => useContext(SearchWordContext);

export default function SearchWordProvider() {

    return (
        <div>
            
        </div>
    );
}

