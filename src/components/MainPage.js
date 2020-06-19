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
                height: buttonNaturalSizes[button.id].h * screenSize.h / bgDim.h
            })));
        }
    }, [bgNaturalSize, screenSize, buttonNaturalSizes]);


    const onButtonImgLoad = (id, img) => {
        let newButtonNatSizes = buttonNaturalSizes && [...buttonNaturalSizes];
        newButtonNatSizes[id] = { h: img.naturalHeight, w: img.naturalWidth };
        setButtonNaturalSizes(newButtonNatSizes);
    }

    const getImageWidth = (bgSize) => bgSize && ((screenSize.h * bgSize.w) / bgSize.h);

    //donat una X de la imatge (en pixels), vull la X de la pantalla (pot estar fora de la pantalla)
    const convertXToScreenRes = (xVal) => {
        const imgWidth = getImageWidth(bgNaturalSize);
        if (imgWidth < screenSize.w) {
            const leftMargin = (screenSize.w - imgWidth) / 2;
            return (xVal * imgWidth / bgNaturalSize.w) + leftMargin
        } else {
            const imageStartX = -(imgWidth - screenSize.w) / 2;
            return imageStartX + (xVal * imgWidth / bgNaturalSize.w);
        }
    }

    const convertYToScreenRes = (yVal) => {
        return (yVal * screenSize.h / bgNaturalSize.h);
    }

    const commonButtonStyles = {
        position: 'absolute',
        cursor: 'pointer',
        opacity: 0
    }

    const toggleButtonVisibility = (id, visible) => {
        let newBtnOpacities = [...buttonOpacities];
        newBtnOpacities[id] = { opacity: visible ? 1 : 0 };
        setButtonOpacities(newBtnOpacities);
    }

    return (
        <div className="h-100 d-flex flex-column">
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
                className="h-100 align-self-center"
                alt="backgound image"
            />
        </div >
    )
}

export default MainPage;