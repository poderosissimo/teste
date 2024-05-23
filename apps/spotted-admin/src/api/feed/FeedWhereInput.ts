import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedWhereInput = {
  id?: StringFilter;
  posts?: PostListRelationFilter;
  user?: UserWhereUniqueInput;
};
