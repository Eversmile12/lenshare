import { ethers } from "ethers"
import { getProvider, getSigner, getWindowProvider } from "~handlers/walletHandler"
import contract from "../abis/lens-hub-contract-abi.json"




export const lensHub = new ethers.Contract("", contract,  )