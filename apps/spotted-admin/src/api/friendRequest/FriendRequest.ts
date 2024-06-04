export type FriendRequest = {
  createdAt: Date;
  id: string;
  receiver: string | null;
  sender: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
