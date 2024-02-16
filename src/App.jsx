/** @format */
import "./App.css";

import { useAccount, useSignMessage } from "wagmi";
import { SendTransaction } from "./utils/SendTransaction";
import { ReadContract } from "./utils/ReadContract";

function App() {
  const { address } = useAccount();

  const { signMessage } = useSignMessage();

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col bg-black text-white font-sans'>
      <h1>Welcome to the New World of Web3 Development!</h1>
      <p>This is a simple app built with React and Web3Modal.</p>
      <w3m-button />
      <w3m-network-button />

      <button
        className='bg-gray-400 px-3 py-2 rounded-md border-0 my-2 text-sm'
        onClick={() => signMessage({ message: "hello world" })}>
        Sign message
      </button>
      <h5>Send Transaction </h5>
      <SendTransaction />
      <h5>Read Information (bsc Testnet)</h5>
      <ReadContract />
    </div>
  );
}

export default App;
