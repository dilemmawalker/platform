import React from 'react';
import mainscreen from './mainscreen';

function login() {
    return(

        <div style={ {background : 'red' , height:'170px' , width:'400px'  , margin:'auto'}} classNames="" >
        <form action="courses.js">  <p>Welcome back</p>
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
    {/* <Link to="./register ">If you are not a registered user, click here.</Link> */}
                <a href="./register" login ><h5>If you are not a registered user, click here.</h5></a>
                </div>
                
        </form>
        </div>
    )
}
export default login;