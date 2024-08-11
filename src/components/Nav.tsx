import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


const NavWrapper = styled.div`
    //border: 1px blue solid;
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

    > ul {
        display: flex;
        justify-content: space-between;
        padding-inline-start: 0;
        > li {
            text-align: center; /* 文本居中 */
            flex: 1; /* 每个列表项占据可用空间 */

            > a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 4px 0;

                > .icon {
                    width: 24px;
                    height: 24px;
                }

                &.active {
                    color: red;
                    fill: red;
                }

            }
        }
    }
`

function Nav() {
    return <NavWrapper>
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/tags">
                    <Icon name="tag"/>
                    标签页
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/money">
                    <Icon name="money"/>
                    记账页
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/statistics">
                    <Icon name="chart"/>
                    统计页
                </NavLink>
            </li>
        </ul>
    </NavWrapper>
}

export default Nav