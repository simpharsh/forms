import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const cityOptions = [
    { value: 'New York', label: 'New York' },
    { value: 'London', label: 'London' },
    { value: 'Tokyo', label: 'Tokyo' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Mumbai', label: 'Mumbai' }
];

const techOptions = [
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Vue', label: 'Vue' },
    { value: 'Node.js', label: 'Node.js' }
];

const Form3 = () => {
    const [formData, setFormData] = useState({
        city: null,
        technologies: [],
        isActive: false,
        startDate: new Date()
    });

    const [errors, setErrors] = useState({});
    const [submissions, setSubmissions] = useState([]);

    const validate = () => {
        let tempErrors = {};
        if (!formData.city) tempErrors.city = "City selection is required";
        if (!formData.technologies || formData.technologies.length === 0) {
            tempErrors.technologies = "At least one technology must be selected";
        }
        if (!formData.startDate) tempErrors.startDate = "Date is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleCityChange = (selectedOption) => {
        setFormData({ ...formData, city: selectedOption });
    };

    const handleTechChange = (selectedOptions) => {
        setFormData({ ...formData, technologies: selectedOptions || [] });
    };

    const handleToggleChange = (e) => {
        setFormData({ ...formData, isActive: e.target.checked });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, startDate: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmissions([...submissions, formData]);
            // Reset form (optional, keeping date as today or cleared)
            setFormData({
                city: null,
                technologies: [],
                isActive: false,
                startDate: new Date()
            });
            setErrors({});
        }
    };

    return (
        <div className="page-container">
            <h2>Form 3: Advanced Form</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Searchable City Select</label>
                    <Select
                        options={cityOptions}
                        value={formData.city}
                        onChange={handleCityChange}
                        placeholder="Select a city..."
                        isClearable
                    />
                    {errors.city && <div className="error-msg">{errors.city}</div>}
                </div>

                <div className="form-group">
                    <label>Technologies (Multi-Select)</label>
                    <Select
                        isMulti
                        options={techOptions}
                        value={formData.technologies}
                        onChange={handleTechChange}
                        placeholder="Select technologies..."
                    />
                    {errors.technologies && <div className="error-msg">{errors.technologies}</div>}
                </div>

                <div className="form-group">
                    <label>Status (Toggle)</label>
                    <div className="toggle-switch">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={formData.isActive}
                                onChange={handleToggleChange}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span style={{ marginLeft: '10px' }}>
                            {formData.isActive ? 'Active' : 'Inactive'}
                        </span>
                    </div>
                </div>

                <div className="form-group">
                    <label>Date Picker</label>
                    <DatePicker
                        selected={formData.startDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        className="date-picker-input"
                    />
                    {errors.startDate && <div className="error-msg">{errors.startDate}</div>}
                </div>

                <button type="submit">Submit</button>
            </form>

            {submissions.length > 0 && (
                <div className="table-container">
                    <h3>Submitted Data</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Technologies</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.city ? data.city.label : ''}</td>
                                    <td>{data.technologies.map(t => t.label).join(', ')}</td>
                                    <td>{data.isActive ? 'Active' : 'Inactive'}</td>
                                    <td>{data.startDate ? data.startDate.toLocaleDateString() : ''}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Form3;
