import { useNavigate } from 'react-router-dom';
import './text-section.css';

const TextSection = () => {
    const navigate = useNavigate();

    const handleExplore = () => {
        // Navigate to BasicPanchang page
        navigate('/basic');
    };

    return (
        <div className="text-section-container">
            <h1 className="text-title">Unlock Your Day with Panchang</h1>
            <p className="text">Discover the five key elements of Vedic astrology—Nakshatra, 
                Yoga, Karan, Tithi, and Vaar—calculated from precise planetary positions. 
                Gain insights into your day and the cosmic influences shaping it, all in one place.
            </p>
            <button className="explore-btn" onClick={handleExplore}>Explore</button>
        </div>
    );
};

export default TextSection;
