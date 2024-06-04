import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { FeedWhereUniqueInput } from "../feed/FeedWhereUniqueInput";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  feed?: FeedWhereUniqueInput | null;
  likes?: LikeUpdateManyWithoutPostsInput;
  media?: InputJsonValue;
};
