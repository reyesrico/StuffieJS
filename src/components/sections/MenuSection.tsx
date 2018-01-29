import * as React from 'react';
import { Link } from 'react-router-dom';
import TextField from '../web_objects/TextField';
import SearchBarSection from './SearchBarSection';

interface IMenuSectionProps {
    user: any;
}

class MenuSection extends React.Component<IMenuSectionProps, {}> {
    constructor(props: any) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event: any){

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
                <hr />
                <div className='searchBarGroup'>
                <SearchBarSection />
                </div>
            </div>
        );
    }
}

export default MenuSection;
