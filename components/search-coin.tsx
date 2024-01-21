import { CoinContext } from "@/providers";
import debounce from "lodash.debounce";
import { Text, TextInput } from "@mantine/core";
import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = ({handleSearch}: {handleSearch: any}) => {
  const [searchText, setSearchText] = useState("");
  const {searchData} = useContext(CoinContext)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.target.value;
    console.log({ query });
    setSearchText(query);
    handleSearch({ query });
  };
  return(
    <form className="relative w-full">
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
    <ul className=" p-6 h-[500px] overflow-auto rounded-md text-white font-medium flex flex-col gap-2 text-start absolute mt-[clamp(8px,1.5vw,24px)] bg-[#212326] w-full  bg-opacity-60 backdrop-blur-md">
     {searchData ? searchData?.map((coin :any) => (
      <li key={coin?.id}>{coin?.name} </li>
     )) : <Text>Please wait....</Text>}
    </ul>
  ) : null}
  </form>
  )
}


export function Searchcoin() {
 

  const { getSearchResult } = useContext(CoinContext);

  const debounceFunc = debounce((val: any) => {
    getSearchResult(val);
  }, 2500); 
 
  return (
    <>
<SearchInput handleSearch={debounceFunc}/>
    
    </>
  );
}
