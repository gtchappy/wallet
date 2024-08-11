import React from "react";
import {Routes, Route, Navigate, HashRouter} from "react-router-dom";
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";

function App() {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Navigate to="/money"/>}/>
                <Route path="/tags" element={<Tags/>}/>
                <Route path="/money" element={<Money/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                <Route path="*" element={<Navigate to="/money"/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App