import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import LayoutHome from "./Components/LayoutHome";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ProjectsDetail from "./Pages/ProjectsDetail";
import NotFound from "./Pages/NotFound";
import React, { useState } from "react";
import { eng, pt } from "./Components/Data/Text";

const ThemeContext = React.createContext();
const LanguageContext = React.createContext();
const TextContext = React.createContext();

export default function App() {
  const localStorageTheme = JSON.parse(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(localStorageTheme, false);

  const localStorageLanguage = JSON.parse(localStorage.getItem("language"));
  const [language, setLanguage] = useState(localStorageLanguage, "pt");

  const text = language === "pt" ? pt : eng;
  return (
    <div data-theme={theme ? "dark" : "light"}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <TextContext.Provider value={{ text }}>
            <BrowserRouter>
              <Routes>
                <Route element={<LayoutHome />}>
                  <Route index element={<Home />} />
                </Route>
                <Route element={<Layout />}>
                  <Route path="*" element={<NotFound />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="projects/:id" element={<ProjectsDetail />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </TextContext.Provider>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext };
export { LanguageContext };
export { TextContext };
