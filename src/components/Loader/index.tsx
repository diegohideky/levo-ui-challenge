import CircularProgress from '@material-ui/core//CircularProgress';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.Loader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
