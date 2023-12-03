import './Topbar.scss';
import { Mail, PhoneInTalk } from '@material-ui/icons';

function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">  NasTuz</a>
                    <div className="itemContainer">
                        <PhoneInTalk className="icon" />
                        <span>+88 01700591547</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>nasimkhan18003@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                          
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;