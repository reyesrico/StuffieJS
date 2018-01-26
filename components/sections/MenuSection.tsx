import * as React from 'react';
import { Link } from 'react-router-dom';

interface IMenuSectionProps {
    user: any;
}

class MenuSection extends React.Component<IMenuSectionProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='barBlock barMenu'>
                <div className='menuName'>{this.props.user.name} Stuff</div>
                <div className='menuMail'>{this.props.user.mail}</div>
                <hr />
                <div className='menu'>
                    <div className='menuItem'><Link to='/'>Feed</Link></div>
                    <div className='menuItem'><Link to='/friends'>Friends</Link></div>
                    <div className='menuItem'><Link to='/products'>Products</Link></div>
                </div>
            </div>
        );
    }
}

export default MenuSection;
