//style
import './App.css'

import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'

//pages
import Search from './pages/Search/Search.jsx'
import Movies from './pages/Movies/Movies.jsx'
import Home from './pages/Home/Home.jsx'

//components
import NavBar from './components/NavBar.jsx'

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("Modo Escuro", preference);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setIsDark]);

  return (
    <>
      <BrowserRouter>
        <main className="App" data-theme={isDark ? "dark" : "light"}>
          <NavBar isDark={isDark} setIsDark={setIsDark}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<Movies />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
