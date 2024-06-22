import { createSlice } from "@reduxjs/toolkit";


export const stepperSlice = createSlice({
    name: 'stepper',
    initialState: {
        currentstepper: 0,
        stepsFormData: [

        ]
    },
    reducers: {
        incrementStepper: (state, action) => {
            if (!action.payload && action.payload === 0) {
                state.currentstepper = 0;
            } else {
                state.currentstepper = state.currentstepper + 1;
            }

        }
    }
})

export const { incrementStepper } = stepperSlice.actions;
export default stepperSlice.reducer;