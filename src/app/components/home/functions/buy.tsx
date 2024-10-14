"use client"

import { InputTransactionData, useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { useState } from "react";
 
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);
export default function Buy() {
    const {account,signAndSubmitTransaction} = useWallet();
    const [created, setCreated] = useState(false);
    const buy_nft = async () => {
        console.log(account?.address)
          if (!account) return [];
          console.log(account);
          // change this to be your module account address
          const moduleAddress = "0xdfcd9ed51f8097cb616646b7a8ce6f41f8d8f1f9ed056179d895d9b30c2f7bdc";
          console.log("hey")
          try{
          const transaction:InputTransactionData = {
            data: {
              function:`${moduleAddress}::Project::buy_nft`,
              functionArguments:["0x5ec715cfb7059559913e38974806bb44d446ae01b745d8dfb4ed94aa0e0d976b",1,1]
            }
          }
          const response = await signAndSubmitTransaction(transaction);
          // wait for transaction
          await aptos.waitForTransaction({transactionHash:response.hash});
          console.log(response);
          setCreated(true);
        }catch(e) {
            console.log(e);
        }
        };
    return (<button onClick={async() =>{ console.log("hey"); await buy_nft()}}>
       { created ? 'Sold' : '0.001 ETH'}
       </button>)

}