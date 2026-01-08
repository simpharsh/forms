import React, { useState } from 'react';

const Form2 = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        country: '',
        skills: []
    });

    const [errors, setErrors] = useState({});
    const [submissions, setSubmissions] = useState([]);

    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
        if (!formData.gender) tempErrors.gender = "Gender selection is required";
        if (!formData.country) tempErrors.country = "Country selection is required";
        if (formData.skills.length === 0) tempErrors.skills = "At least one skill must be selected";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        let updatedSkills = [...formData.skills];
        if (checked) {
            updatedSkills.push(value);
        } else {
            updatedSkills = updatedSkills.filter(skill => skill !== value);
        }
        setFormData({ ...formData, skills: updatedSkills });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmissions([...submissions, formData]);
            setFormData({ fullName: '', gender: '', country: '', skills: [] });
            setErrors({});
        }
    };

    return (
        <div className="page-container">
            <h2>Form 2: Medium Level Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter full name"
                    />
                    {errors.fullName && <div className="error-msg">{errors.fullName}</div>}
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                            /> Male
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                            /> Female
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={formData.gender === 'Other'}
                                onChange={handleChange}
                            /> Other
                        </label>
                    </div>
                    {errors.gender && <div className="error-msg">{errors.gender}</div>}
                </div>

                <div className="form-group">
                    <label>Country</label>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                    </select>
                    {errors.country && <div className="error-msg">{errors.country}</div>}
                </div>

                <div className="form-group">
                    <label>Skills</label>
                    <div className="checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                value="HTML"
                                checked={formData.skills.includes('HTML')}
                                onChange={handleCheckboxChange}
                            /> HTML
                        </label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                value="CSS"
                                checked={formData.skills.includes('CSS')}
                                onChange={handleCheckboxChange}
                            /> CSS
                        </label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                value="JavaScript"
                                checked={formData.skills.includes('JavaScript')}
                                onChange={handleCheckboxChange}
                            /> JavaScript
                        </label>
                    </div>
                    {errors.skills && <div className="error-msg">{errors.skills}</div>}
                </div>

                <button type="submit">Submit</button>
            </form>

            {submissions.length > 0 && (
                <div className="table-container">
                    <h3>Submitted Data</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Gender</th>
                                <th>Country</th>
                                <th>Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.fullName}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.country}</td>
                                    <td>{data.skills.join(', ')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Form2;
