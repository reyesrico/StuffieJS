import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StuffieRoute from './StuffieRoute';

class Stuffie extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='stuffie'>
                <Switch>
                    <Route path="/" component={StuffieRoute} />
                </Switch>
            </div>
        );
    }
}

render(
    <BrowserRouter>    
        <Stuffie />
    </BrowserRouter>,
    document.getElementById('stuffie')
);
