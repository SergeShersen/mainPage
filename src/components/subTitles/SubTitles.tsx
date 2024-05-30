
import styled from "styled-components";

type SubTitleProps = {
    marginBottom?: string
}

export const SubTitles =styled.h2<SubTitleProps>`
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: 48px;
    line-height: 100%;
    display: block;
    color: #374151;
    margin-bottom: ${props => props.marginBottom || 0};
    span {
        color: #3730a3;
    }
`





