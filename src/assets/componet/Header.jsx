
import { Link } from "react-router-dom";
import "./Header.css";
import logo from './image/kisan.webp'
import back from './image/green.jpg';
import logo1 from './image/Facebook.png';
import logo2 from './image/twitter.png';
import logo3 from './image/youtube.png';
import logo4 from './image/Android.png';
import logo5 from './image/Instagram.webp'

export function HeaderDesign() {
  return (
    <div>
      
      <div>
        <img
          src={back}
          alt="background image"
          style={{ width: "100%", height: "680px",}}
        />
      </div>
    <div className="contact-container">
      <div className="social-links">
            <h1 style={{color:"#fff"}}>Social Media</h1>
        <Link to="https://www.facebook.com/kisansarathi"><img src={logo1}  style={{height:"auto",width:"150px"}} /></Link>
        <Link to=""><img src={logo5} style={{height:"auto",width:"70px"}}/></Link>
        <Link to="https://www.youtube.com/"><img src={logo3} style={{height:"auto",width:"110px"}}/></Link>
        <Link to="#"><img src={logo2} style={{height:"auto",width:"100px"}}/></Link>  
        
      </div>
      <div className="form-container">
        <h2>Connect with us</h2>
        <form>
          <input type="text" placeholder="Name*" required />
          <input type="text" placeholder="Mobile*" required />
          <input type="email" placeholder="Email*" required />
          <textarea placeholder="Message*" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  





    </div>

  )
}

