import { User } from "../users/user.model";
import { userReducer } from "./usersSlice/users.reducer";

export const initialState = {
    users: userReducer
};

export interface StoreDetails {
    users?: User[];
}