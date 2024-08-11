import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper = styled.div`
    //border: 1px blue solid;
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);

    > ul {
        display: flex;
        justify-content: space-between;

        > li {
            flex: 1; /* 每个列表项占据可用空间 */
            text-align: center; /* 文本居中 */
            padding: 16px;
        }
    }
`

function Nav(){
    return <NavWrapper>
        <ul>
            <li>
                <Link to="/tags">tags</Link>
            </li>
            <li>
                <Link to="/money">money</Link>
            </li>
            <li>
                <Link to="/statistics">statistics</Link>
            </li>
        </ul>
    </NavWrapper>
}

export default Nav