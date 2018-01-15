import React from 'react';
import { Link } from 'react-router-dom';
import Tickets from '../Tickets.jsx';

class AppsSection extends React.Component {
    render() {
        return (
            <div className="apps">
                <ul>
                    <Link to='/tickets'>Tickets</Link>
                    <li>App 2</li>
                    <li>App 3</li>
                </ul>
            </div>
        );
    }
}

export default AppsSection;