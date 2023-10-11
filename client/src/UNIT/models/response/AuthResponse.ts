import {IUser} from "../IUser";

export interface AuthResponse{
    email:string,
    displayName: string,
    token: string,
}