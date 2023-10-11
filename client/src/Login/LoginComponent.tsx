import React, {useContext, useState} from 'react';
import {Button, Container, Form, FormGroup} from 'react-bootstrap';
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const AuthComponent: React.FC = () => {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(true);
    const {store} = useContext(Context)
    const navigate = useNavigate()
    const isLatinLetters = (input: string) => /^[a-zA-Z0-9]+$/.test(input);
    const handleClickIsLoginMode = () => {
        setIsLoginMode(!isLoginMode);
        setLogin("")
        setEmail("");
        setPassword("")
    }

    const handleAuthSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoginMode) {
            store.login(email, password)
            const token = localStorage.getItem('token');
            if (token) {
                console.log("U r logined")
                return navigate('/Rooms')
            }

        } else {
            store.registration(login, email, password)
            const token = localStorage.getItem('token');
            if (token){
                console.log("U r not logined")
                return navigate('/Rooms')
            }

        }
    };


    return (
        <Container className="w-25 mt-5 p-3 border rounded-3">
            <h2>{isLoginMode ? 'Вход' : 'Регистрация'}</h2>
            <Form onSubmit={handleAuthSubmit}>
                {!isLoginMode && <Form.Group controlId="formBasicLogin">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        type="login"
                        placeholder="Введите логин"
                        autoComplete="login"
                        value={login}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            if (isLatinLetters(inputValue) || inputValue === '') {
                                setLogin(inputValue);
                            }
                        }}
                        required
                    />
                </Form.Group>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>


                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        className="bg-"
                        type="password"
                        placeholder="Пароль"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <FormGroup className="mt-2 me-2">
                    <Button className="me-2" variant="primary" type="submit">
                        {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
                    </Button>

                    <Button
                        variant="link"
                        onClick={handleClickIsLoginMode}
                    >
                        {isLoginMode ? 'Создать аккаунт' : 'Уже есть аккаунт? Войти'}
                    </Button>
                </FormGroup>

            </Form>
        </Container>
    );
};

export default AuthComponent;
