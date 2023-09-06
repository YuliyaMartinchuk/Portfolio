import React, {useEffect, useRef, useState} from 'react';
import {MainContainer} from "./MainStyle";
import me from "../assets/img/mee.jpg";


//@ts-ignore
import TOPOLOGY from "vanta/dist/vanta.topology.min"

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export const Main = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(TOPOLOGY({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: "#fcfcff",
                backgroundColor: "#1e1e93"
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (

                <MainContainer id={"MainContainer"} ref={myRef} >
                    <div>
                        <p>HI there</p>
                        <p>  I am    <span>Yuliya Martinchuk</span> </p>
                        <span>  FRONTEND DEVELOPER</span>
                    </div>
                    <img src={me}/>
                </MainContainer>

    );
};
