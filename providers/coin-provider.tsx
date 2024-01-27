import React, { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { createContext } from "react";
import {  SearchCoin, SearchData, SearchPokedex } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";



interface CoinContextProps {
  cryptoData:  any;
  isLoading: boolean;
  searchData: any;
  getSearchResult: any ;
  setCoinSearch: any;
  setSearchData: any;
  coinSearch: any
  page: number;
  setPage: any
  totalPages: number
  setPerPage: any;
  perPage: number
  trendLoading: boolean
  trendingData: any
}


// Create your context
export const CoinContext = createContext<CoinContextProps>({
  cryptoData: '--',
  isLoading: false,
  searchData: undefined,
  getSearchResult: () => {},
  setCoinSearch: () => {},
  setSearchData: () => {},
  coinSearch: undefined,
  page: 1,
  setPage : () => {},
  totalPages: 250,
  setPerPage: () => {},
  perPage: 10,
  trendLoading: false,
  trendingData: undefined
});

// Create your context provider component
export const CryptoProvider = ({ children }: { children: ReactNode }) => {
  const [cryptoData, setCryptoData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState()
  const [coinSearch, setCoinSearch] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(250)
  const [perPage, setPerPage] = useState(10)

  

  const getCryptoData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/list`
      ).then((res) => res.json());
      setTotalPages(data.length);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&locale=en`
      ).then((res) => res.json());
      setCryptoData(data);
      console.log({data})
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
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCryptoData();
  }, [coinSearch, page, perPage]);

  const {
    data: trendingData,
    isLoading:trendLoading,
    isError,
  } = useQuery({
    queryFn: () => builder.use().asset.trending(),
    queryKey: builder.asset.trending.get(),
    select: ({ data }) => data?.coins?.map((item) => item?.item),
  });

  return (
    <CoinContext.Provider value={{ cryptoData, isLoading, searchData, getSearchResult, setCoinSearch, setSearchData, coinSearch, page, setPage, totalPages, setPerPage, perPage, trendLoading, trendingData }}>
      {children}
    </CoinContext.Provider>
  );
};
