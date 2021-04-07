import React from 'react';

function login() {
    return(

        <div>
        <form> <p>Welcome back</p>
            <div style={ {background : 'blue'}} classNames="center">
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
                {/* <a href="./register.js"></a> */}
                </div>
                
        </form>
        </div>
    )
}
export default login;