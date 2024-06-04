import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "orderClientId";

export const OrderTitle = (record: TOrder): string => {
  return record.orderClientId?.toString() || String(record.id);
};
