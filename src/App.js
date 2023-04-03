import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

const App = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min');
    }, []);
    return (
        <div className="App">
            <Home />
        </div>
    );
};

export default App;
