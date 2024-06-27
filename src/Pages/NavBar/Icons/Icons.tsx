import "./Icons.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
function Icons() {
  const redirectToGitHub = () => {
    window.location.href = "https://github.com/ahmedIbrahim84201";
  };
  const redirectToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/ahmed-ibrahim-a7med/";
  };
  const redirectToWhatsapp = () => {
    window.location.href = "https://wa.me/+905353264960";
  };

  return (
    <div className="icons-group">
      <a onClick={redirectToGitHub} className="icons">
        <FaGithub />
      </a>
      <a onClick={redirectToLinkedIn} className="icons">
        <FaLinkedin />
      </a>
      <a onClick={redirectToWhatsapp} className="icons">
        <FaWhatsapp />
      </a>

      {/* <a href="mailto:ahmedibrahim51836@gmail.com" target="_blank">
        <FaEnvelope />
      </a> */}
    </div>
  );
}
export default Icons;
