import { useEffect } from "react";
import LogOut from "../components/LogOut";
import LogIn from "../components/LogIn";
import { GoogleOAuthProvider } from "@react-oauth/google";

// User authentication using Google auth2 API and react-oauth library

const GoogleLogin = () => {

    return (
        <div>
           <GoogleOAuthProvider clientId = "868150996010-mi11gonuub5878d721e8h2kg1vld9bn6.apps.googleusercontent.com">
            <LogIn/>
            {/* <LogOut/> */}
           </GoogleOAuthProvider>
        </div>
    )

}

export default GoogleLogin;