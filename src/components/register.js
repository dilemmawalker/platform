import React from 'react';
import login from './login';
function register() {
    return(

        <div>
        <form action="courses.js">  <p>Register</p>
            <div style={ {background : 'white'}} classNames="center">
                <label>
                    email:
                    <input type="text" name="email" />
                </label><br></br><br></br>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label><br></br>
                <input type="submit" value="Submit" />
                <br></br>
                
                <a href="login.html" login >If you are not a registered user, click here.</a>
                </div>
                
        </form>
        </div>
    )
}
export default register;