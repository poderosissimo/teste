export type Lead = {
  createdAt: Date;
  dateCaptured: Date | null;
  id: string;
  potentialValue: number | null;
  source: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
