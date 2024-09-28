import './feature-section.css';
import { useNavigate } from 'react-router-dom';

const FeatureSection = () => {
    const navigate = useNavigate();

    return (
        <div className="feature-section">
            <div className="panchang-box" onClick={() => navigate('/basic')}>
                <h2>Basic Panchang</h2>
                <p>Explore the basic Panchang details.</p>
            </div>
            <div className="panchang-box" onClick={() => navigate('/advanced')}>
                <h2>Advanced Panchang</h2>
                <p>Explore advanced Panchang information.</p>
            </div>
        </div>
    );
};

export default FeatureSection;
