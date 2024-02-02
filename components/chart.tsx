import { builder } from "@/api/builder";
import { Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const ChartComponent = ({ data }: { data: string | number[] }) => {
  return (
    <ResponsiveContainer width={'70%'} className='lg:!w-full' height={400}>
    <LineChart width={800} height={400} data={data as any}>
      <Line
        type="monotone"
        dataKey="prices"
        stroke="#8884d8"
        strokeWidth="2px"
      />
       <CartesianGrid stroke="#eee" strokeDasharray="5 5" strokeWidth='2px'/>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>

    </ResponsiveContainer>
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
      date: new Date(item[0]).toLocaleDateString(undefined, {
        month: "numeric",
        day: "numeric",
      }),
      prices: item[1] 
    };
  });
  console.log({ convertedData });
  return (
    <Flex
    //   className="w-full clg:w-[680px] cmd:w-[511px] cgsm:w-[420px] cgsm:h-[300px] gsm:w-[380px]"
    className="w-full h-[60%]"
      align="center"
      justify="center"
    >
      <ChartComponent data={convertedData as unknown as string | number[]} />
    </Flex>
  );
}
