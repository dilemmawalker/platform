import React from 'react';
import login from './login';
function register() {
    return(

        <div style={ {background : 'green' , height:'170px' , width:'400px'  , margin:'auto'}} classNames="" >
        <form action="courses.js">  <p>Register</p>
            <div style={{align : 'center', margin:'auto'}}>
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
                
                <a href="login.html" login ><h5>If you are already registered, click here.</h5></a>
                </div>
                
        </form>
        </div>
    )
}
export default register;