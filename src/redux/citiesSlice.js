import { createSlice } from "@reduxjs/toolkit";;

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
            id: 0,
            name: "Tokio",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure.",
            imgUrl:"https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: true,
            },
            {
            id: 1,
            name: "New York",
            description : "Lorem ipsum dolor sit amet.",
            imgUrl:"https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
            isVisited: false,
            },
            {
            id: 2,
            name: "Rome",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis officiis facilis odio asperiores assumenda? Quisquam.",
            imgUrl:"https://images.unsplash.com/photo-1598258500419-5d7895465a20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: true,
            },
            {
            id: 3,
            name: "Paris",
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            imgUrl:"https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: false,
            },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

export const { add } = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;