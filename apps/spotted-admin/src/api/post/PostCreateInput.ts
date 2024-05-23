import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { FeedWhereUniqueInput } from "../feed/FeedWhereUniqueInput";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";
import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  feed?: FeedWhereUniqueInput | null;
  likes?: LikeCreateNestedManyWithoutPostsInput;
  media?: InputJsonValue;
};
