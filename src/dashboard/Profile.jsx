import { useState } from 'react';
import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../features/user/userSlice';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    dispatch(updateUser(userData));
  };

  const { name, email, lastName, location } = userData;
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow type="text" value={name} name="name" handleChange={handleChange} />

          <FormRow type="text" labelText="last name" name="lastName" value={lastName} handleChange={handleChange} />

          <FormRow type="email" value={email} name="email" handleChange={handleChange} />

          <FormRow type="text" value={location} name="location" handleChange={handleChange} />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? 'loading...' : 'Save'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
