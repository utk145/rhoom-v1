import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { id } = useParams();
    console.log(id);

    const meeting = async (element) => {
        const appID = Your_ID;
        const serverSecret = "Your-Key";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            id,
            Date.now().toString(),
            "Cusps"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });

    }

    return (
        <div ref={meeting} className="" style={{ width: "100vw", height: "100vh" }}></div>
    )
}

export default Room