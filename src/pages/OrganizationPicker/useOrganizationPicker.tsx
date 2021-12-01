import { useEffect, useState } from 'react';
import { Organization } from '../../shared/types';

import Api from '../../lib/api';

const useOrganizationPicker = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    const getOrganizations = async () => {
      setLoading(true);

      try {
        const payload = await Api.getOrganizations();
        setOrganizations(payload);
      } catch (err) {
        console.log({ err });
      } finally {
        setLoading(false);
      }
    };

    getOrganizations();
  }, []);

  const goToReports = (id: number): string => {
    return `/organization/${id}/reports`;
  };

  return {
    organizations,
    goToReports,
    loading,
  };
};

export default useOrganizationPicker;
