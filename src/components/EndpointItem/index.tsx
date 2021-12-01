import { Endpoint } from '../../shared/types';
import styles from './EndpointItem.module.css';

type EndpointItemProps = Endpoint;

const EndpointItem: React.FC<EndpointItemProps> = (props) => {
  return (
    <div className={`${styles.EndpointItem} ${styles[props.type]}`}>
      {props.url}
    </div>
  );
};

export default EndpointItem;
