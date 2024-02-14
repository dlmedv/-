
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import  styles from './styles.module.css';

const  Main: React.FC = () => {
    const { currency } = useContext(Context);
    let currencyName = 'Russian ruble'
    switch (currency) {
        case 'all':
            currencyName = 'Albanian lek';
            break;
        case 'aed':
            currencyName = 'UAE Dirhams';
            break;
        case 'amd':
            currencyName = 'Armenian Dram';
            break;
        default:
            currencyName = 'Russian ruble';
    }
    return (
        <div className={styles.main}>
            <p className={styles.mainTitle}>{currencyName}</p>
        </div>
    )
}

export default Main;