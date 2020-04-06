import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

function Brand(props) {

    const {caption, color, fontFamily, icon, iconColor, paddingLeft} = props;

    return (
        <div>
            <GoogleFontLoader
                fonts={[
                    {
                        font: fontFamily,
                        weights: [400, 700],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
            <a className="navbar-brand" href="#" style={{fontFamily: fontFamily, color: color, paddingLeft: paddingLeft}}>
                <div className={'row'}>
                    <div>
                        <i className={icon} style={{color: iconColor}}></i>
                    </div>
                    <div style={{marginTop: 5}}>
                        {caption}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Brand;
