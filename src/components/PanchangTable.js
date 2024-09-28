import React from 'react';
import './panchang-table.css';

const PanchangTable = ({ panchangData }) => {
  return (
    <div className="panchang-table-container">
      <h2>Basic Panchang Details</h2>
      <table className="panchang-table">
        <tbody>
          <tr>
            <td>Day</td>
            <td>{panchangData.day}</td>
          </tr>
          <tr>
            <td>Tithi</td>
            <td>{panchangData.tithi}</td>
          </tr>
          <tr>
            <td>Nakshatra</td>
            <td>{panchangData.nakshatra}</td>
          </tr>
          <tr>
            <td>Yog</td>
            <td>{panchangData.yog}</td>
          </tr>
          <tr>
            <td>Karan</td>
            <td>{panchangData.karan}</td>
          </tr>
          <tr>
            <td>Sunrise</td>
            <td>{panchangData.sunrise}</td>
          </tr>
          <tr>
            <td>Sunset</td>
            <td>{panchangData.sunset}</td>
          </tr>
          <tr>
            <td>Vedic Sunrise</td>
            <td>{panchangData.vedic_sunrise}</td>
          </tr>
          <tr>
            <td>Vedic Sunset</td>
            <td>{panchangData.vedic_sunset}</td>
          </tr>
        </tbody>
      </table>
      <button className="reset-btn" onClick={() => window.location.reload()}>
        Generate Another Panchang
      </button>
    </div>
  );
};

export default PanchangTable;
