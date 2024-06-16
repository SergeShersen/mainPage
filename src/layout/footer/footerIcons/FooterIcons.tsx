import React from 'react';
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Icons} from "../../../components/icons/Icons";
import {S} from "../Footer_Styled"

const linksData = [
    {
        iconId: 'facebool',
        href: 'https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/',
    },
    {
        iconId: 'dribbble',
        href: '',
    },
    {
        iconId: 'codepen',
        href: '',
    },
    {
        iconId: 'mail',
        href: '',
    },
    {
        iconId: 'instagram',
        href: '',
    },
    {
        iconId: 'twitter',
        href: '',
    },

]

export const FooterIcons:React.FC = () => {
    return (
        <S.Icons>
            <FlexWrapper justify={'space-between'} align={'center'} wrap='wrap' >

                {linksData.map((l, index) => {
                    return <a href={l.href}>
                        <Icons iconId={l.iconId} viewBox={'0 0 35 35'} width={'35'} height={'35'}/>
                    </a>
                })}
            </FlexWrapper>
        </S.Icons>
    );
};

