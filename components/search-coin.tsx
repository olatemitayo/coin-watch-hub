import { CoinContext } from "@/providers";
import debounce from "lodash.debounce";
import React, { useContext } from "react";
import { SearchInput } from ".";



export function Searchcoin() {
  const { getSearchResult } = useContext(CoinContext);

  const debounceFunc = debounce((val: any) => {
    getSearchResult(val);
  }, 2000);

  return (
    <>
      <SearchInput handleSearch={debounceFunc} />
    </>
  );
}
