import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleSubmitLogin = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
            <div className="login-form">
                <form>
                <h1>Insta-Clone</h1>
                    <label for="username">Username</label>
                    <input type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChangeInput}
                    />
                    <label for="password">Password</label>
                    <input type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChangeInput}
                    />
                    <div className="login-btn">
                        <button onClick={this.handleSubmitLogin}>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;