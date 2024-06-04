import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  post?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
