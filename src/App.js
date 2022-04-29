import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './components/home-page/homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Homepage/>}></Route>
          <Route path='/' element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;