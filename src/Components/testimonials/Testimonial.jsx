import './Testimonial.scss';
import {Facebook,Github,Instagram,Linkedin} from 'react-bootstrap-icons';

function Testimonial() {
    const data = [
        {
          id: 1,
          name: "Snighdho Majumdar",
          title: "Senior Developer",
          img:
            "avatar.png",
          icon: <Facebook style={{fontSize:'25px',color:'#3B5998'}} />,
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
          link:'',
          },
        {
          id: 2,
          name: "MD. Shamim Hossain",
          title: "Senior Developer",
          img:
            "avatar.png",
          icon: <Facebook style={{fontSize:'25px',color:'#3B5998'}}/>,
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
          link:''
        },
        {
          id: 3,
          name: "Tanveer Ahmed Nirjhor",
          title: "Senior Developer",
          img:
            "avatar.png",
          icon: <Facebook style={{fontSize:'25px',color:'#3B5998'}}/>,
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
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