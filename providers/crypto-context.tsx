// import { builder } from "@/api/builder";
// import { useQuery } from "@tanstack/react-query";
// import React, { ReactNode, useEffect, useState } from "react";
// import { createContext } from "react";
// import { useDebouncedValue } from "@mantine/hooks";

// // Define your Coin and CoinContextProps interfaces
// interface Coin {
//   id: string;
//   name: string;
//   // ... other properties
// }

// interface CoinContextProps {
//   coinData: Coin[] | undefined;

//   isLoading: boolean; // Include isLoading in your context interface
//   searchCoinData?: string | null;
//   searchData: any;
//   getSearchData: any;
//   setSearchData: React.Dispatch<React.SetStateAction<string | any>>;
// }

// // Create your context
// export const CoinContext = createContext<CoinContextProps>({
//   coinData: undefined,
//   isLoading: false, 
//   searchData: null,
//   getSearchData: () => {},
//   setSearchData: () => {},
// });

// // Create your context provider component
// export const CoinProvider = ({ children }: { children: ReactNode }) => {
//   const [coinData, setCoinData] = useState<Coin[] | undefined>();
//   const [isLoading, setIsLoading] = useState<boolean>(false); //
//   const [searchData, setSearchData] = useState("");
//   //

//   // DATA FOR EXPLORE PAGE
//   const { data: exploreData, isLoading: queryIsLoading } = useQuery({
//     queryFn: () => builder.use().asset.coin_list(),
//     queryKey: builder.asset.coin_list.get(),
//     select: ({ data }) => data,
//     enabled: !coinData,
//   });

//   // Set isLoading based on the query loading state
//   useEffect(() => {
//     setIsLoading(queryIsLoading);
//   }, [queryIsLoading]);

//   // Only set the coinData if the data has been successfully fetched
//   useEffect(() => {
//     if (!queryIsLoading) {
//       setCoinData(exploreData);
//     }
//   }, [exploreData, queryIsLoading]);

//   // SEARCH DATA
//   const { data: getSearchData } = useQuery({
//     queryFn: () => builder.use().asset.search(searchData),
//     queryKey: builder.asset.search.use(searchData),
//     select: ({ data }) => data,
//   });
//   console.log({ getSearchData });

//   useEffect(() => {
//     setSearchData(getSearchData);
//   }, []);

//   return (
//     <CoinContext.Provider
//       value={{ coinData, isLoading, searchData, getSearchData, setSearchData }}
//     >
//       {children}
//     </CoinContext.Provider>
//   );
// };
