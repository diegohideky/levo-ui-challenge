import { withRouter } from 'react-router';
import { OrganizationCard, Loader } from '../../components';
import { Organization } from '../../shared/types';
import styles from './OrganizationPicker.module.css';
import useOrganizationPicker from './useOrganizationPicker';

const OrganizationPicker: React.FC<{ history: any }> = ({ history }) => {
  const { goToReports, loading, organizations } = useOrganizationPicker();

  return (
    <div className={styles.OrganizationPicker}>
      <h1>Organizations</h1>
      <p>Pick the organization you want to access to</p>

      {loading
        ? (<Loader />)
        : organizations.map((organization: Organization) => (
          <div key={organization.id}>
            <OrganizationCard
              {...organization}
              onClick={(id: number)=> history.push(goToReports(id))}
            />
          </div>
        )
      )}
    </div>
  );
};

export default withRouter(OrganizationPicker);
