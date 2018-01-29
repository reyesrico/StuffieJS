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
    data: any;
    title: string
}

class Table extends React.Component<ITableProps, {}>{
    render() {
        // We need to get each row and store it in an array
        var rowsTitle = new Array();
        var search = [];
        var searchterm = this.props.searchTerm; // need this or it doesnt work
        var key = '';
        var title = this.props.title;
        var index = 1;

        // Update row 
        this.props.data.forEach(function (row: any) {
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
                rowsTitle.push(<SearchMatch match={key} key={"sm" + index} title={title}/>);
            //rowsTitle.push(<TableData data={row.tags} key={"td" + index} />);  //row.content            
            index++;
        }, title, index);

        // Then render all. Render using childs. Send them prop.title and prop.data
        var finalRows = [];
        if (searchterm != '') {
            finalRows = rowsTitle;
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

class SearchBar extends React.Component<{}, ISearchBarState>{
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
        var conn = new FileConnection('friends');
        var friends = conn.Friends();

        return (
            <div className="searchBar">
                <Search searchTerm={this.state.filterText} userInput={this.handleUserInput} />
                <Table searchTerm={this.state.filterText} data={friends} title="friends" />
            </div>
        );
    }
}

export default SearchBar;
