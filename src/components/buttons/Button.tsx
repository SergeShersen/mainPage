
import styled, {css} from "styled-components";
type ButtonProps = {
    primory?: boolean
    width?: string
    color?: string
    margin?:string

}

export const ButtonStyled =styled.a<ButtonProps>`
    font-weight: 500;
    font-size: 18px;
    border: 1px solid #3730a3;
    border-radius: 6px;
    max-width: ${props => props.width};
    text-decoration: none;
    text-align: center;
    padding: 12px 12px;
    color: #3730a3;
    background: ${props => props.color || 'none'};
    margin-right: ${props => props.margin || '0'};
    
    
    ${props => props.primory && css<ButtonProps>`
        background: ${props => props.color || 'none'};
        color: #fff;
    `}
`
