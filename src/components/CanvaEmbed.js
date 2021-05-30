import React, { Component } from 'react';
import Iframe from 'react-iframe';
import yeahmystyle from './CanvaEmbed.css';

class CanvaEmbed extends Component {

    render() {
        return (
            <div>
                <Iframe
                    width="100%"
                    height="720px"
                    // display="fixed"
                    // top="0"
                    // left="0"
                    // bottom="0"
                    allow="fullscreen"
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEf-EiuN4g&#x2F;view?embed">
                </Iframe>
            </div>
        );
    }
}


export default CanvaEmbed;

// style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;"