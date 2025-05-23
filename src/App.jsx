import NavBar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App () {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;