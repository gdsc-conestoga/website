import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resources from './pages/resources/Resources'
import Calendar from './pages/calendar/Calendar'
import Blog from './pages/blog/Blog'
import Home from './pages/home/Home'
import PageNotFound from './pages/404/404'
import Menu from './components/menu/Menu'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Menu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />}/>
          <Route path="/calendar" element={<Calendar />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
