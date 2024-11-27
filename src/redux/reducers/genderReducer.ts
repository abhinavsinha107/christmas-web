import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum Gender {
  straight = "Straight",
  gay = "Gay",
  lesbian = "Lesbian",
}

interface GenderState {
  gender: string;
}

const initialState: GenderState = {
  gender: Gender.straight,
};

export const genderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<{ gender: string }>) => {
      state.gender = action.payload.gender;
    },
  },
});

export const { setGender } = genderSlice.actions;

export default genderSlice.reducer;
