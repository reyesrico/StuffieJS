import FileConnection from '../connection/FileConnection';

interface User {
    mail: string,
    pass: string,
    name: string
}

class Users {
    users: any;
    user: User;

    constructor(){
        var conn = new FileConnection('users');
        this.users = conn.Users();
    }

    getUser(mail: string){
        var user_obj = this.user;
        this.users.forEach(function(us: any){
            if(us.mail === mail){
                user_obj = us;
            }
        }, user_obj);
        return user_obj;
    }

    setUser(user: any){
        this.users.push(user);
    }
} 

export default Users;