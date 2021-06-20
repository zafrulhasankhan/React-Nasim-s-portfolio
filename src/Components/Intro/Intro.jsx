import './Intro.scss';
import { init } from 'ityped';
import { useEffect ,useRef } from 'react';

function Intro(props) {

    const textref = useRef();
   
    useEffect(()=>{
       init(textref.current,{
           showCursor:false,
           backDelay:1700,
           backSpeed:60,
           strings:['Developer','Desginer','FullStack developer']
       })
    },[])

    return (
        
        <div className="intro" id="intro">
            <div className="left">

                <div className="imgContainer">

                    <img src="me.jpg" alt="hello" />
                </div>

            </div>
            <div className="right">

               <div className="wrapper">
                   <h2>Hi There, I'm</h2>
                   <h1>Zafrul Hasan Nasim</h1>
                   <h3>Web <span ref={textref} ></span></h3>
               </div>
               <a href="#portfolio">
                   <img src="assets/down.png" alt="" />
               </a>

            </div>
        </div>
    );
}

export default Intro;