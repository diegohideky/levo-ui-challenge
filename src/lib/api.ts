import axios from 'axios';
import { Organization } from '../shared/types';

const URL = process.env.REACT_APP_URL || 'https://my.api.mockaroo.com';
const API_KEY = process.env.REACT_APP_API_KEY || '2e435a20';

axios.defaults.params = { key: API_KEY };

const getEndpoint = (endpoint: string): string => `${URL}/${endpoint}.json`;

const getOrganizations = async (): Promise<Organization[]> => axios.get(getEndpoint('organizations'))
  .then(res => res.data);

const getOrganizationDetails = async (id: number) => axios.get(getEndpoint(`organizations/${id}`))
  .then(res => res.data);

const getOrganizationReports = async (id: number) => axios.get(getEndpoint(`organizations/${id}/reports`))
  .then(res => res.data);

const getReportDetails = async (orgId: number, id: number) => axios.get(getEndpoint(`organizations/${orgId}/reports/${id}/details`))
  .then(res => res.data);

const Api = {
  getOrganizations,
  getOrganizationDetails,
  getOrganizationReports,
  getReportDetails
};

export default Api;
