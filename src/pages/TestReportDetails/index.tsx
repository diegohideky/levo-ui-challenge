import { TestReport, Loader } from '../../components';
import useTestReportDetails from "./useTestReportDetails";

import styles from './TestReportDetails.module.css';

const TestReportDetails: React.FC = () => {
  const { loading, reportDetails, handleDebounce, search } = useTestReportDetails();

  return (
    <div className={styles.TestReportDetails}>
      <h4>Test Report Details</h4>

      {loading
        ? (<Loader />)
        : (
            <TestReport
              key={reportDetails?.id}
              {...reportDetails}
              onChange={handleDebounce}
              search={search}
            />
          )
      }
    </div>
  );
};

export default TestReportDetails;
