import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import LayOut from '../../pages/Layout'
import Home from '../../pages/Home'
import Contact from '../../pages/Contact'
import Blogs from '../../pages/Blogs'
import NoPage from '../../pages/NoPage'
import Timer from "./Timer"
import Component1 from "../Component1"
import Ref from "../Ref"
import Main from "../Main"

function App() {
  return (
    <div className="wrapper-app">
      {false &&
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayOut/>}>
            <Route index element={<Home/>}/>
            <Route path='blogs' element={<Blogs/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>}

      {false && <Timer/>}
      {false && <Component1/>}
      {false && <Ref/>}
      {false && <Main/>}

    </div>
  )
}

export default App;