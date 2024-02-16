/** @format */

import { useReadContracts } from "wagmi";
import USDTABI from "../Abi.json";

export const ReadContract = () => {
  const { data, error, isPending } = useReadContracts({
    contracts: [
      {
        abi: USDTABI,
        functionName: "name",
        address: "0xe3861ee26736cfe08ef9a001bb61ccfb6e6b597a",
      },
      {
        abi: USDTABI,
        functionName: "totalSupply",
        address: "0xe3861ee26736cfe08ef9a001bb61ccfb6e6b597a",
      },
    ],
  });
  const [name, totalSupply] = data || [];

  //   console.log("data:", data);
  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.shortMessage || error.message}</div>;

  return (
    <>
      <div>Name: {name?.result}</div>

      <div>Total Supply: {totalSupply?.result?.toString()}</div>
    </>
  );
};
