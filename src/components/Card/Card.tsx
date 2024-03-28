import {PropsWithChildren} from "react";
import './Card.css'
const Card = ({bordered = false, children}:PropsWithChildren<{bordered?: boolean}>) => {
    return (
        <div className={'card' + (bordered ? ' bordered' : '')}>
            {children}
        </div>
    )
}

export default Card;