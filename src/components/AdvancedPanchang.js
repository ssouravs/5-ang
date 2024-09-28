import './advanced-panchang.css';
import { Link } from 'react-router-dom';
const AdvancedPanchang = () => {
    return (
        <div className="panchang-page">
            <h1 className='title'>Advanced Panchang</h1>
            <p className='coming'>Coming Sooon...</p>
            <Link to='/'><div className='back'>Back to Home</div></Link>
        </div>
    );
};

export default AdvancedPanchang;
