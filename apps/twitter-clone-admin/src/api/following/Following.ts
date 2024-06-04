export type Following = {
  createdAt: Date;
  follower: string | null;
  following?: Following | null;
  followings?: Array<Following>;
  id: string;
  updatedAt: Date;
};
