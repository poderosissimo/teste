import { ChatMessage as TChatMessage } from "../api/chatMessage/ChatMessage";

export const CHATMESSAGE_TITLE_FIELD = "senderId";

export const ChatMessageTitle = (record: TChatMessage): string => {
  return record.senderId?.toString() || String(record.id);
};
