export interface Itask {
  id: string;
  title: string;
  description: string;
  dueData: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low" | "None";
}
