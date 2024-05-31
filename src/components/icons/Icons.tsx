import React from 'react';
import iconsSprite from '../../assets/icons/icons.svg';


type IconsPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    stroke?: string
}

export const Icons = (props: IconsPropsType) => {
    return (
            <svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 157 51'} stroke={props.stroke}
                 fill='' xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </svg>
    );
};

