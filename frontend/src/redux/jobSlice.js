import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        alljobs: [],
        AllOtherJobs: [],
        singleJob: null,
        searchJobByText: "",
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.alljobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllOtherJobs: (state, action) => {
            state.AllOtherJobs = action.payload; // FIXED
        },
        setSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload; // FIXED
        },
    },
});

export const {
    setAllJobs,
    setSingleJob,
    setAllOtherJobs,
    setSearchJobByText,
} = jobSlice.actions;

export default jobSlice.reducer;
