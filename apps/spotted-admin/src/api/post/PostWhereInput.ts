import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { FeedWhereUniqueInput } from "../feed/FeedWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  feed?: FeedWhereUniqueInput;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  media?: JsonFilter;
};
