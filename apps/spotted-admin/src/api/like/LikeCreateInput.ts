import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  post?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
