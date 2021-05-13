import React from 'react'

const Tooltips = (props) => {
    return (
        <>
            <div className="card-block">
                    <span className="mytooltip">
                        <span className="tooltip-item">
                            <img src={props.img} alt={props.cont} />
                        </span>
                        <span className="tooltip-content">
                            <img src={props.img} alt=""/>
                            <span className="tooltip-text text-center">{props.cont}</span>
                        </span>
                    </span>
            </div>
        </>
    )
}

export default Tooltips
