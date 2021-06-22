//import { ContactSupportOutlined } from '@material-ui/icons';
import { useState } from 'react';
import './Works.scss';
import { SportsCricket,
    Language,WbSunny,Fastfood } from '@material-ui/icons';


function Works(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            //icon: "./assets/mobile.png",
            icon: <SportsCricket />,
            title: "Cricket App",
            desc:
                "This app provides live cricket match score , know any player details",
            img:"app/react/cricket-app.png",
            link:"https://nasim-cricket-app.netlify.app/"
        },
        {
            id: "2",
            icon: <Language />,
            title: "Voice recognition news app",
            desc:
                "Firstly Click the 'alanbtn' then speak which is your needed news then show related news and speak",
            img:"app/react/voice-news.png",
            link:"https://nasim-voice-recognition-news-app.netlify.app/"
        },
        {
            id: "3",
            icon: <Fastfood />,
            title: "Recipe App",
            desc:
                "Search your desire recipe then show it",
            img:
                "app/react/recipe-app (2).png",
            link:'https://nastuz-recipe-app-by-nasim.netlify.app/'
        },
        {
            id: "4",
            icon: <WbSunny />,
            title: "Weather App",
            desc:
                "Search your city and show easily it's weather condition",
            img:
                "app/react/weather-app.png",
            link:'https://weather-news-app-by-nasim.netlify.app/'
        },
    ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        {/* <img src={d.icon} alt="" /> */}
                                        {d.icon}
                                        
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span><a target="_blank" href={d.link}>Project demo</a></span>
                                </div>

                            </div>
                            <div className="right">
                                <img
                                    src={d.img}
                                    alt=""
                                />

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}

export default Works;