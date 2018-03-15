import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StuffieRoute from './StuffieRoute';
import Author from './Author';

class Stuffie extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='stuffie'>
                <Switch>
                    <Route exact path="/author" component={Author} />                    
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
