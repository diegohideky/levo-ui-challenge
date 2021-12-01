export type Organization = {
  id: number;
  name: string;
  owner_email: string;
  owner_name: string;
  owner_picture: string;
}

export type Report = {
  duration: number;
  failed_tests: number;
  id: number;
  name: string;
  start_date: Date;
  succeed_tests: number;
}

export type EndPoint = {
  duration: number;
  status: string;
  url: string;
}

export type ReportDetails = {
  branch: string | null;
  commit: string | null;
  duration: number | null;
  end_date: Date | null;
  endpoints: EndPoint[] | null;
  environment_url: string | null;
  github_user: string | null;
  id: number | null;
  job_name: string | null;
}

export type EndpointType = 'failed' | 'success';

export type EndPointContent = {
  total: number;
  count: number;
  type: EndpointType;
  endpoints: EndPoint[];
};

export type Endpoint= {
  type: EndpointType;
  url: string;
}
