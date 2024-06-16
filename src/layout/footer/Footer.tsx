import React from 'react';
import {FooterIcons} from "./footerIcons/FooterIcons";
import {SubTitles} from "../../components/subTitles/SubTitles";
import {Conatiner} from "../../components/container/Conatiner";
import {S} from "../footer/Footer_Styled"


export const Footer:React.FC= () => {
    return (
        <S.Footer>
            <Conatiner>
                <SubTitles>Contact with me</SubTitles>
                <S.Descr>I’m not currently taking on new client work but feel free to contact me for any other inquiries</S.Descr>
                <FooterIcons/>
            </Conatiner>
        </S.Footer>
    );
};



