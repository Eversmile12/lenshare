import { ethers } from "ethers";
import { WalletHandler } from "~handlers/walletHandler";
import contract from "../abis/lens-hub-contract-abi.json";

export class LensHandler {
  private contract;

  async initializeSmartContract() {
    const walletHandler = new WalletHandler();
    const signer = await walletHandler.getSigner();
    this.contract = new ethers.Contract(
      "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d",
      contract,
      signer
    );
    return this.contract;
  }
}
