import React, {useState} from "react";
import NavbarMy from "../components/navbar";
import Footer from "../components/footer";
import './rooms.css'

interface typeUserData {
    username: string,
    userRooms: string[]
}

const RoomsPage = ({userData}: { userData: typeUserData }) => {

    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleSearch = () => {
        // Add your search logic here, and update searchResults as needed
    };

    return (
        <>
            <NavbarMy/>
            <div className="main container mt-4 h">
                <h1>Добро пожаловать, {userData.username}!</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Ваши комнаты</h3>
                        <ul>
                            {userData.userRooms.map((room: string, index: number) => (
                                <li key={index}>{room}</li>
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
