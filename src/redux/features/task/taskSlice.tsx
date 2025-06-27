import { createSlice } from "@reduxjs/toolkit";
import type { Itask } from "../../../interfaces/task.interface";
import type { RootState } from "../../store";

interface IinitialState {
  tasks: Itask[];
}

const initialState: IinitialState = {
  tasks: [
    {
      id: "1",
      title: "Design Homepage",
      description: "Create Home Page and routing",
      dueData: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "2",
      title: "Fix Login Bug",
      description: "Resolve mobile login issue",
      dueData: "2025-11",
      isCompleted: false,
      priority: "Medium",
    }
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
