import React from "react";
import {Routes, Route, Link, Navigate, HashRouter} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wrapper = styled.div`
    //border: 1px red solid;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Main = styled.div`
    //border: 1px green solid;
    flex-grow: 1;
    overflow: auto;
`


function App() {
    return (
        <HashRouter basename="/">
            <Wrapper>
                <Main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/money"/>}/>
                        <Route path="/tags" element={<Tags/>}/>
                        <Route path="/money" element={<Money/>}/>
                        <Route path="/statistics" element={<Statistics/>}/>
                        <Route path="*" element={<Navigate to="/money"/>}/>
                    </Routes>
                </Main>
                <Nav/>
            </Wrapper>
        </HashRouter>
    );
}

function Statistics() {
    return <h2>Statistics</h2>;
}

function Tags() {
    return <h2>Tags</h2>;
}

function Money() {
    return <h2>Money</h2>;
}

export default App