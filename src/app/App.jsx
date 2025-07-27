import { StrictMode } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Home from '../pages/Home/index.jsx'
import Login from '../pages/Login/index.jsx'
import Profile from '../pages/Profile/index.jsx'
import Error from '../components/Error/Error.jsx'

const App = () => {
    return (
        <StrictMode>
            <Router>
                <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                <Footer/>  
            </Router>
        </StrictMode>
    )
}

export default App