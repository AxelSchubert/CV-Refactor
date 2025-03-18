import NavBar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/firstpage'
import Footer from "./components/Footer.jsx"
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'
import CV from './pages/cv.jsx'
import About from './pages/about.jsx'
import NotFound from './pages/notfound.jsx';

function App() {

  return (
    <BrowserRouter basename="CV-Refactor">
      <NavBar />
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/CV-Refactor" element={<FirstPage />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cv" element={<CV />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
