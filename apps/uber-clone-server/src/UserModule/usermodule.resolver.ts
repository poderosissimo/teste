import * as graphql from "@nestjs/graphql";
import { ConfirmationMessageInput } from "../userModule/ConfirmationMessageInput";
import { IdentityVerificationInput } from "../userModule/IdentityVerificationInput";
import { UserProfileUpdateInput } from "../userModule/UserProfileUpdateInput";
import { RegisterUserInput } from "../userModule/RegisterUserInput";
import { UserModuleService } from "./usermodule.service";

export class UserModuleResolver {
  constructor(protected readonly service: UserModuleService) {}

  @graphql.Mutation(() => String)
  async ConfirmationSend(
    @graphql.Args()
    args: ConfirmationMessageInput
  ): Promise<string> {
    return this.service.ConfirmationSend(args);
  }

  @graphql.Mutation(() => String)
  async IdentityVerify(
    @graphql.Args()
    args: IdentityVerificationInput
  ): Promise<string> {
    return this.service.IdentityVerify(args);
  }

  @graphql.Mutation(() => String)
  async ProfileUpdate(
    @graphql.Args()
    args: UserProfileUpdateInput
  ): Promise<string> {
    return this.service.ProfileUpdate(args);
  }

  @graphql.Query(() => String)
  async RegisterUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RegisterUser(args);
  }

  @graphql.Query(() => String)
  async SendConfirmation(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendConfirmation(args);
  }

  @graphql.Query(() => String)
  async UpdateProfile(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateProfile(args);
  }

  @graphql.Mutation(() => String)
  async UserRegister(
    @graphql.Args()
    args: RegisterUserInput
  ): Promise<string> {
    return this.service.UserRegister(args);
  }

  @graphql.Query(() => String)
  async VerifyIdentity(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.VerifyIdentity(args);
  }
}
