import FileConnection from '../connection/FileConnection';

class Users {
    users: any;

    constructor(){
        var conn = new FileConnection('users');
        this.users = conn.Users();
    }

    getUser(mail: string){
        var user;
        this.users.forEach(function(us: any){
            if(us.mail === mail){
                user = us;
            }
        });
        return user;
    }

    setUser(user: any){
        this.users.push(user);
    }
} 

export default Users;