import './Menu.scss';
import { Mail, PhoneInTalk } from '@material-ui/icons';
function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonial</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                   
                        <li className='contact-info'>
                        <Mail className="icon" />
                        <span>nasimkhan18003@gmail.com</span>
                        </li>
                        <li className='contact-info'>
                        <PhoneInTalk className="icon" />
                        <span>+88 01700591547</span>
                        </li>
                    
                </li>


            </ul>
            
        </div>
    );
}

export default Menu;