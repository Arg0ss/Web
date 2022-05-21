import React from "react";
import { useQuery } from "react-query";
import { Table  } from "antd";
import Router from "next/router";
const useGetCardData = (options) => {
  return useQuery(
    `getdata-card`,
    async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&days=7`
      );
      return await response.json();
    },
    options
  );
};

export const formatPrice = (price) => {
  const formatConfig = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatConfig.format(price);
};

const formatPlusMinus = (priceChange) => {
  const isPositive = Math.sign(priceChange) >= 0;

  return (
    <span className={`${isPositive ? "positive" : "negative"}`}>
      {`${priceChange.toFixed(2)}%`}
    </span>
  );
};

export default function List() {
  const columns = [
    {
      title: "#",
      dataIndex: "market_cap_rank",
      key: "market_cap_rank",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => {
        return <img draggable={false} width={25} src={image} alt="avatar" />;
      },
    },
    {
      title: "Name",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return <a onClick={() => Router.push(`/marketcap/${id}`)}>{id}</a>;
      },
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
    },
    {
      title: "Price",
      dataIndex: "current_price",
      key: "current_price",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.current_price - b.current_price,
      render: (current_price) => {
        return <>{formatPrice(current_price)}</>;
      },
    },
    {
      title: "24h",
      dataIndex: "market_cap_change_percentage_24h",
      key: "market_cap_change_percentage_24h",
      render: (market_cap_change_percentage_24h) => {
        return <>{formatPlusMinus(market_cap_change_percentage_24h)}</>;
      },
    },
    {
      title: "24h Volume",
      dataIndex: "market_cap_change_24h",
      key: "market_cap_change_24h",
      render: (market_cap_change_24h) => {
        return <>{formatPrice(market_cap_change_24h)}</>;
      },
    },
    {
      title: "market cap",
      dataIndex: "market_cap",
      key: "market_cap",
      render: (market_cap) => {
        return <>{formatPrice(market_cap)}</>;
      },
    },
  ];

  const { data, isLoading } = useGetCardData({
    refetchInterval: 60000,
    staleTime: 60000,
  });

  console.log(data)


  if (isLoading) return null;

  return (
    <Table
      columns={columns}
      dataSource={data}
    />
  );
}
