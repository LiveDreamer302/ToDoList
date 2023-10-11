import {useNavigate, useParams} from 'react-router-dom';
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {Room} from "../UNIT/models/IRooms";
import NavbarMy from "../components/navbar";
import Footer from "../components/footer";
import './Room.css'
import TaskList from "../components/TaskList/TaskList";
import ModalAddTask from "../components/ModalAddTask/ModalAddTask";
import UserModal from "../components/ModalAddTask/ModalAddUser";
import RoomService from "../UNIT/Services/RoomService";
// ...
const RoomPage = () => {
    const params = useParams<{ roomId: string }>();
    const roomId = params.roomId ? parseInt(params.roomId, 10) : 0;
    const { store } = useContext(Context);
    const [room, setRoom] = useState<Room | undefined>(undefined);
    const navigate = useNavigate();
    const [isModalTaskOpen, setModalTaskOpen] = useState(false);
    const [isModalUserOpen, setModalUserOpen] = useState(false);
    const handleAddTaskClick = () =>{
        setModalTaskOpen(true);
    }
    const handleAddUserClick = () =>{
        setModalUserOpen(true);
    }
    const handleSaveTask = (taskName: string, taskDescription: string, taskDeadline: string ) => {
        console.log(taskName)
        console.log(taskDescription)
        console.log(taskDeadline)
        store.addTask(roomId, taskName, taskDescription, taskDeadline)
        window.location.reload()
    }
    const handleAddUser = (email:string) => {
        console.log(email)
        RoomService.addUserToRoom(roomId, email)
    }

    async function fetchRoom() {
        try {
            if (roomId) {
                const response = await store.getRoom(roomId);
                // Проверяем, что response - массив, и берем первый элемент
                if (Array.isArray(response) && response.length > 0) {
                    setRoom(response[0]);
                }
            }
        } catch (e) {
            console.error('Error', e);
        }
    }

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login');
            return;
        }
        fetchRoom();
    }, []);

    return (
        <>
            <NavbarMy/>
            <div className="main">
                {/*<h1>Комната: {room?.roomName}</h1>*/}
                {room?.tasks && <TaskList tasks={room?.tasks}/>}
                {/*<ul>*/}
                {/*    {room && room.appUsers && room.appUsers.length > 0 ? (*/}
                {/*        room.appUsers.map((appUser) => (*/}
                {/*            <li key={appUser.id}>{appUser.displayName}</li>*/}
                {/*        ))*/}
                {/*    ) : (*/}
                {/*        <li>No appUsers available</li>*/}
                {/*    )}*/}
                {/*</ul>*/}
            </div>
            <button
                type="button"
                className="btn btn-primary my-5 ms-5"
                onClick={handleAddTaskClick}
            >
                Add Task
            </button>
            <button
                type="button"
                className="btn btn-primary my-5 ms-5"
                onClick={handleAddUserClick}
            >
                Add User
            </button>
            <ModalAddTask isOpen={isModalTaskOpen} onClose={() => setModalTaskOpen(false)} onSave={handleSaveTask}/>
            <UserModal isOpen={isModalUserOpen} onClose={() => setModalUserOpen(false)} onSave={handleAddUser}/>
            <Footer/>
        </>
    );
};

export default RoomPage;
