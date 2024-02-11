
import  styles from './styles.module.css';

const Select: React.FC = () => {
  return (
    <div className={styles.from}>
      <select className={styles.formSelect}>
        <option>AED</option>
        <option selected>RUB</option>
        <option>ALL</option>
        <option>AMD</option>
      </select>
    </div>
  );
}

export default Select;
