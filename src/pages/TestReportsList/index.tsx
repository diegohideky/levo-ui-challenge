import { withRouter } from 'react-router';
import useTestReportList from './useTestReportsList';
import { OrganizationTestReport, Loader } from '../../components';

import styles from './TestReportList.module.css';

const TestRerportsList: React.FC<any> = ({ history }) => {

  const { loading, reports, goToReportDetails } = useTestReportList();

  return (
    <div className={styles.TestReportList}>
      <h4>Test Reports</h4>

      {loading
        ? (<Loader />)
        : reports.map(report => (
          <div key={report.id}>
            <OrganizationTestReport
              {...report}
              onClick={(id: number) => history.push(goToReportDetails(id))}
            />
          </div>
        )
      )}
    </div>
  );
};

export default withRouter(TestRerportsList);
