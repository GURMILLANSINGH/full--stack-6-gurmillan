import { useState } from "react";
import "./App.css";

function StudentForm() {

  const emptyForm = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: []
  };

  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked)
      setFormData({ ...formData, skills: [...formData.skills, value] });
    else
      setFormData({
        ...formData,
        skills: formData.skills.filter(s => s !== value)
      });
  };

  const handleCancel = () => setFormData(emptyForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    handleCancel();
  };

  return (
    <div className="app">
      <div className="form-container">
        <h2>Student Registration Form</h2>

        <form onSubmit={handleSubmit}>

          {/* PERSONAL DETAILS */}
          <div className="form-section">
            <div className="section-title">Personal Details</div>

            <div className="two-col">
              <div>
                <label>First Name</label>
                <input name="firstName" value={formData.firstName} onChange={handleChange}/>
              </div>

              <div>
                <label>Last Name</label>
                <input name="lastName" value={formData.lastName} onChange={handleChange}/>
              </div>
            </div>

            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange}/>
          </div>

          {/* GENDER */}
          <div className="form-section">
            <div className="section-title">Gender</div>

            <div className="radio-group">
              {["Male","Female","Other"].map(g => (
                <label key={g}>
                  <input type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* ADDRESS */}
          <div className="form-section">
            <div className="section-title">Address Info</div>

            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange}/>

            <label>State</label>
            <select name="state" value={formData.state} onChange={handleChange}>
              <option value="">Select State</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
              <option>Maharashtra</option>
            </select>
          </div>

          {/* SKILLS */}
          <div className="form-section">
            <div className="section-title">Skills</div>

            <div className="skills-list">
              {[
                "Java","Python","Machine Learning","AI",
                "DevOps","Cyber Security","C++","Cloud"
              ].map(skill => (
                <label key={skill}>
                  <input type="checkbox"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleSkillChange}
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default StudentForm;