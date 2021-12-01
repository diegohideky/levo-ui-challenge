import { Organization } from '../../shared/types';

import styles from './OrganizationCard.module.css';

type OrganizationProps = Organization & {
  onClick: Function;
};

const OrganizationCard: React.FC<OrganizationProps> = (props: OrganizationProps) => {
  return (
    <div className={styles.OrganizationCard} onClick={() => props.onClick(props.id)}>
      <img src={props.owner_picture} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default OrganizationCard;
