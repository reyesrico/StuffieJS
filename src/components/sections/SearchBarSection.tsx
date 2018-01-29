import * as React from 'react';
import { Link } from 'react-router-dom';
import FileConnection from '../../connection/FileConnection';

interface ITableDataProps {
    data: any;
}

class TableData extends React.Component<ITableDataProps, {}>{
    render() {
        return (
            <p>{this.props.data}</p>
        )
    }

}

interface ITableTitleProps {
    title: string
}

class TableTitle extends React.Component<ITableTitleProps, {}>{
    render() {
        return (
            <div className="tableTitle">
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

interface ISearchMatchProps {
    match: any,
    title: string
}

class SearchMatch extends React.Component<ISearchMatchProps, {}>{
    render() {
        return (
            <div className="searchMatch">
                <p><b>{this.props.title}</b>: {this.props.match}</p>
            </div>
        );
    }
}

interface ITableProps {
    searchTerm: any;
    data: any[];
    titles: any[]
}

class Table extends React.Component<ITableProps, {}>{

    addData(data: any, title: string) {
        // We need to get each row and store it in an array
        var rowsTitle = new Array();
        var search = [];
        var searchterm = this.props.searchTerm; // need this or it doesnt work
        var key = '';
        var index = 1;

        // Update row 
        data.forEach(function (row: any) {
            // row.title subtited by this.props.title
            if (title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1 &&
                row.tags.toLowerCase().indexOf(searchterm.toLowerCase()) === -1
            )
                return;

            // need to grab the correct match
            if (title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1) {
                var m = row.tags.toLowerCase().split(' ');
                for (var i in m)
                    if (m[i].indexOf(searchterm.toLowerCase()) !== -1)
                        key = m[i];
            } else {
                key = title.toLowerCase();
            }

            // rowsTitle pushing Table and Search info
            //rowsTitle.push(<TableTitle title={title} key={"tt" + index} />);
            if (searchterm != '')
                rowsTitle.push(<SearchMatch match={key} key={"sm" + index} title={title} />);
            //rowsTitle.push(<TableData data={row.tags} key={"td" + index} />);  //row.content            
            index++;
        }, title, index);

        // Then render all. Render using childs. Send them prop.title and prop.data
        var finalRows = [];
        if (searchterm != '') {
            finalRows = rowsTitle;
        }

        return finalRows;
    }

    render() {
        var finalRows = new Array();
        var titles = this.props.titles;
        var data = this.props.data;

        for (var i = 0; i < data.length; i++) {
            var elementData = this.addData(data[i], titles[i]);
            if (finalRows.length === 0) {
                finalRows = elementData;
            }
            else {
                finalRows.concat(elementData, finalRows);
            }
        }

        return (
            <div className="searchTable">
                {finalRows}
            </div>
        );

    }
}

interface ISearchProps {
    userInput: (value: any) => void;
    searchTerm: string;
}

class Search extends React.Component<ISearchProps, {}> {
    constructor(props: any) {
        super(props);
        this.filterList = this.filterList.bind(this);
    }

    filterList(event: any) {
        this.props.userInput(event.target.value);
    }

    render() {
        return (
            <input type="text"
                placeholder="Search Friends"
                value={this.props.searchTerm}
                onChange={this.filterList} autoFocus>
            </input>
        );
    }
}

interface ISearchBarState {
    filterText: string
}

class SearchBarSection extends React.Component<{}, ISearchBarState>{
    constructor(props: any) {
        super(props);
        this.state = {
            filterText: ''
        }
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(filter: any) {
        this.setState({
            filterText: filter
        });
    }

    render() {

        /*
            To add a new Search to a JSON file
            1. Add File Connection
            2. Add Objects to Data Array
            3. Add Title string to Titles Array.
        */
        var friends = new FileConnection('friends').Friends();
        var products = new FileConnection('products').Products();

        var DATA = new Array(friends, products);
        var TITLES = new Array("friends", "products");

        return (
            <div className="searchBar">
                <Search searchTerm={this.state.filterText} userInput={this.handleUserInput} />
                <Table searchTerm={this.state.filterText} data={DATA} titles={TITLES} />
            </div>
        );
    }
}

export default SearchBarSection;
