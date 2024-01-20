import { CoinContext } from "@/providers";

import { TextInput } from "@mantine/core";
import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";

export function Searchcoin() {
  const [searchText, setSearchText] = useState("");

  const { getSearchResult } = useContext(CoinContext);


  
  

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.target.value;
    console.log({ query });
    setSearchText(query);
    getSearchResult({query});
  };
  return (
    <>
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
      </form>
      {searchText.length > 0 ? (
        <ul className=" p-3 text-white font-medium flex flex-col gap-2 text-start absolute mt-[clamp(8px,1.5vw,24px)] bg-[#212326] w-[46%]  bg-opacity-80 backdrop-blur-md">
          <li>bitcoin</li>
          <li>eth</li>
          <li>bitcoin</li>
          <li>eth</li>
          <li>bitcoin</li>
          <li>eth</li>
          <li>bitcoin</li>
          <li>eth</li>
          <li>bitcoin</li>
          <li>eth</li>
          <li>bitcoin</li>
          <li>eth</li>
        </ul>
      ) : null}
    </>
  );
}
