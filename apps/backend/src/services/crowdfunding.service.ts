import { Injectable } from "@nestjs/common";
import { ethers } from "ethers";
import { provider } from "../utils/provider";
import CrowdfundingABI from "../abi/CrowdfundingABI.json";

@Injectable()
export class CrowdfundingService {
	private contract: ethers.Contract;
	private wallet: ethers.Wallet;

	constructor() {
		const privateKey = process.env.PRIVATE_KEY;
		const contractAddress = process.env.CONTRACT_ADDRESS;

		if (!privateKey || !contractAddress) {
			throw new Error("Missing environment variables: PRIVATE_KEY or CONTRACT_ADDRESS");
		}

		this.wallet = new ethers.Wallet(privateKey, provider);
		this.contract = new ethers.Contract(contractAddress, CrowdfundingABI, this.wallet);
	}

	async getTotalFunds(): Promise<string> {
		const total = await this.contract.totalFunds();
		return ethers.formatEther(total);
	}

	async withdraw(): Promise<string> {
		const tx = await this.contract.withdraw();
		await tx.wait();
		return tx.hash;
	}
}
