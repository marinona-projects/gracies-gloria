import React, { useEffect, useState } from 'react';
import { Modal, Alert } from 'antd';
import { YTopts } from './ytVideoOpts';
import YouTube from 'react-youtube';
import infoButton from '../assets/images/info button.png';


const OnStartModal = ({ visible, closeModal, isTouchscreen }) => {
    const [ytPlayer, setYtPlayer] = useState(null);

    const handleOnStateChange = (event) => {
        //close modal when video finished
        if (event.data === 0) {
            closeModal();
            document.exitFullscreen();
        }
    }

    useEffect(() => {
        if (ytPlayer) {
            if (!visible) ytPlayer.pauseVideo();
        }
    }, [visible])

    return (
        <Modal
            title="Gràcies Glòria!"
            visible={visible}
            onCancel={closeModal}
            width={600}
            footer={null}
        >
            <Alert
                message="Aquesta web està pensada per veure's des d'un ordinador! 🖥🖱"
                description="La il·lustració té molts detalls i els objectes s'il·luminen al passar el ratolí per sobre (aquest efecte es perd amb la pantalla tàctil)"
                type="warning"
                showIcon
                closable
                className="mb-3"
            />
            <p>La <strong>Glòria</strong> acaba una etapa important de la seva vida i es jubila. 🎓</p>
            <p>{`Som molts els que sentíem la necessitat d'acompanyar-la en aquest moment i d'agrair-li haver format part del nostre camí.`}</p>
            <p>
                {`Malgrat la situació estranya que estem vivint, i amb l'ajuda màgica de la Lluna Bruna 🌙, hem trobat la manera de compartir amb ella
                        aquest tancament i de dedicar-li tots unes paraules.`}
            </p>
            <p>
                {`Mira com ha començat tot plegat:`}
            </p>

            <YouTube
                videoId={"MjXFP3kpdbA"}
                opts={YTopts}
                onReady={(event) => setYtPlayer(event.target)}
                onStateChange={handleOnStateChange}
            />

            <p className="my-2">
                <strong>🖱 Hi vols jugar tu també? </strong>
                {`Busca a la classe de les llunes 6 objectes que s'il·luminin i veuràs com surt un munt de gent! 
                    De mica en mica la classe s'anirà omplint de colors 🌈 `}
            </p>

            <Alert
                message="La Glòria us vol donar les gràcies!"
                description={
                    <>
                        <p className="m-0">Li ha fet tanta il·lusió aquest regal que ha fet un vídeo d'agraïment. </p>
                        <p className="m-0">Aneu a la finestra d'informació per veure'l!
                            <img src={infoButton} className="ml-2" style={{ width: 17 }} />
                        </p>
                    </>
                }
                type="info"
                // showIcon
                className="mt-3"
            />
        </Modal>
    )
}

export default OnStartModal;