var usersFile = require('../data/users.json');

class FileConnection{

    constructor(object_name) {        
        if(object_name === 'users'){
            this.file = usersFile;            
        }
        else{
            this.file = null;
        }
    }

    Users() {
        return this.file.users;
    }
}

export default FileConnection;