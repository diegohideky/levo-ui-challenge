import { useContext } from 'react';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Loader } from '..';

import styles from './SideBar.module.css';

const SideBar: React.FC = () => {
  const { organization, loading } = useContext(GlobalContext);


  return (
    <div className={styles.SideBar}>
      <div className={styles.title}>
        <h2>Levo</h2>
        {organization?.name && !loading && <span>{organization?.name}</span>}
      </div>
      {loading && <Loader />}
      {organization?.id && !loading && (
        <div className={styles.menu}>
          <ArrowRight /> Test Reports
        </div>
      )}
    </div>
  );
};

export default SideBar;
