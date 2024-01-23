import { Skeleton } from "@mantine/core";

export  function ProductLoading() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="h-[30px] w-full">
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
        <Skeleton h="100%" mt={6} w="100%" radius="lg" />
      </div>
    </div>
  );
}
