import { useMemo } from "react";
import { ReportDetails } from "../../shared/types";
import TextField from '@material-ui/core/TextField';
import { EndpointContent } from '../index';
import styles from './TestReport.module.css';
import GeneralInfo from "../GeneralInfo";

type TestReportProps = ReportDetails & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
};

const TestReport: React.FC<TestReportProps> = (props) => {
  const failedTests = useMemo(() => {
    return props.endpoints?.filter(({ status, url }) => {
      const hasFailed = ['ERROR', 'FAILURE'].includes(status);
      return !props.search ? hasFailed : hasFailed && new RegExp(props.search, 'gi').test(url);
    });
  }, [props.endpoints, props.search]);

  const passedTests = useMemo(() => {
    return props.endpoints?.filter(({ status, url }) => {
      const hasPassed = ['SUCCESS'].includes(status);
      return !props.search ? hasPassed : hasPassed && new RegExp(props.search, 'gi').test(url);
    });
  }, [props.endpoints, props.search]);

  return (
    <div className={styles.TestReport}>
      <GeneralInfo {...props} />

      <h4>Results</h4>

      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        className={styles.search}
        onChange={props.onChange}
        style={{ width: '90%' }}
      />

      <EndpointContent
        count={failedTests?.length || 0}
        endpoints={failedTests || []}
        total={props.endpoints?.length || 0}
        type="failed"
      />

      <EndpointContent
        count={passedTests?.length || 0}
        endpoints={passedTests || []}
        total={props.endpoints?.length || 0}
        type="success"
      />
    </div>
  );
};

export default TestReport;
