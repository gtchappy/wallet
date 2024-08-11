import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


const NavWrapper = styled.div`
    //border: 1px blue solid;
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

    > ul {
        display: flex;
        justify-content: space-between;

        > li {
            flex: 1; /* 每个列表项占据可用空间 */
            text-align: center; /* 文本居中 */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4px 0;

            > .icon {
                width: 24px;
                height: 24px;
            }
        }
    }
`

function Nav() {
    return <NavWrapper>
        <ul>
            <li>
                <Icon name="tag"/>
                <Link to="/tags">标签页</Link>
            </li>
            <li>
                <Icon name="money"/>
                <Link to="/money">记账页</Link>
            </li>
            <li>
                <Icon name="chart"/>
                <Link to="/statistics">统计页</Link>
            </li>
        </ul>
    </NavWrapper>
}

export default Nav