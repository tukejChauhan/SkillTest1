import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const menuItems = ["Option 1", "Option 2", "Option 3"];
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.App}>
      <span className={styles.title}>Should you use a dropdown?</span>
      <div className={styles.dropdown}>
      <button className={styles.dropbtn} onMouseEnter={() => {setShowMenu(true)}} onMouseLeave={() => {setShowMenu(false)}}>Select</button>
      <div className={styles.dropdownContent}>
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
