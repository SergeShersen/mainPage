import styled from "styled-components";
type FlexWrapperType = {
    directin?: string
    justify?: string
    align?: string
    wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperType>`
    display: flex;
    flex-direction: ${props => props.directin || 'row' };
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
`