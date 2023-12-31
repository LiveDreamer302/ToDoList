import $api from "../HTTP";

import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";


export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/Account/login', {email, password})
    }

    static async registration(displayName: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/Account/register', {displayName ,email, password})
    }

}