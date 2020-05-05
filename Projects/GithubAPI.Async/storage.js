class Storage{

    static getSearchedUsersFromStorage(){//Tüm Kullanıcı al

        let users;
        if(localStorage.getItem("searched") === null){
            users = [];
        }else{
            users = JSON.parse(localStorage.getItem("searched"));

        }
        return users;
    }
    static addSearchedUserToStorage(username){//Sorgulanmış kullanıcıları depolama
        let users = this.getSearchedUsersFromStorage();

        //IndexOf arrey içerinde aranan değer yoksa -1 sonucunu döner
        if(users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));
    }
    static clearAllSearchedUsersFromStorage(){

        localStorage.removeItem("searched");
    }
}