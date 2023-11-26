import { createReducer, on } from "@ngrx/store";

import { User } from "../../users/user.model";
import { patchUserDetails, setUsers } from "./users.actions";

const initialState: User[] = [];

export const userReducer = createReducer(
    initialState,
    on(setUsers, (state, action) => action.data),
    on(patchUserDetails, (state, { data }) => {
        const newUserList = [...state];
        newUserList[data.id - 1] = data;
        return newUserList;
    })
);