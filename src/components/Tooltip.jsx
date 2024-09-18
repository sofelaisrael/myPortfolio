import React from 'react'
import { SiGreensock } from 'react-icons/si'

const Tooltip = ({children, name}) => {
    return (
        <div className="item-hints w-fit">
            <div className="hint bg-[#0a0a0a] rounded-full" data-position="1">
                <span className="hint-radius"></span>
                <span className="hint-dot text-[32px]">{children}</span>
                <div className="hint-content text-[16px] do--split-children">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default Tooltip
