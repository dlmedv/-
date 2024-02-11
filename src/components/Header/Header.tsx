
import imgCat from '../../assest/images/cat.png';
import Select from "../Select/Select";

import  styles from './styles.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInfo}>
        <h1 className={styles.headerTitle}>CAT</h1>
        <h2 className={styles.headerSubtitle}>currencies academic terms</h2>
        <div className={styles.headerDropdown}>
       <Select/>
       </div>
      </div>
      <img className={styles.headerImage} src={imgCat} alt="черный кот"/>
    </div>
  );
}


export default Header;