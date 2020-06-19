import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import YouTube from 'react-youtube';
import { YTopts } from './ytVideoOpts';



const VideoModal = ({ visible, key, videoUrl, setModalVisible }) => {
    const [ytPlayer, setYtPlayer] = useState(null);

    useEffect(() => {
        if (ytPlayer) {
            if (visible) {
                ytPlayer.seekTo(0);
                ytPlayer.playVideo();
            }
            else ytPlayer.pauseVideo();
        }
    }, [visible])

    const handleReady = (event) => {
        setYtPlayer(event.target);
        if (visible) {
            event.target.seekTo(0);
            event.target.playVideo();
        }
    }

    const handleOnStateChange = (event) => {
        //close modal when video finished
        if (event.data === 0) setModalVisible(false)
    }

    return (
        <Modal
            title=""
            visible={visible}
            onCancel={() => setModalVisible(null)}
            width={800}
            footer={null}
            style={{ height: '90%' }}
        >
            <YouTube videoId={videoUrl} opts={YTopts} onReady={handleReady} onStateChange={handleOnStateChange} />
        </Modal>
    )
}

export default VideoModal;