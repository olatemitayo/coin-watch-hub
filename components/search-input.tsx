import { CoinContext } from "@/providers";
import { Box, Flex, Loader, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";

export function SearchInput({ handleSearch }: { handleSearch: any }){
    const [searchText, setSearchText] = useState("");
    const { searchData, setCoinSearch, setSearchData } = useContext(CoinContext);
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const query = e.target.value;
      handleSearch({ query });
      setSearchText(query);
    };
  
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSearch(searchText);
    };
  
    const selectCoin = (coin: string | any) => {
      setCoinSearch(coin);
      setSearchData();
      setSearchText("");
    };
    return (
      <form className="relative w-full" onSubmit={handleSubmit}>
        <TextInput
          onChange={handleInput}
          value={searchText}
          classNames={{
            input:
              "border !border-red-400 py-[25px] px-[18px] clg:py-[12px] clg:px-[10px] rounded rounded-[24px] clg:rounded-[16px]",
          }}
          className="w-full "
          placeholder="search an asset"
          rightSection={<BiSearch type="submit" size={24} />}
        />
        {searchText.length > 0  ? (
          <ul className="z-10 p-6 clg:p-2 h-[500px] overflow-auto rounded-md text-white font-medium flex flex-col gap-2 clg:gap-1 text-start absolute mt-[clamp(8px,1.5vw,24px)] bg-[#212326] w-full  bg-opacity-60 backdrop-blur-md">
            <Box></Box>
            {searchData ? (
              searchData?.map((coin: any) => (
                <Flex
                  key={coin?.id}
                  onClick={() => selectCoin(coin?.id)}
                  gap={8}
                  align="center"
                  className="cursor-pointer w-max hover:bg-red-200 hover:bg-opacity-40 p-2 cld:p-1 rounded-md"
                >
                  <img className="w-[24px] clg:w-[16px]" src={coin?.large} alt="" />
                  <Flex gap={8} align="center">
                    <li className="text-[20px] clg:text-[14px]">{coin?.name} </li>
                    <div className="text-[12px] clg:text-[10px] text-red-200">
                      ({coin?.symbol})
                    </div>
                  </Flex>
                </Flex>
              ))
            ) : (
              <Flex className="w-full clg:!h-[200px]" h={400} justify="center" align="center">
                <Loader color="red" />
              </Flex>
            )}
          </ul>
        ) : null}
      </form>
    );
  };

