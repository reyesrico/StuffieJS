import React from 'react';
import { Link } from 'react-router-dom';
import FriendsModel from '../models/Friends.jsx';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.user_friends = [];

        var username = localStorage.getItem('username');
        if (username !== undefined) {
            var friends = new FriendsModel(username);
            this.user_friends = friends.getFriends();
        }
    }

    render() {
        if (!(this.user_friends && this.user_friends.length)) {
            return (
                <div className="friends">
                    <div id="friends-title">Friends</div>
                    No Friends Registered. <br />
                    Search for your friends.
                </div>
            );
        }
        return (
            <div className="friends">
                <div id="friends-title">Friends</div>
                <ul>
                    {
                        this.user_friends.map(function (friend) {
                            return <li key={friend.mail}>{friend.mail}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Friends;