import React ,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase';
import "./Login.css";

const Login = ()=>{

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const history = useHistory();

    const login =(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(e=>alert(e.message));
    }

    const register =(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth=>{
            history.push('/');
        })
        .catch(e=>alert(e.message));
    }

    return(
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button onClick={login} className="login_signInButtom" type="submit">Sign in</button>
                </form>
                <p>
                Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de amazon.com.
                </p>
                <button onClick={register}>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login;