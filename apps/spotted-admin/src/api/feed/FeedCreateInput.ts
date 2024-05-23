import { PostCreateNestedManyWithoutFeedsInput } from "./PostCreateNestedManyWithoutFeedsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedCreateInput = {
  posts?: PostCreateNestedManyWithoutFeedsInput;
  user?: UserWhereUniqueInput | null;
};
