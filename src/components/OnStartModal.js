import React, { useEffect, useState } from 'react';
import { Modal, Alert } from 'antd';
import { YTopts } from './ytVideoOpts';
import YouTube from 'react-youtube';


const OnStartModal = ({ visible, closeModal, isTouchscreen }) => {
    const [ytPlayer, setYtPlayer] = useState(null);

    const handleOnStateChange = (event) => {
        //close modal when video finished
        if (event.data === 0) closeModal()
    }

    useEffect(() => {
        if (ytPlayer) {
            if (!visible) ytPlayer.pauseVideo();
        }
    }, [visible])

    return (
        <Modal
            title=""
            visible={visible}
            onCancel={closeModal}
            width={600}
            footer={null}
        >

            <h1>Trucada inesperada...</h1>
            <Alert
                message="Aquesta web està pensada per veure's des d'un ordinador! 🖥🖱"
                description="La il·lustració té molts detalls i els objectes d'il·luminen al passar el ratolí per sobre (aquest efecte es perd amb la pantalla tàctil)"
                type="warning"
                showIcon
                closable
                className="mb-3"
            />
            <YouTube
                videoId={"MjXFP3kpdbA"}
                opts={YTopts}
                onReady={(event) => setYtPlayer(event.target)}
                onStateChange={handleOnStateChange}
            />
        </Modal>
    )
}

export default OnStartModal;