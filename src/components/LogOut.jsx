import { googleLogout } from "@react-oauth/google"; 

const ClientId = "868150996010-mi11gonuub5878d721e8h2kg1vld9bn6.apps.googleusercontent.com";

const LogOut = () => {

    const onSuccess = (response) => {
        console.log(response);
    }

    return (
        <div>
            <googleLogout
                clientId={ClientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default LogOut;