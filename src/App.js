import { useState } from "react";
import styles from "./App.module.css";

//defining main app
function App() {
  //menu items array
  const menuItems = ["Option 1", "Option 2", "Option 3"];

  //defining state to show menu items
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.App}>
      <span className={styles.title}>Should you use a dropdown?</span>
      <div className={styles.dropdown}>
      <button className={styles.dropbtn} 
      onMouseEnter={() => {setShowMenu(true)}} 
      onMouseLeave={() => {setShowMenu(false)}}>Select</button>
      <div className={styles.dropdownContent}>

        {/* conditionally rendering menu items */}
        {showMenu? 
        <div>{
          menuItems.map((item) => (<a href="" onMouseEnter={() => {setShowMenu(true)}} 
          onMouseLeave={() => {setShowMenu(false)}}
          onClick={(e) => {
            e.preventDefault();
            setShowMenu(false)}}
          >{item}</a>))
          }</div>
        :null}
      
      </div>
    </div>
      
    </div>
  );
}

export default App;
