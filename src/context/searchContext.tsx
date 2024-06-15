import { createContext, useContext, useState } from "react";

export const SearchContext = createContext<any>(null);

export const SearchProduct = ({ children }: { children: React.ReactNode }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};
