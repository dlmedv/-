import Header from '../Header/Header';
import Main from '../Main/Main';

import  styles from './styles.module.css';

export const App: React.FC = () =>  {
  return (
    <div className={styles.app}>
      <div className={styles.appContainer}>
        <Header/>
        <Main/>
        </div>
    </div>
  );
}

