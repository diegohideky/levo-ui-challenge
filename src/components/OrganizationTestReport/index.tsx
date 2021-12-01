import { Report } from '../../shared/types';
import styles from './OrganizationTestReport.module.css';

type ReportProps = Report & {
  onClick: Function;
};

const OrganizationTestReport: React.FC<ReportProps> = (props) => {
  return (
    <div className={styles.OrganizationTestReport} onClick={() => props.onClick(props.id)}>
      <div className={styles.title}>
        <b>Execution # {props.id}</b>
        <small>{props.start_date} - {props.duration}</small>
      </div>
      <div className={styles.tests}>
        <span className={styles.passed}>{props.succeed_tests} passed</span>
        <span className={styles.failed}>{props.succeed_tests} failed</span>
      </div>
    </div>
  );
};

export default OrganizationTestReport;
