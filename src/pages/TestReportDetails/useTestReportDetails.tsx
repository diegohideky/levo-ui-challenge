import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import debounce from '@material-ui/utils/debounce';
import { ReportDetails } from '../../shared/types';

import Api from '../../lib/api';

const useTestReportDetails = () => {
  const [reportDetails, setReportDetails] = useState<ReportDetails>({
    branch: null,
    commit: null,
    duration: null,
    end_date: null,
    endpoints: [],
    environment_url: null,
    github_user: null,
    id: null,
    job_name: null,
  });
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false);


  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.value || !e.target.value.trim()) {
      setSearch('');
    } else {
      setSearch(e.target.value.trim());
    }
  }, []);

  const handleDebounce = debounce(handleSearch, 300);

  const { orgId, id } = useParams<{ orgId: string, id: string }>();

  useEffect(() => {
    const getOrganizationReports = async () => {
      setLoading(true);

      try {
        const payload = await Api.getReportDetails(+orgId, +id);
        setReportDetails(payload);
      } catch (err) {
        console.log({ err });
      } finally {
        setLoading(false);
      }
    };

    getOrganizationReports();
  }, [orgId, id]);

  return {
    reportDetails,
    loading,
    handleDebounce,
    search
  };
};

export default useTestReportDetails;
