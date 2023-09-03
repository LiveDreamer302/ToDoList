import React, {useState} from 'react';
import {Button, Container, Form, FormGroup} from 'react-bootstrap';

interface AuthProps {
    onLogin: (login: string, password: string) => void;
    onRegister: (email: string, login: string, password: string) => void;
}

const AuthComponent: React.FC<AuthProps> = ({onLogin, onRegister}) => {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(true);

    const handleClickIsLoginMode = () => {
        setIsLoginMode(!isLoginMode);
        setLogin("")
        setEmail("");
        setPassword("")
    }

    const handleAuthSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoginMode) {
            onLogin(login, password);
        } else {
            onRegister(email, login, password);
        }
    };

    return (
        <Container className="w-25 mt-5 p-3 border rounded-3">
            <h2>{isLoginMode ? 'Вход' : 'Регистрация'}</h2>
            <Form onSubmit={handleAuthSubmit}>
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

                <Form.Group controlId="formBasicLogin">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        type="login"
                        placeholder="Введите логин"
                        autoComplete="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
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
