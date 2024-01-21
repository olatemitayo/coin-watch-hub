import { CoinContext } from "@/providers";
import debounce from "lodash.debounce";
import { Box, Flex, Text, TextInput } from "@mantine/core";
import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = ({handleSearch}: {handleSearch: any}) => {
  const [searchText, setSearchText] = useState("");
  const {searchData, setCoinSearch, setSearchData} = useContext(CoinContext)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.target.value;
    console.log({ query });
    setSearchText(query);
    handleSearch({ query });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch(searchText)
  }

  const selectCoin = (coin : string | any) => {
    setCoinSearch(coin)
    setSearchData()
    setSearchText('')
  }
  return(
    <form className="relative w-full" onSubmit={handleSubmit}>
    <TextInput
      onChange={handleInput}
      value={searchText}
      classNames={{
        input:
          "border !border-red-400 py-[25px] px-[18px] rounded rounded-[24px]",
      }}
      className="w-full "
      placeholder="search an asset"
      rightSection={<BiSearch type="submit" size={24} />}
    />
  {searchText.length > 0 ? (
    <ul className="z-10 p-6 h-[500px] overflow-auto rounded-md text-white font-medium flex flex-col gap-2 text-start absolute mt-[clamp(8px,1.5vw,24px)] bg-[#212326] w-full  bg-opacity-60 backdrop-blur-md">
     {searchData ? searchData?.map((coin :any) => (
      <Flex key={coin?.id} onClick={() => selectCoin(coin?.id)} gap={8} align='center' className="cursor-pointer w-max hover:bg-red-200 hover:bg-opacity-40 p-2 rounded-md">
        <img className="w-[24px]" src={coin?.large} alt="" />
        <Flex gap={8} align='center'>
        <li className="text-[20px]">{coin?.name} </li>
        <div className="text-[12px] text-red-200">({coin?.symbol})</div>
        </Flex>
      </Flex>
     )) : <Text className="h-[500px]">Please wait....</Text>}
    </ul>
  ) : null}
  </form>
  )
}


export function Searchcoin() {
 

  const { getSearchResult } = useContext(CoinContext);

  const debounceFunc = debounce((val: any) => {
    getSearchResult(val);
  }, 2000); 
 
  return (
    <>
<SearchInput handleSearch={debounceFunc}/>
    
    </>
  );
}
