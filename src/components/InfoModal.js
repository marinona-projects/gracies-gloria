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
                left: convertXToScreenRes(infoButtonPos.xPos),
                top: convertYToScreenRes(infoButtonPos.yPos),
                height: imgOriginalSize.h * screenSize.h / bgDim.h
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

                style={{ position: 'absolute', cursor: 'pointer', ...infoButtonStyles, ...infoButtonStylesHover }}
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
                <p>La <strong>Glòria</strong> acaba una etapa important de la seva vida i es jubila. 🎓</p>
                <p>{`Som molts els que sentíem la necessitat d'acompanyar-la en aquest moment i d'agrair-li haver format part del nostre camí.`}</p>
                <p>
                    {`Malgrat la situació estranya que estem vivint, i amb l'ajuda màgica de la Lluna Bruna 🌙, hem trobat la manera de compartir amb ella
                    aquest tancament i de dedicar-li tots unes paraules.`}
                </p>

                <p>
                    <strong>🖱 Hi vols jugar tu també? </strong>
                    {`Busca a la classe de les llunes 6 objectes que s'il·luminin i veuràs com surt un munt de gent! 
                    De mica en mica la classe s'anirà omplint de colors 🌈 `}
                </p>

                <div className="d-flex align-items-center p-2 mb-3" style={{ backgroundColor: '#e8e8e8', borderRadius: 14 }}>
                    <p className="flex-grow-2">
                        Moments divertits de la creació d'aquest projecte 😂
                    </p>
                    <YouTube videoId={"KX0pVohZA1c"} opts={YToptsSmall} className="w-100 flex-grow-3" onReady={(event) => setYtPlayer(event.target)} />
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