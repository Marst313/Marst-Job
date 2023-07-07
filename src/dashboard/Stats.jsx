import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../features/allJobs/allJobsSlice';
import { Notes, StatsContainer, ChartsContainer } from '../components/';

const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(showStats());
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: '0' }}>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
      <Notes />
    </div>
  );
};

export default Stats;
