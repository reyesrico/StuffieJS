import * as React from 'react';
import { Link } from 'react-router-dom';
import FriendsModel from '../models/Friends';

class Friends extends React.Component {

    user_friends: any[];

    constructor(props: any) {
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
                <div className='friends'>
                    <div className='sectionTitle'>Friends</div>
                    No Friends Registered. <br />
                    Search for your friends.
                </div>
            );
        }
        else {
            return (
                <div className='friends'>
                    <div className='sectionTitle'>Friends</div>
                    <ul>
                        {
                            this.user_friends.map(function (friend) {
                            return <li key={friend.mail}><b>{friend.name}</b> ({friend.mail}) </li>;
                            })
                        }
                    </ul>
                </div>
            );
        }
    }
}

export default Friends;