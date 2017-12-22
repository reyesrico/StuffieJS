import FileConnection from '../connection/FileConnection.jsx';

class Users {
    constructor(){
        var conn = new FileConnection('users');
        this.users = conn.Users();
    }

    getUser(mail){
        var user;
        this.users.forEach(function(us){
            if(us.mail === mail){
                user = us;
            }
        });
        return user;
    }

    setUser(user){
        this.users.push(user);
    }
} 

export default Users;