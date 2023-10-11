import React, {useContext, useEffect, useState} from "react";
import NavbarMy from "../components/navbar";
import Footer from "../components/footer";
import './rooms.css'
import {Context} from "../index";
import {Room} from "../UNIT/models/IRooms";
import {set} from "mobx";
import {Link, useNavigate} from "react-router-dom";
import room from "../Room/Room";

interface typeUserData {
    username: string,
    userRooms: string[]
}

const RoomsPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const {store} = useContext(Context)
    const [rooms, setRooms] = useState<Room[]>([])
    const navigate = useNavigate()
    async function fetchRooms() {
        try {
            const response = await store.getRoomsFromServer()
            setRooms(response)
        } catch (e){
            console.log('Error', e)
        }
    }
    useEffect(()=> {
        if(!localStorage.getItem("token")){
            return navigate('/login')
        }
        fetchRooms()
    }, [])
    const handleSearch = () => {
        // Add your search logic here, and update searchResults as needed
    };
    // console.log(room    )
    return (
        <>
            <NavbarMy/>
            <div className="main container mt-4 h">
                <h1>Добро пожаловать, {localStorage.getItem("displayName")}!</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Ваши комнаты</h3>
                        <ul>
                            {rooms.map((room: any, index: number) => (
                                <li key={index}><Link to={`/room/${room.roomId}`}> {room.roomName}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Поиск комнат</h3>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Введите название комнаты"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button" onClick={handleSearch}>
                                    Найти
                                </button>
                            </div>
                        </div>
                        {searchResults.length > 0 ? (
                            <ul>
                                {searchResults.map((room: string, index: number) => (
                                    <li key={index}>{room}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Ничего не найдено.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default RoomsPage;
