import {myTheme} from "../../../styles/Theme.styled";
import styled from "styled-components";

const TabMenu = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-top: 80px;

    li {
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;

        a {
            text-decoration: none;
            color: #6b7280;
            position: relative;
            z-index: 0;

            &:hover {
                &:after {
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: 10px;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background: #c5b0e4;
                    display: inline-block;
                    z-index: -1;
                }
            }
        }
    }
    @media ${myTheme.media.mobile} {
        gap: 30px
    }

`
export const S = {
    TabMenu,
}
