/** @format */

import React from "react";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";

export function SendTransaction() {
  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  const submit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const to = formData.get("address");
    const value = formData.get("value");
    sendTransaction({ to, value: parseEther(value) });
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <form onSubmit={submit} className='my-2'>
      <input
        name='address'
        placeholder='0xA0Cf…251e'
        required
        className=' py-2 border-0 rounded-md px-2 text-sm'
      />
      <input
        name='value'
        placeholder='0.05'
        required
        className=' py-2 border-0 rounded-md px-2 text-sm'
      />
      <button
        disabled={isPending}
        type='submit'
        className='bg-gray-400 px-3 py-2 rounded-md border-0 my-2 text-sm'>
        {isPending ? "Confirming..." : "Send"}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && (
        <div className='text-red-700 my-2'>
          Error: {error.shortMessage || error.message}
        </div>
      )}
    </form>
  );
}
