import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "receiver";

export const ChatTitle = (record: TChat): string => {
  return record.receiver?.toString() || String(record.id);
};
