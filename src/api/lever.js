import config from '../../config';

import apiFetch from './apiFetch';

const {
  api: { leverUrl },
} = config;

// eslint-disable-next-line import/prefer-default-export
export const getOckamJobs = () => apiFetch(leverUrl,'postings/ockam?mode=json');
