import React from 'react';
import {Icons} from "../../components/icons/Icons";
import {Conatiner} from "../../components/container/Conatiner";
import {S} from "./Trusted_Styled"


const linkData = [
    {
        iconId: 'aphabet',
        href: 'https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/',
    },
    {
        iconId: 'google',
        href: '',
    },
    {
        iconId: 'netflix',
        href: '',
    },
    {
        iconId: 'shopify',
        href: '',
    },
    {
        iconId: 'amazon',
        href: '',
    },

]

export const Trusted:React.FC = () => {
    return (
        <S.Trusted>
            <Conatiner>
                <S.Title>Trusted by</S.Title>
                <S.Wrapper>
                    {linkData.map((l, index) => {
                        return  <S.Link href={l.href}>
                                    <Icons
                                        iconId={l.iconId}
                                        height={'51'}
                                        width={'157'}
                                        key={index}
                                    />
                        </S.Link>
                    })}
                </S.Wrapper>
            </Conatiner>
        </S.Trusted>
    );
};

