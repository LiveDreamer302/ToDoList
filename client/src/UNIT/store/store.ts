import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../Services/AuthService";
import RoomService from "../Services/RoomService";
import {Room} from "../models/IRooms";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    // rooms =  [] as Room[]
    // room = {} as Room
    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(email: string, displayName: string) {
        this.user.email = email;
        this.user.displayName = displayName;
    }


    async login(email: string, password: string) {
        try {
            console.log(email, password)
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('displayName', response.data.displayName)
            localStorage.setItem('email', response.data.email)
            this.setAuth(true)
            this.setUser(response.data.email, response.data.displayName);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(displayName: string, email: string, password: string) {
        try {
            const response = await AuthService.registration(displayName, email, password);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('displayName', response.data.displayName)
            localStorage.setItem('email', response.data.email)
            this.setAuth(true)
            this.setUser(response.data.email, response.data.displayName);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            localStorage.clear()
            this.setAuth(false)
            this.setUser('', '');
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async getRoomsFromServer() {
        try {
            const response = await RoomService.getRooms()
            console.log(response)
            return response.data;
        } catch (error) {
            console.error('Ошибка при получении комнат:', error);
            throw error;
        }
    }

    async getRoom(roomId: number) {
        try {
            const response = await RoomService.getRoom(roomId)
            console.log(response)
            return response.data
        } catch (e) {
            console.error('Ошибка при получении комнаты:', e);
            throw e;
        }
    }

    async addTask(roomId: number, title: string, description: string, deadLine: string){
        try {
            const response = await RoomService.addTask(roomId, title, description, deadLine)
            console.log(response)
        } catch (e) {
            console.error("Ошибка при добавлении task" ,e)
        }
    }
    async addUserToRoom(roomId: number, email: string){
        try {
            const response = await RoomService.addUserToRoom(roomId, email)
            console.log(response)
        } catch (e) {
            console.error("Ошибка при добавлении user" ,e)
        }
    }
}