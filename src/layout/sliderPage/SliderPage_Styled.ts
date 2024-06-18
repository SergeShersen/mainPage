import styled from "styled-components";

const Slide = styled.div`
    text-align: center;
`
const Text = styled.p`
    color: #6b7280;
    font-weight: 500;
    font-size: 20px;
    line-height: 156%;
`
const Name = styled.span`
    margin-top: 20px;
    display: inline-block;
    color: #6b7280;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
`
const SliderPage = styled.div`
    max-width: 500px;
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: grab;

`
export const S = {
    SliderPage,
    Name,
    Text,
    Slide
}