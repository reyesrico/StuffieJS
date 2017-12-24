import FileConnection from '../connection/FileConnection.jsx';
import Users from './Users.jsx';

class Friends {
    constructor(mail) {
        var conn = new FileConnection('friends');
        this.friends = conn.Friends();
        var users = new Users();
        this.user = users.getUser(mail);
    }

    getFriends() {
        var user_friends = [];
        var friends = [];
        var um = this.user.mail;
        this.friends.forEach(function (obj) {
            if (obj.mail === um) {
                user_friends = obj.friends;
            }
        });

        var us = new Users();
        user_friends.forEach(function (friend) {
            friends.push(us.getUser(friend.mail));
        });
        return friends;
    }
}

export default Friends;