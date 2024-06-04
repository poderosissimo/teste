import { Injectable } from "@nestjs/common";
import { ConfirmationMessageInput } from "../userModule/ConfirmationMessageInput";
import { IdentityVerificationInput } from "../userModule/IdentityVerificationInput";
import { UserProfileUpdateInput } from "../userModule/UserProfileUpdateInput";
import { RegisterUserInput } from "../userModule/RegisterUserInput";

@Injectable()
export class UserModuleService {
  constructor() {}
  async ConfirmationSend(args: ConfirmationMessageInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async IdentityVerify(args: IdentityVerificationInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProfileUpdate(args: UserProfileUpdateInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SendConfirmation(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateProfile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UserRegister(args: RegisterUserInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async VerifyIdentity(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
