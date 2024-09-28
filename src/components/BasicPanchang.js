import React, { useState } from 'react';
import './basic-panchang.css';
import PanchangTable from './PanchangTable';
import { Link } from 'react-router-dom';

const BasicPanchang = () => {
  const [formData, setFormData] = useState({
    day: '',
    month: '',
    year: '',
    hour: '',
    min: '',
    lat: '',
    lon: '',
    tzone: 5.5
  });
  const [panchangData, setPanchangData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPanchangData(null);

    const userId = '633775';
    const apiKey = 'db51f22f76248b9f62c9421c9c9931b90843c37e'
    const api = 'basic_panchang/sunrise';
    const language = 'en';

    const auth = "Basic " + btoa(userId + ":" + apiKey);
    const data = { ...formData };

    try {
      const response = await fetch(`https://json.astrologyapi.com/v1/${api}`, {
        method: 'POST',
        headers: {
          'authorization': auth,
          'Content-Type': 'application/json',
          'Accept-Language': language
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
        setPanchangData(result);
      } else {
        setError('Failed to fetch Panchang details');
      }
    } catch (err) {
      setError('Error occurred while fetching Panchang');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      day: '',
      month: '',
      year: '',
      hour: '',
      min: '',
      lat: '',
      lon: '',
      tzone: '5.5'
    });
    setPanchangData(null);
  };

  return (
    <>
      <Link to='/'><div className='back'>Back to Home</div></Link>
    <div className="basic-panchang-container">
      {!panchangData ? (
        <form className="panchang-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Day</label>
            <input
              type="number"
              name="day"
              value={formData.day}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Month</label>
            <select name="month" value={formData.month} onChange={handleChange} required>
              {[...Array(12).keys()].map((m) => (
                <option key={m + 1} value={m + 1}>
                  {m + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Year</label>
            <select name="year" value={formData.year} onChange={handleChange} required>
              {[...Array(201).keys()].map((y) => (
                <option key={y + 1900} value={y + 1900}>
                  {y + 1900}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Hour</label>
            <input
              type="number"
              name="hour"
              value={formData.hour}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Minute</label>
            <input
              type="number"
              name="min"
              value={formData.min}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Latitude</label>
            <input
              placeholder='26.55 recommended for jaipur'
              type="number"
              step="any"
              name="lat"
              value={formData.lat}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Longitude</label>
            <input
              placeholder='75.49 recommended for jaipur'
              type="number"
              step="any"
              name="lon"
              value={formData.lon}
              onChange={handleChange}
              required
            />
          </div>
          <button className='generate' type="submit" disabled={loading}>
            {loading ? 'Generating...' : 'Generate Panchang'}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <>
          <PanchangTable panchangData={panchangData}/>
        </>
      )}
    </div>
    </>
    
  );
};

export default BasicPanchang;
