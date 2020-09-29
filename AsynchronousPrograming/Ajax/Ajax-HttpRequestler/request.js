
class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    //Get Request

    get(url,callback){
        this.xhr.open("GET",url); // bağlantıyı açtık
        
        // this.xhr.onload = function(){
        //     if(this.xhr.status === 200){
        //         // console.log(this);
        //         console.log(this.xhr.responseText);
        //     }
        // }.bind(this);

        this.xhr.onload = ()=>{
            
            const list = document.getElementById("employees");
            if(this.xhr.status === 200){
                // callback(null,this.xhr.responseText);
                const albums = JSON.parse(this.xhr.responseText);
                albums.forEach(function(album){
                    list.innerHTML += `
                        <tr>
                            <td>${album.id}</td>
                            <td>${album.userId}</td>
                            <td>${album.title}</td>
                        </tr>
                    `;
                });
            }else{
                callback("Bir hata oluştu",null)
            }
        };

        this.xhr.send();
    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json");//json verisi göndereceğimizi belirtiyoruz

        this.xhr.onload = ()=>{
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }else{
                callback("Bir hata oluştu",null);
            }
        };
        this.xhr.send(JSON.stringify(data));

    }

    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload= () =>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else{
                callback("Bir Put hatası oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    delete(url,callback){
        this.xhr.open("DELETE",url);

        this.xhr.onload = () => {

            if(this.xhr.status === 200){
                callback(null,"Veri silme işlemi tamamlandı...");
            }else{
                callback("Bir Delete hatası oluştu",null);
            }
        };

        this.xhr.send();
    }
}

const request = new Request();
const albums = request.get("https://jsonplaceholder.typicode.com/albums/",function(err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
});

request.post("https://jsonplaceholder.typicode.com/albums/",{userId:2,title:"Tunahan"},function(err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
});
data = {
    id:10,
    userId:143,
    title:"Tuna güncelledi"
}
request.put(`https://jsonplaceholder.typicode.com/albums/${data.id}`,data,function(err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
});

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
});