import '../styles/Layout.css';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Import the Header component

function Layout() {
    return (
        <div>
            <Header /> {/* Use Header here */}
            <main>
                <Outlet /> {/* This is where the child routes will be rendered */}
            </main>
            <footer>
                <p>© 2024 Your Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;
