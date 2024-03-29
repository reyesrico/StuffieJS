import * as React from 'react';
import { Link } from 'react-router-dom';

class AppsSection extends React.Component {
    render() {
        return (
            <div className="apps">
                <div className='appsItem'><Link to='/tickets'>Tickets</Link></div>
                <div className='appsItem'><Link to='/report'>Report</Link></div>
                <div className='appsItem'><Link to='/chat'>Chat</Link></div>
                <div className='appsItem'><Link to='/graphics'>Graphics</Link></div>  
                <div className='appsItem'><Link to='/test'>Test</Link></div>              
            </div>
        );
    }
}

export default AppsSection;