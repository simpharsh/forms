import React, { useState } from 'react';

const Form1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    const [errors, setErrors] = useState({});
    const [submissions, setSubmissions] = useState([]);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Invalid email format";
        }

        if (!formData.mobile) {
            tempErrors.mobile = "Mobile number is required";
        } else if (isNaN(formData.mobile)) {
            tempErrors.mobile = "Mobile number must be numeric";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmissions([...submissions, formData]);
            setFormData({ name: '', email: '', mobile: '' });
            setErrors({});
        }
    };

    return (
        <div className="page-container">
            <h2>Form 1: Simple Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    {errors.name && <div className="error-msg">{errors.name}</div>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <div className="error-msg">{errors.email}</div>}
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                    />
                    {errors.mobile && <div className="error-msg">{errors.mobile}</div>}
                </div>

                <button type="submit">Submit</button>
            </form>

            {submissions.length > 0 && (
                <div className="table-container">
                    <h3>Submitted Data</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.mobile}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Form1;
