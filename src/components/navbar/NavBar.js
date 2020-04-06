import React from 'react';
import Brand from "./Brand";
import BuutonToogle from "./ButtonToogle";
import SimpleLink from "./SimpleLink";

function NabBar(props) {
    const {marginRightItems, shadow, onclick} = props;
    return (
        <div className={"container-fluid p-0" + shadow} >
            <nav className="navbar navbar-expand-lg">
                <Brand caption={'Pulsar industries'} color={'black'} fontFamily={'Lobster'}
                       icon={'fab fa-battle-net fa-2x mx-2'} iconColor={'gray'} paddingLeft={'8rem'}/>
                <BuutonToogle icon={'fas fa-align-justify'} iconColor={'red'}/>
                <div className="collapse navbar-collapse" id="navbarNav" style={{marginRight: marginRightItems}}>
                    <div className="mr-auto"></div>
                    <ul className="navbar-nav">
                        <SimpleLink caption={'Inicio'} fontFamily={'Source Serif Pro'} color={'gray'} weight1={700}
                                    weight2={100} spaceItems={'3.5em'} onclick={onclick}/>
                        <SimpleLink caption={'Dispositivos'} fontFamily={'Source Serif Pro'} color={'gray'}
                                    weight1={700} weight2={100} spaceItems={'3.5em'}/>
                        <SimpleLink caption={'Servicios'} fontFamily={'Source Serif Pro'} color={'gray'} weight1={700}
                                    weight2={100} spaceItems={'3.5em'}/>
                        <SimpleLink caption={'Cursos'} fontFamily={'Source Serif Pro'} color={'gray'} weight1={700}
                                    weight2={100} spaceItems={'3.5em'}/>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default NabBar;
