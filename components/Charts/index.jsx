import React, { useEffect, useState } from 'react'
import { VictoryLine } from "victory";

export default function Chrts({ id }) {
  const [ grafico, setGrafico ] = useState([])

  useEffect(() => {
    async function fethc() {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
      )  .then(response => response.json())
      .then((data) => {
        return setGrafico(data)
      })
    }
  
    fethc()

  }, [id])

  const sadas = grafico?.prices?.map((item) => ({
    x: item[0],
    y: item[1],
  }))

  return (
    <VictoryLine
        style={{
          data: {
            stroke: "#000",
            strokeWidth: 1,
          },
        }}
        width={300}
        height={150}
        data={sadas}
      />
  )
}
