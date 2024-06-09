import React from 'react';
import styled from "styled-components";
import {FooterIcons} from "./footerIcons/FooterIcons";
import {SubTitles} from "../../components/subTitles/SubTitles";
import {Conatiner} from "../../components/container/Conatiner";


export const Footer = () => {
    return (
        <FooterStyled>
            <Conatiner>
                <SubTitles>Contact with me</SubTitles>
                <FooterDescrStyled>I’m not currently taking on new client work but feel free to contact me for any other inquiries</FooterDescrStyled>
                <FooterIcons/>
            </Conatiner>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
    background: #FEF2F2;
    padding: 111px 0;
`

const FooterDescrStyled = styled.p`
    font-weight: 400;
    font-size: calc( (100vw - 360px) / (1440 - 360) * (18 - 12) + 12px);
    line-height: 156%;
    text-align: center;
    color: #9ca3af;
    max-width: 664px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
`

