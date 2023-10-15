import React from 'react';
import './styles.css';

const Register = () => {
    const [user, setUser] = React.useState({
        fullname: '',
        email: '',
        password: '',
        name: '',
        username: '',
        phone: '',
        birthday: '',
    });

    const [message, setMessage] = React.useState(null);

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.status === 200) {
                setMessage('User registered successfully');
            } else {
                const error = await response.json();
                setMessage(error.message);
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="container">
            {message && <div className="message">{message}</div>}
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullname">Nombre:</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Enter your fullname"
                        required
                        value={user.fullname}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Teléfono:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        value={user.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="birthdate">Fecha de nacimiento:</label>
                    <input
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        placeholder="Enter your birthdate"
                        required
                        value={user.birthday}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your username"
                        required
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>

                <input type="submit" value="Register" />
            </form>

        </div>
    );
};

export default Register;
