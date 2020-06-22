import React, { useState, useEffect } from 'react';
import infoButton from '../assets/images/info button.png';
import infoButtonHover from '../assets/images/info button hover.png';
import { Modal } from 'antd';
import { YToptsSmall } from './ytVideoOpts';
import YouTube from 'react-youtube';

const INFO_BUTTON = 'INFO_BUTTON';
const infoButtonPos = {
    xPos: 3869,
    yPos: 2080
}

const InfoModal = ({ screenSize, bgNaturalSize, bgDim, convertXToScreenRes, convertYToScreenRes }) => {
    const [imgOriginalSize, setImgOriginalSize] = useState({});
    const [modalVisibility, setModalVisibility] = useState(false);
    const [infoButtonStyles, setInfoButtonStyles] = useState(null);
    const [infoButtonStylesHover, setInfoButtonStylesHover] = useState({ opacity: 0 });
    const [ytPlayer, setYtPlayer] = useState(null);

    useEffect(() => {
        if (bgNaturalSize) {
            setInfoButtonStyles({
                // left: convertXToScreenRes(infoButtonPos.xPos),
                right: 20,
                top: 20,
                // top: convertYToScreenRes(infoButtonPos.yPos),
                width: imgOriginalSize.w * screenSize.w / bgDim.w
            })
        }
    }, [bgNaturalSize, screenSize, imgOriginalSize]);

    useEffect(() => {
        if (ytPlayer) {
            if (!modalVisibility) ytPlayer.pauseVideo();
        }
    }, [modalVisibility])

    return (
        <>
            <img
                key={INFO_BUTTON}
                src={infoButton}
                onLoad={({ target: img }) => setImgOriginalSize({
                    h: img.naturalHeight, w: img.naturalWidth
                })}
                style={{ position: 'absolute', cursor: 'pointer', ...infoButtonStyles }}
                alt="info Button"
            />
            <img
                key={'INFO_BUTTON_HOVER'}
                src={infoButtonHover}
                style={{ position: 'absolute', cursor: 'pointer', zIndex: 1, ...infoButtonStyles, ...infoButtonStylesHover }}
                alt="info Button hover"
                onClick={() => setModalVisibility(true)}
                onMouseOver={() => setInfoButtonStylesHover({ opacity: 1 })}
                onMouseLeave={() => setInfoButtonStylesHover({ opacity: 0 })}
            />
            <Modal
                title=""
                visible={modalVisibility}
                onCancel={() => setModalVisibility(false)}
                width={600}
                footer={null}
            >
                <div className="d-flex align-items-center p-2 my-3" style={{ backgroundColor: '#e8e8e8', borderRadius: 14 }}>
                    <p className="flex-grow-2 mr-3">
                        Vídeo d'agraïment de la Glòria 🥰
                    </p>
                    <YouTube videoId={"zrKhetq7vf0"} opts={YToptsSmall} className="w-100 flex-grow-3" onReady={(event) => setYtPlayer(event.target)} />
                </div>

                <div className="d-flex align-items-center p-2 mb-3" style={{ backgroundColor: '#e8e8e8', borderRadius: 14 }}>
                    <YouTube videoId={"KX0pVohZA1c"} opts={YToptsSmall} className="w-100 flex-grow-3" onReady={(event) => setYtPlayer(event.target)} />
                    <p className="flex-grow-2 ml-3">
                        Moments divertits de la creació d'aquest projecte 😂
                    </p>
                </div>

                <h5>Crèdits</h5>
                <p>Idea original: Nil i Marina Gavin</p>
                <p>Il·lustració, web i edició de vídeos: Marina Gavin</p>
                <div className="text-center">
                    <strong>Mil gràcies a tots els que ho heu fet possible 🥰</strong>
                </div>
                <div className="text-right">
                    <small>Juny, 2020</small>
                </div>
            </Modal>
        </>
    )
}

export default InfoModal;