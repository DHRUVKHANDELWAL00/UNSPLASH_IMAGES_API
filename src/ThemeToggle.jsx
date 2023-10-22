import { useGlobalContext } from "./context";
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs';



const ThemeToggle=()=>{
  const {isDarkTheme,toggleDarkTheme}=useGlobalContext();
  // console.log(greeting);
  console.log(isDarkTheme);
  return(
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon"/>
        ):(
          <BsFillSunFill className="toggle-icon"/>
        )}
        
        
      </button>
    </section>
  )
}
export default ThemeToggle;

