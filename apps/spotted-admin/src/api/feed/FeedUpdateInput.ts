import { PostUpdateManyWithoutFeedsInput } from "./PostUpdateManyWithoutFeedsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedUpdateInput = {
  posts?: PostUpdateManyWithoutFeedsInput;
  user?: UserWhereUniqueInput | null;
};
