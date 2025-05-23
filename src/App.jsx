import Footer from './components/Footer';
import NavBar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App () {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;