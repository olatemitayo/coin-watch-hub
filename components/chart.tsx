import { builder } from "@/api/builder";
import { Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

function CustomTooltip({ payload, label, active, currency = "usd" }: any) {
  if (active) {
    return (
      <div className="custom-tooltip bg-white p-2 chartShadows">
     
        <p className="desc text-[#9EA6FF] font-semibold">{label} </p>
        <p className="label text-sm text-black font-semibold">{` ${
          new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 5,
          }).format(payload[0]?.value)
          }`}</p>
      </div>
    );
  }
  return null;
}

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
       <CartesianGrid stroke="#9EA6FF" strokeDasharray="5 5" strokeWidth='2px'/>
      <XAxis dataKey="date"  hide/>
      <YAxis dataKey='prices' hide domain={["auto", "auto"]}/>
      <Tooltip content={<CustomTooltip payload={undefined} label={undefined} active={undefined} cursor={false} />}/>
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
    className="w-full h-[60%]"
      align="center"
      justify="center"
    >
      <ChartComponent data={convertedData as unknown as string | number[]} />
    </Flex>
  );
}
