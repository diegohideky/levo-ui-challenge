import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CancelRounded from '@material-ui/icons/CancelRounded';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { EndPointContent } from '../../shared/types';
import styles from './EndpointContent.module.css';
import { EndpointItem } from '..';
import { useMemo } from 'react';

type EndPointContentProps = EndPointContent;

const EndpointContent: React.FC<EndPointContentProps> = (props) => {
  const parser = useMemo(() => ({
    failed: {
      icon: <CancelRounded color="error" />,
      title: 'Failed Tests',
    },
    success: {
      icon: <CheckCircle color="success" />,
      title: 'Passed Tests',
    }
  }), []);

  return (
    <div className={styles.EndpointContent}>
      <Accordion aria-expanded style={{ width: '90%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={styles.header}>
            {parser[props.type].icon} {' '}
            {parser[props.type].title} {' '}
            ({props.count || 0} / {props.total || 0})
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {props.endpoints?.map((endpoint, i) => (
            <div key={i+1}>
              <EndpointItem
                type={props.type}
                url={endpoint.url}
              />
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EndpointContent;
