import {useState} from 'react'
import './App.css'
import {BrowserRouter, Router, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import Header from "./components/Header/Header.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <Header></Header>
    )
}

export default App
