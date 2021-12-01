import TimerIcon from '@material-ui/icons/Timer';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import WidgetsIcon from '@material-ui/icons/Widgets';
import FastForwardIcon from '@material-ui/icons/FastForward';
import HistoryIcon from '@material-ui/icons/History';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import { ReportDetails } from '../../shared/types';
import styles from './GeneralInfo.module.css';

type GeneralInfoProps = ReportDetails;

const GeneralInfo: React.FC<GeneralInfoProps> = (props) => {
  return (
    <div className={styles.GeneralInfo}>
      <div className={styles.one}>
          <span><TimerIcon fontSize="small" /> Duration: {props.duration}</span>
          <span><CalendarTodayIcon fontSize="small" />Finished: {props.duration}</span>
        </div>
        <div className={styles.two}>
          <span><WidgetsIcon fontSize="small" /> build-and-deploy ({props.id})</span>
        </div>
        <div className={styles.three}>
          <span><FastForwardIcon fontSize="small" /> {props.branch}</span>
          <span><HistoryIcon fontSize="small" /> {props.commit}</span>
          <span><GitHubIcon fontSize="small" /> {props.github_user}</span>
        </div>
        <div className={styles.four}>
          <span><LanguageIcon fontSize="small" /> {props.environment_url}</span>
        </div>
    </div>
  );
}

export default GeneralInfo;
