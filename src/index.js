import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='light'></ColorModeScript>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<App />}/>
					<Route exact path="/Projects" element={<Projects />}/>
				</Routes>
			</BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
