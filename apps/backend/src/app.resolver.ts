import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { CrowdfundingService } from "./services/crowdfunding.service";

@Resolver()
export class AppResolver {
	constructor(private readonly crowdfundingService: CrowdfundingService) {}

	@Query(() => String)
	async totalFunds(): Promise<string> {
		return this.crowdfundingService.getTotalFunds();
	}

	@Mutation(() => String)
	async withdraw(): Promise<string> {
		return this.crowdfundingService.withdraw();
	}

	@Query(() => String)
	hello() {
		return "Hello from Backend!";
	}
}
