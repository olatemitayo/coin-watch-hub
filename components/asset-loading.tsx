import { Skeleton } from "@mantine/core";

export  function ProductLoading() {
  return (
    <div className="w-full grid gap-2">
      <div className="h-[200px] w-full    gap-2 ">
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
      </div>
      <div className="h-[200px] w-full flex justify-between  ">
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
      </div>
      <div className="h-[200px] w-full flex justify-between  ">
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
        <Skeleton height="100%" mt={6} width="100%" radius="lg" />
      </div>
    </div>
  );
}
