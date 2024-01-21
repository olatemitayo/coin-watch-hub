import React, { ReactNode, useLayoutEffect, useState } from "react";
import { createContext } from "react";
import {  SearchCoin, SearchData, SearchPokedex } from "@/utils";



interface CoinContextProps {
  cryptoData: any;
  isLoading: boolean;
  searchData: any;
  getSearchResult: any ;
  setCoinSearch: any;
  setSearchData: any;
  coinSearch: any
}

// Create your context
export const CoinContext = createContext<CoinContextProps>({
  cryptoData: undefined,
  isLoading: false,
  searchData: undefined,
  getSearchResult: () => {},
  setCoinSearch: () => {},
  setSearchData: () => {},
  coinSearch: undefined
});

// Create your context provider component
export const CryptoProvider = ({ children }: { children: ReactNode }) => {
  const [cryptoData, setCryptoData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState()
  const [coinSearch, setCoinSearch] = useState("")

  

  const getCryptoData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en`
      ).then((res) => res.json());
      setCryptoData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchResult = async ({query}:{query:string}) => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      ).then((res) => res.json()).then(json => json);
      setSearchData(data?.coins);
      console.log({searchData})
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch]);

  return (
    <CoinContext.Provider value={{ cryptoData, isLoading, searchData, getSearchResult, setCoinSearch, setSearchData, coinSearch }}>
      {children}
    </CoinContext.Provider>
  );
};
