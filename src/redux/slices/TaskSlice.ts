import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "types";

type Role = "worker" | "employer" | "client" | "admin" | undefined

type initialCompanyState = {
    selectedTask: ITask | undefined,
    role: Role,
    selectedData: any
}

const role = localStorage.getItem("role") || undefined

const initialState: initialCompanyState = {
    selectedTask: undefined,
    role: role as Role,
    selectedData: undefined
}

const TaskSlice = createSlice(({
    name: "task",
    initialState,
    reducers: {
        setSelectedTask: (state, action) => {
            state.selectedTask = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
            localStorage.setItem("role", state.role!)
        },
        setSelectedData: (state, action) => {
            state.selectedData = action.payload
        }
    }
}))

export default TaskSlice.reducer;
export const { setSelectedTask, setRole, setSelectedData } = TaskSlice.actions