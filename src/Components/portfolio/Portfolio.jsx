import './Portfolio.scss';
import PortfolioList from '../portfoliolist/PortfolioList';
import { useState } from 'react';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data";
import { useEffect } from 'react';

function Portfolio(props) {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Skills",
        },
        {
            id: "web",
            title: "React-Js App",
        },
        {
            id: "mobile",
            title: "Laravel App",
        },
        {
            id: "design",
            title: "Jsp-Servlet",
        },
        {
            id: "content",
            title: "JavaScript",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />

                ))}
            </ul>
            <div className="container">

                {data.map((d) => (

                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                       
                    </div>

                ))}

            </div>
        </div>
    );
}

export default Portfolio;