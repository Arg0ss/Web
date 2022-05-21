import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Charts from '../../components/Charts'

export default function MarketCap() {
    const router = useRouter()
    console.log(router)
    const { marketcap } = router.query

  return (
    <>
    {router.isReady && (
 <Charts id={marketcap} />
    )}
    </>
  );
}
