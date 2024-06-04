export type Ticket = {
  assignedTo: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
