import { Link } from 'react-router-dom';
import ErrorBg from '../assets/error-bg.jpg';

function ErrorPage() {
    return (
        <div
            className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center text-center p-4"
            style={{ backgroundImage: `url(${ErrorBg})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="z-10">
                <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
                <p className="mb-2">We couldn't find the page you were looking for.</p>
                <p className="mb-6">Error: 404 - Page Not Found</p>
                <Link to="/" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
