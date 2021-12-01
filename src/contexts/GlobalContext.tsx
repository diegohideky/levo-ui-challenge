import { createContext, useState, useMemo, ReactNode, useEffect } from 'react';
import { useParams } from 'react-router';
import Api from '../lib/api';
import { Organization } from '../shared/types';

export type GlobalContextType = {
  organization: Organization | undefined;
  setOrganization: (organization: Organization) => void;
  loading: Boolean;
  setLoading: (loading: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType>({
  organization: undefined,
  setOrganization: (organization: Organization) => {},
  loading: false,
  setLoading: (loading: boolean) => {},
});

type GlobalContextProps = {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalContextProps> = (props) => {
  const [organization, setOrganization] = useState<Organization>();
  const { orgId } = useParams<{orgId: string | undefined}>();

  const [loading, setLoading] = useState<Boolean>(false);
  const value = useMemo(() => ({
    organization, setOrganization,
    loading, setLoading
  }), [
    organization, setOrganization,
    loading, setLoading,
  ]);

  useEffect(() => {
    const fetchOrganization = async (id: number) => {
      setLoading(true);
      try {
        const payload = await Api.getOrganizationDetails(id);
        setOrganization(payload);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if ((orgId && !organization?.id) || (orgId && organization && +orgId !== +organization?.id)) {
      fetchOrganization(+orgId);
    }
  }, [orgId, organization]);

  return <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>;
}

export { GlobalProvider, GlobalContext };
