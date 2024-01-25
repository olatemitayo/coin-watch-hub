import { CoinContext } from "@/providers";
import { Button, Flex } from "@mantine/core";
import React, { useContext } from "react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";

export function Pagination() {

const {page, setPage, totalPages} = useContext(CoinContext)

  const TotalNumber = Math.ceil(totalPages/25);
  const nextBtn = () => {
    if (page === TotalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prevBtn = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const nextThree = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber);
    } else {
      setPage(page + 3);
    }
  };

  const prevThree = () => {
    if (page - 3 <= 1) {
      setPage(1);
    } else {
      setPage(page - 3);
    }
  };

  const pageOne = () => {
    setPage(1)
  }
  return (
    <Flex align="center">
      <ul className="flex gap-6 items-center justify-center text-[#202326]">
        {page === 1  ? null : (
          <div className="group cursor-pointer">
            <BsArrowLeftCircle
              onClick={prevBtn}
              className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-red-300"
              size={35}
            />
          </div>
        )}
        {page > 3 ?   <Button
            onClick={pageOne}
            className="cursor-pointer text-[#202326] hover:bg-red-300 hover:text-white  text-bold px-1  border-[#202326] hover:border-red-200 min-w-[35px] h-[35px] rounded-md"
          >
            {1} 
          </Button> : null}
        {page === 1 || page <= 1 + 1 ? null : (
          <div onClick={prevThree} className="cursor-pointer text-black">
            ...
          </div>
        )}
        {page === 1 ? null : (
          <Button
            onClick={prevBtn}
            className="cursor-pointer text-[#202326] hover:bg-red-300 hover:text-white  text-bold px-1  border-[#202326] hover:border-red-200 min-w-[35px] h-[35px] rounded-md"
          >
            {page - 1}
          </Button>
        )}

        <Button className="cursor-default bg-red-100 text-white border-red-100 hover:bg-red-100 text-bold px-1 text-center items-center fle  justify-center border min-w-[35px] h-[35px] rounded-md transition-all ease-in-out duration-300 ">
          {page}
        </Button>
        {page === TotalNumber ? null : (
          <Button
            onClick={nextBtn}
            className="cursor-pointer text-[#202326] hover:bg-red-300 hover:text-white  text-bold px-1  border-[#202326] hover:border-red-200 min-w-[35px] h-[35px] rounded-md "
          >
            {page + 1}
          </Button>
        )}
        {page === TotalNumber ||
        page >= TotalNumber - 1 ? null : (
          <div onClick={nextThree} className="cursor-pointer text-black ">
            ...
          </div>
        )}
        {page === TotalNumber ||
        page >= TotalNumber - 1 ? null : (
          <Button
            onClick={() => setPage(TotalNumber)}
            className="cursor-pointer bg-red-300 text-white  text-bold px-1border-red-200 min-w-[35px] h-[35px] rounded-md hover:bg-red-400"
          >
            {TotalNumber}
          </Button>
        )}

        {page === TotalNumber  ? null : (
          <div className="group cursor-pointer">
            <BsArrowRightCircle
              onClick={nextBtn}
              className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-red-300"
              size={35}
            />
          </div>
        )}
      </ul>
    </Flex>
  );
}
