import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";
import { CrowdfundingService } from "./services/crowdfunding.service";

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			installSubscriptionHandlers: true,
		}),
	],
	providers: [AppResolver, AppService, CrowdfundingService],
})
export class AppModule {}
