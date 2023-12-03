import './Testimonial.scss';
import {Facebook,Github,Instagram,Linkedin} from 'react-bootstrap-icons';

function Testimonial() {
    const data = [
        {
          id: 1,
          name: "Snighdho Majumdar",
          title: "Senior Developer, Fiverr",
          img:
            "avatar.png",
          icon: <Facebook style={{fontSize:'25px',color:'#3B5998'}} />,
          desc:
            "An exceptional developer, demonstrating profound skills and a remarkable ability to engineer solutions with precision and creativity.",
          link:'',
          },
        {
          id: 2,
          name: "MD. Shamim Hossain",
          title: "Software Engineer,DSI",
          img:
            "avatar.png",
          icon: <Facebook style={{fontSize:'25px',color:'#3B5998'}}/>,
          desc:
            "An adept developer, consistently delivering high-quality solutions with a strong engineering acumen ",
          featured: true,
          link:''
        },
        {
          id: 3,
          name: "Tanveer Ahmed Nirjhor",
          title: "Software Engineer",
          img:
            "avatar.png",
          icon: <Facebook style={{fontSize:'25px',color:'#3B5998'}}/>,
          desc:
            "An exceptional developer, demonstrating proficiency and dedication in delivering high-quality solutions. Consistently excels in engineering challenges with a keen eye for innovation",
          link:''
          },
      ];
      return (
        <div className="testimonials" id="testimonials">
          <h1>Testimonials</h1>
          <div className="container">
            {data.map((d) => (
              <div className={d.featured ? "card featured" : "card"}>
                <div className="top">
                  <img src="assets/right-arrow.png" className="left" alt="" />
                  <img
                    className="user"
                    src={d.img}
                    alt=""
                  />
                  {/* <img className="right" src={d.icon} alt="" /> */}
                  <span  className="right"><a href={d.link}>{d.icon}</a></span>
                </div>
                <div className="center">
                  {d.desc}
                </div>
                <div className="bottom">
                  <h3>{d.name}</h3>
                  <h4>{d.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

            export default Testimonial;