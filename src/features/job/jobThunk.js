import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice';
import { clearValues } from './jobSlice';

export const createJobThunk = async (job, thunkApi) => {
  try {
    const resp = await customFetch.post('/jobs', job);
    thunkApi.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkApi);
  }
};
export const editJobThunk = async ({ jobId, job }, thunkApi) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job);
    thunkApi.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkApi);
  }
};
export const deleteJobThunk = async (jobId, thunkApi) => {
  thunkApi.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`);
    thunkApi.dispatch(getAllJobs());

    return resp.data.msg;
  } catch (error) {
    thunkApi.dispatch(hideLoading());

    return checkForUnauthorizedResponse(error, thunkApi);
  }
};
