import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Characters from './Components/Characters/Characters';
import Home from './Components/Home/Home';
import Messages from './Components/Messages/Messages';
import ErrorPage from './Components/Error/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='characters' element={<Characters/>}/>
          <Route path='messages' element={<Messages/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
