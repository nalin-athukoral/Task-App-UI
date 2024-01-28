import { Navbar } from "./src/components";

// Layout component for application not completed
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default Layout;