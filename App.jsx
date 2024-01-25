import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import ProjectsDetail from "./Pages/ProjectsDetail";
import NotFound from "./Pages/NotFound"
import React from "react";
const ThemeContext = React.createContext();

export default function App() {
  const localStorageTheme = JSON.parse(localStorage.getItem("key"));

  const [theme, setTheme] = React.useState(localStorageTheme, false);

  return (
    <div data-theme={theme ? "dark" : "light"}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<ProjectsDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext }