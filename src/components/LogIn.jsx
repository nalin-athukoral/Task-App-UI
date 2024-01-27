import { googleLogout, useGoogleLogin } from "@react-oauth/google"
import { useEffect, useState } from "react";

import axios from "axios";

// const ClientId = "868150996010-mi11gonuub5878d721e8h2kg1vld9bn6.apps.googleusercontent.com";

const LogIn = () => {

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState(() => {
        const storedData = localStorage.getItem('profile');
        return storedData ? JSON.parse(storedData) : null;
    });

    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) => setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)

    // });

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)

    });

    useEffect(

        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        localStorage.setItem('profile', JSON.stringify(res.data));
                        // dispatch(login(res.data));
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.removeItem('profile');
    };

    console.log(profile);

    return (
        <div className="text-center mt-10">
            <h2 className="text-2xl font-bold mb-4"> Google Login</h2>

            {profile ? (
                <div>
                    <img
                        src={profile.picture}
                        alt="user image"
                        className="rounded-full mx-auto mb-4"
                        style={{ width: '100px', height: '100px' }}
                    />
                    {/* <h3 className="text-xl font-bold">User Logged in</h3> */}
                    {/* <p className="text-gray-700">Hi Name: {profile.name}</p> */}
                    <h3 className="text-xl font-bold">Hi {profile.name}</h3>
                    {/* <p className="text-gray-700">Email Address: {profile.email}</p> */}
                    <div className="mt-4">
                        <button
                            onClick={logOut}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Log out
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={login}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Sign in with Google 🚀
                </button>
            )}
        </div>
    );
}

export default LogIn;