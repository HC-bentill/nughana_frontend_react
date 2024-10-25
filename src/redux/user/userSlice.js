import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
		userInformation: null,
	},
	reducers: {
		setLogin: (state, action) => {
			state.user = action.payload;
		},
		setLogout: (state) => {
			state.user = null;
		},
		setUserInformation: (state, action) => {
			state.userInformation = action.payload;
		},
	},
});

export const {setLogin, setLogout, setUserInformation} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
