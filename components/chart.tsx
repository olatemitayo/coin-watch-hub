import { builder } from "@/api/builder";
import { Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const ChartComponent = ({ data }: { data: string | number[] }) => {
  return (
    <LineChart width={400} height={400} data={data as any}>
      <Line
        type="monotone"
        dataKey="prices"
        stroke="#8884d8"
        strokeWidth="2px"
      />
      <XAxis dataKey="data" />
      <YAxis dataKey='data'/>
    </LineChart>
  );
};

export function Chart({ id }: { id: string }) {
  const { data: chartData } = useQuery({
    queryFn: () => builder.use().asset.chart(id as string),
    queryKey: builder.asset.chart.use(id as string),
    select: ({ data }) => data,
    enabled: !!id,
  });
  console.log({ chartData });
  const convertedData = chartData?.prices.map((item: number[]) => {
    return {
      data: new Date(item[0]).toLocaleDateString(),
      prices: item[1],
    };
  });
  console.log({ convertedData });
  return (
    <Flex>
      <ChartComponent data={convertedData as unknown as string | number[]} />
    </Flex>
  );
}
