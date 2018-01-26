import FileConnection from '../connection/FileConnection';
import Users from './Users';

class Friends {

    user: any;
    friends: any;

    constructor(mail: string) {
        var conn = new FileConnection('friends');
        this.friends = conn.Friends();
        var users = new Users();
        this.user = users.getUser(mail);
    }

    getFriends() {
        var user_friends: any[];
        var friends = new Array();
        var um = this.user.mail;
        this.friends.forEach(function (obj: any) {
            if (obj.mail === um) {
                user_friends = obj.friends;
            }
        });

        var us = new Users();
        user_friends.forEach(function (friend: any) {
            friends.push(us.getUser(friend.mail));
        });
        return friends;
    }
}

export default Friends;