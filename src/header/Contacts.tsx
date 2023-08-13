import React, {FC} from 'react';

export type ContactsType = {
    icon: string
    href: string
}


export const Contacts: FC<ContactsType> = ({icon, href}) => {
    return (
        <a href={href}
           target="_blank"
        >
            <img src={icon}/>
        </a>
    )
};

