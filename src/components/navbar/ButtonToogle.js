import React from 'react'

function BuutonToogle(props) {

    const {icon, iconColor} = props;

    return (
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
            <i className={icon} style={{color: iconColor}}></i>
        </button>
    )
}

export default BuutonToogle
