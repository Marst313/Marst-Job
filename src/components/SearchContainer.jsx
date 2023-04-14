import { FormRow, FormRowSelect } from './';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice';
import { useState, useMemo } from 'react';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('');
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* Search Position  */}
          <FormRow type="text" value={localSearch} name="search" handleChange={optimizedDebounce} />
          {/* Search by Status  */}
          <FormRowSelect labelText="status" value={searchStatus} name="searchStatus" handleChange={handleSearch} list={['all', ...statusOptions]} />
          {/* Search by SearchType  */}
          <FormRowSelect labelText="type" value={searchType} name="searchType" handleChange={handleSearch} list={['all', ...jobTypeOptions]} />
          {/* sort  */}
          <FormRowSelect value={sort} name="sort" handleChange={handleSearch} list={sortOptions} />

          <button className="btn btn-block btn-danger" disabled={isLoading} onSubmit={handleSubmit}>
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
