import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './pages';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

function WrappedApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default WrappedApp;
