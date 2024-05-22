export type Campaign = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
