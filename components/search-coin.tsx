import { CoinContext } from "@/providers";
import debounce from "lodash.debounce";
import React, { useContext } from "react";
import { SearchInput } from ".";



export function Searchcoin() {
  const { getSearchResult } = useContext(CoinContext);

  const debounceFunc = debounce((val: string) => {
    getSearchResult(val);
  }, 3000);

  return (
    <>
      <SearchInput handleSearch={debounceFunc} />
    </>
  );
}
