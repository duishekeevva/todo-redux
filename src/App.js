import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import React from "react";
import TodoPage from "./Pages/TodoPage/TodoPage";
import UsersPage from "./Pages/UsersPage/UsersPage";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/todo" element={<TodoPage/>}/>
                    <Route path="/users" element={<UsersPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;