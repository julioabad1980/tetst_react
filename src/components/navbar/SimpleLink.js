import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';

function SimpleLink(props) {

    const {caption, fontFamily, spaceItems, weight1, weight2, onclick} = props;

    return (
        <div>
            <GoogleFontLoader
                fonts={[
                    {
                        font: fontFamily,
                        weights: [weight1, weight2],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
            <li className="nav-item active" style={{paddingRight: spaceItems,}} onClick={onclick}>
                <a className="nav-link" href="#" style={{fontFamily: fontFamily,}}>
                    {caption}
                    <span className="sr-only">(current)</span>
                </a>
            </li>
        </div>
    )
}

export default SimpleLink
