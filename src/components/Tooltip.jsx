import React from 'react'
import { SiGreensock } from 'react-icons/si'

const Tooltip = ({children, name, border, bg}) => {
    return (
        <div className={`item-hints w-fit hover:bg-${bg} rounded-full`}>
            <div className="hint rounded-full" data-position="1">
                <span className="hint-radius"></span>
                <span className={`hint-dot ${border ? 'border text-[22px]' : '' } `}>{children}</span>
                <div className={`hint-content ${border ? '-top-[65%]' : '-top-[50%]'} text-[16px] do--split-children`}>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default Tooltip
