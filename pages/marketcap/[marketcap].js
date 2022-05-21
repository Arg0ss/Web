import React, { useState } from "react";
import { VictoryLine } from "victory";
import { useQuery } from "react-query";
import format from "date-fns/format";
import { useRouter } from "next/router";

export default function MarketCap() {
    const router = useRouter()
  const intervals = [
    {
      label: "1D",
      value: 1,
    },
    {
      label: "7D",
      value: 7,
    },
    {
      label: "1M",
      value: 30,
    },
    {
      label: "3M",
      value: 90,
    },
  ];


  const useGetChartData = (cryptoName, interval, options) => {
    return useQuery(
      ["chartData", interval],
      async () => {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=usd&days=7`
        )

        return await response.json();
      },
      options
    );
  };

  const [dataInterval, setDataInterval] = useState(intervals[0].value);

  const { isLoading, data } = useGetChartData(router.query.marketcap, dataInterval, {
    refetchInterval: 60000,
    staleTime: 60000,
    select: (data) =>
      data?.prices?.map((item) => ({
        x: item[0],
        y: item[1],
      })),
  });

  return (
    <>
      {isLoading ? (
        <h1>sadsa</h1>
      ) : (
        <VictoryLine
          style={{
            data: {
              stroke: "#000",
              strokeWidth: 1,
            },
          }}
          width={300}
          height={150}
          data={data}
        />
      )}
    </>
  );
}
