import React, { useState, useEffect } from 'react';
import bgImage from '../assets/images/background.png';
import { buttons } from './infoButtons';

import InfoModal from './InfoModal';

const bgDim = { w: 4000, h: 2250 };

const MainPage = ({ setModalVisible, }) => {
    const [screenSize, setScreenSize] = useState({ w: window.innerWidth, h: window.innerHeight });
    const [buttonNaturalSizes, setButtonNaturalSizes] = useState([]);
    const [bgNaturalSize, setBgNaturalSize] = useState(null);
    const [buttonOpacities, setButtonOpacities] = useState([]);
    const [clickedButtons, setClickedButtons] = useState([]);
    const [buttonStyles, setButtonStyles] = useState([]);
    const [verticalStyle, setVerticalStyle] = useState(false);

    const updateWindowDimensions = () => {
        setScreenSize({ w: window.innerWidth, h: window.innerHeight });
    };

    useEffect(() => window.addEventListener('resize', updateWindowDimensions), [buttonNaturalSizes, bgNaturalSize]);

    const onBgImgLoad = ({ target: img }) => {
        setBgNaturalSize({ h: img.naturalHeight, w: img.naturalWidth });
    }

    useEffect(() => {
        if (bgNaturalSize) {
            setButtonStyles(buttons.map(button => ({
                left: convertXToScreenRes(button.xPos),
                top: convertYToScreenRes(button.yPos),
                width: buttonNaturalSizes[button.id].w * screenSize.w / bgDim.w
            })));
            if (getImageHeight(bgNaturalSize) < screenSize.h) setVerticalStyle(true);
        }
    }, [bgNaturalSize, screenSize, buttonNaturalSizes]);


    const onButtonImgLoad = (id, img) => {
        let newButtonNatSizes = buttonNaturalSizes && [...buttonNaturalSizes];
        newButtonNatSizes[id] = { h: img.naturalHeight, w: img.naturalWidth };
        setButtonNaturalSizes(newButtonNatSizes);
    }

    // const getImageWidth = (bgSize) => bgSize && ((screenSize.h * bgSize.w) / bgSize.h);
    const getImageHeight = (bgSize) => bgSize && ((screenSize.w * bgSize.h) / bgSize.w);

    //donat una X de la imatge (en pixels), vull la X de la pantalla (pot estar fora de la pantalla)
    const convertXToScreenRes = (xVal) => {
        return (xVal * screenSize.w / bgNaturalSize.w);
    }

    const convertYToScreenRes = (yVal) => {
        const imgHeight = getImageHeight(bgNaturalSize);
        let topOffset = 0;
        if (imgHeight > screenSize.h) {
            topOffset = screenSize.h - imgHeight;
        }

        return topOffset + (yVal * imgHeight / bgNaturalSize.h)
    }

    const commonButtonStyles = {
        position: 'absolute',
        cursor: 'pointer',
        opacity: 0,
        zIndex: 1
    }

    const toggleButtonVisibility = (id, visible) => {
        let newBtnOpacities = [...buttonOpacities];
        newBtnOpacities[id] = { opacity: visible ? 1 : 0 };
        setButtonOpacities(newBtnOpacities);
    }

    const bgStyle = verticalStyle ? { top: 0 } : { bottom: 0 }

    return (
        <div className="w-100 d-flex flex-row">
            {buttons.map(({ id, img }) => (
                <img
                    key={id}
                    src={img}
                    onLoad={({ target }) => onButtonImgLoad(id, target)}
                    style={{ ...commonButtonStyles, ...buttonStyles[id], ...buttonOpacities[id] }}
                    alt="button"
                    onClick={() => {
                        setModalVisible(id);
                        if (clickedButtons.find(i => i === id) === undefined) {
                            toggleButtonVisibility(id, true);
                            setClickedButtons([...clickedButtons, id])
                        }
                    }}
                    onMouseOver={() => {
                        if (clickedButtons.find(i => i === id) === undefined) {
                            toggleButtonVisibility(id, true)
                        }
                    }}
                    onMouseLeave={() => {
                        if (clickedButtons.find(i => i === id) === undefined) {
                            toggleButtonVisibility(id, false);
                        }
                    }}
                />
            ))}

            <InfoModal
                bgNaturalSize={bgNaturalSize}
                bgDim={bgDim}
                convertXToScreenRes={convertXToScreenRes}
                convertYToScreenRes={convertYToScreenRes}
                screenSize={screenSize}
            />
            <img
                src={bgImage}
                onLoad={onBgImgLoad}
                className="w-100 align-self-center"
                alt="backgound image"
                style={{ position: 'absolute', ...bgStyle }}
            />
        </div >
    )
}

export default MainPage;