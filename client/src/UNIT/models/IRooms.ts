export type Root = Room[]

export interface Room {
    roomId: number
    roomName: string
    appUsers: AppUser[]
    tasks: Task[]
}

export interface AppUser {
    id: string
    displayName: string
    email: string
}

export interface Task {
    title: string
    description: string
    deadLine: string
    isDone: boolean
    id: number
}
