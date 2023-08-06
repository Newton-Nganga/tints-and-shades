
import {FaGithub} from "react-icons/fa"
function Navbar({scrolledDown}) {
  return (
    <div className={`nav-container ${scrolledDown && 'nav-scrolled'}`}>
     <div className='inner-section nav-inner'>
        <div className='nav-item'>
         <div className='nav-logo'>
        </div>
        <div className='nav-github'>
          <a href="https://github.com/Newton-Nganga/tints-and-shades.git">
             <FaGithub/>
          </a>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Navbar