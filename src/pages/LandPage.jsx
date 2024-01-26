import { Link } from 'react-router-dom'

const LandPage = () => {
    return (
        <div className="bg-gradient-to-r from-slate-200 to-purple-500 text-white min-h-screen flex items-center">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4">Task Management App</h1>
                <p className="text-lg mb-8">Stay organized and boost productivity with our powerful task management app.</p>

                <div className="flex justify-center mb-8">
                    <Link to="/signup" className="bg-white text-blue-500 hover:bg-gray-200 text-lg font-semibold px-6 py-3 rounded-full mr-4">Sign Up</Link>
                    <Link to="/login" className="bg-white text-blue-500 hover:bg-gray-200 text-lg font-semibold px-6 py-3 rounded-full">Log In</Link>
                </div>

                <p className="text-sm">Already have an account? <Link to="/login" className="underline">Log in here</Link></p>
            </div>
        </div>
    );
}


export default LandPage;