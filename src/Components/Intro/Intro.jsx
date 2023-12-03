import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

function Intro(props) {

    const textref = useRef();

    useEffect(() => {
        init(textref.current, {
            showCursor: false,
            backDelay: 1400,
            backSpeed: 60,
            strings: ['Developer', 'Development With React JS', 'Development With Node JS',
                'Development With Laravel',
                'Development With Jsp-Servlet'
            ]
        })
    }, [])

    return (

        <div className="intro" id="intro">
            <div className="left">

                <div className="imgContainer">

                    <img src="me3.png" alt="hello" />
                </div>

            </div>
            <div className="right">

                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Zafrul Hasan Nasim</h1>
                    <h3>Web <span ref={textref} ></span></h3><br /><br /><br className="break" />
                    <h4>Educational Qulaification : </h4>
                        <span className="edu">
                            B.sc. Engg. in ICT at Mawlana Bhashani Science and Tecnology University.
                        </span>
                    
                </div>

                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>

            </div>
        </div>
    );
}

export default Intro;