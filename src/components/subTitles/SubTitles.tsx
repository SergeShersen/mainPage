
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type SubTitleProps = {
    marginBottom?: string
}

export const SubTitles =styled.h2<SubTitleProps>`
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: calc( (100vw - 320px) / (1920 - 320) * (48 - 24) + 24px);
    line-height: 100%;
    display: block;
    color: #374151;
    margin-bottom: ${props => props.marginBottom || 0};
    span {
        color: ${myTheme.colors.secondaryBg};
    }
`





