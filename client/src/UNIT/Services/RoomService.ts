import $api from "../HTTP";

import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {Room} from "../models/IRooms";

export default class RoomService {
    static async getRooms(): Promise<AxiosResponse<Room[]>>{
        return $api.get('Rooms')
    }

    static async getRoom(roomid: number): Promise<AxiosResponse<Room>>{
        return $api.get(`Rooms/room/${roomid}`)
    }
    static async addTask(roomid: number, title: string, description: string, deadLine: string): Promise<AxiosResponse<Room>>{
        return $api.post(`Rooms/${roomid}/addtask`, {title, description, deadLine})
    }
    static async addUserToRoom(roomid: number, email: string): Promise<AxiosResponse<Room>>{
        console.log(email)
        return $api.post(`Rooms/adduser/${roomid}`, {email})
    }
}