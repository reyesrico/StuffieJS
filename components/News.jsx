import React from 'react';
var newsFile = require('../data/news.json');

class News extends React.Component {
    constructor(props) {
        super(props);
        this.news = newsFile;
    }

    render() {
        if(this.news && this.news.news){
            return (
                <div className='stuffieNews'>
                    {this.news.news}
                </div>
            );    
        }
    }
}

export default News;