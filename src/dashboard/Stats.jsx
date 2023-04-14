import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../features/allJobs/allJobsSlice';
import ChartsContainer from '../components/ChartsContainer';
import StatsContainer from '../components/StatsContainer';

const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(showStats());
  }, []);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
