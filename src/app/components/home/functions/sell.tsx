"use client"

import { InputTransactionData, useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { useState } from "react";
 
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);
export default function Collection() {
    const {account,signAndSubmitTransaction} = useWallet();
    const [created, setCreated] = useState(false);
    const mint_nft = async () => {
        console.log(account?.address)
          if (!account) return [];
          console.log(account);
          // change this to be your module account address
          const moduleAddress = "0xdfcd9ed51f8097cb616646b7a8ce6f41f8d8f1f9ed056179d895d9b30c2f7bdc";
          console.log("hey")
          try{
          const transaction:InputTransactionData = {
            data: {
              function:`${moduleAddress}::Project::mint_nft`,
              functionArguments:[[1],[1],[1],1]
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
    return (<button onClick={async() =>{ console.log("hey"); await mint_nft()}}>
        Sell your NFT
       </button>)

}