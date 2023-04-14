import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FormRowSelect from '../components/FormRowSelect';
import { handleChange, clearValues, createJob, editJob } from '../features/job/jobSlice';
import { useEffect } from 'react';

const AddJob = () => {
  const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all the fields');
      return;
    }
    if (isEditing) {
      dispatch(editJob({ jobId: editJobId, job: { position, company, jobLocation, jobType, status } }));
      return;
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  };
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, [user]);

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow type="text" name="position" value={position} handleChange={handleJobInput} />

          {/* company */}
          <FormRow type="text" name="company" value={company} handleChange={handleJobInput} />

          {/* location */}
          <FormRow type="text" labelText="job location" name="jobLocation" value={jobLocation} handleChange={handleJobInput} />

          {/*  status */}
          <FormRowSelect name="status" value={status} handleChange={handleJobInput} list={statusOptions} />

          {/*  jobType */}
          <FormRowSelect name="jobType" labelText="job type" value={jobType} handleChange={handleJobInput} list={jobTypeOptions} />

          <div className="btn-container">
            <button type="button" className="btn btn-block clear-btn" onClick={() => dispatch(clearValues())}>
              clear
            </button>

            <button type="submit" className="btn btn-block submit-btn" onClick={handleSubmit} disabled={isLoading}>
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
