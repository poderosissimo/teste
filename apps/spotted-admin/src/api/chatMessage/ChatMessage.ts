export type ChatMessage = {
  createdAt: Date;
  id: string;
  message: string | null;
  senderId: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
