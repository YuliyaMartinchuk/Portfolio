import React, {FC} from 'react';

export type FooterContactType = {
    icon: string
    href: string
}


export const FooterContact: FC<FooterContactType> = ({icon, href}) => {
    return (
        <a href={href}
           target="_blank"
        >
            <img src={icon}/>
        </a>
    )
};

