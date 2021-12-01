import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Report } from '../../shared/types';

import Api from '../../lib/api';

const useTestReportList = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const { orgId } = useParams<{ orgId: string }>();

  useEffect(() => {
    const getOrganizationReports = async () => {
      setLoading(true);

      try {
        const payload = await Api.getOrganizationReports(+orgId);
        setReports(payload);
      } catch (err) {
        console.log({ err });
      } finally {
        setLoading(false);
      }
    };

    getOrganizationReports();
  }, [orgId]);

  const goToReportDetails = (id: number): string => {
    return `/organization/${orgId}/reports/${id}/details`;
  };

  return {
    reports,
    goToReportDetails,
    loading,
  };
};

export default useTestReportList;
