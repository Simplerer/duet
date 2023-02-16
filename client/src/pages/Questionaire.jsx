import { useState } from "react";
import { useMutation } from '@apollo/client';
import { UPDATE_ANSWERS } from '../utils/mutations';
import Auth from '../utils/auth';

const Questionaire = () => {

  const [formData, setFormData] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',

  });

  const [updateAnswers, { error }] = useMutation(UPDATE_ANSWERS);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateAnswers({
        variables: { ...formData },
      });

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="usernameinput" className="form-label mt-4">Username</label>
            <input
              type="username"
              className="form-control"
              id="usernameinput"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="passwordinput" className="form-label mt-4">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordinput"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="cityinput" className="form-label mt-4">City</label>
            <input
              type="text"
              className="form-control"
              id="cityinput"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="stateinput" className="form-label mt-4">State</label>
            <input
              type="text"
              className="form-control"
              id="stateinput"
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pronounSelect" className="form-label mt-4">Pronouns</label>
            <select
              className="form-select"
              id="pronounSelect"
              name="pronouns"
              value={formData.pronouns}
              onChange={handleChange}>
              <option>She/Her</option>
              <option>He/Him</option>
              <option>They/Them</option>

            </select>
          </div>
          <div className="form-group">
            <label htmlFor="genderSelect" className="form-label mt-4">Gender</label>
            <select
              multiple=""
              className="form-select"
              id="genderSelect"
              name="gender"
              value={formData.gender}
              onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
              <option>Non-Binary</option>
              <option>Prefer not to say</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ageSelect" className="form-label mt-4">Age</label>
            <select
              multiple=""
              className="form-select"
              id="ageSelect"
              name="age"
              value={formData.age}
              onChange={handleChange}>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="interestSelect" className="form-label mt-4">Interested in</label>
            <select
              multiple=""
              className="form-select"
              id="interestSelect"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}>
              <option>Friendship</option>
              <option>Relationship</option>
              <option>Both</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </main>
  );
};


export default Questionaire;