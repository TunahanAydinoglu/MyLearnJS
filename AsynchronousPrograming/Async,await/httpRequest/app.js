class Request{
    async get(url){//GET Request
     // return new Promise((resolve,reject)=>{
     //     fetch(url)
     //     .then(response => {return response.json()})
     //     .then(data => {resolve(data);})
     //     .catch(err => reject(err));
     // })      
 
         const response = await fetch(url); // Response Object
 
         const data = await response.json(); // Json Object
 
         return data;
 
     }
 
     async post(url,data){
        //  return new Promise((resolve,reject) => {
        //      fetch(url,{
        //          method: 'POST',
        //  body: JSON.stringify({data}),
        //  headers: {
        //    "Content-type": "application/json; charset=UTF-8"
        //  }
        //  })
        //  .then(response => response.json())
        //  .then(data => resolve(data))
        //  .catch(err => reject(err));
        //  })


        const response = await fetch (url,{
                     method: 'POST',
             body: JSON.stringify({data}),
             headers: {
               "Content-type": "application/json; charset=UTF-8"
             }}); //Response Object 

        data = await response.json();
        
        return data;




     }
     async put(url,data){
        //  return new Promise((resolve,reject)=> {
        //      fetch(url,{
        //          method: 'PUT',
        //          body: JSON.stringify({data}),
        //          headers: {
        //              "Content-type": "application/json; charset=UTF-8"
        //          }
        //      }).then(response => {
        //          return response.json();
        //      }).then(data => {
        //          return resolve(data);
        //      }).catch(err => reject(err));
        //  })

        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify({data}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        data = await response.json();
        return data;
     }
     async delete(url){
        //  return new Promise((resolve,reject)=>{
        //      fetch(url,{method:'DELETE'}) 
        //      .then(response => resolve("Veri silme işlemi başarılı..."))    
        //      .catch(err => reject(err));
        //  })

        const response = await fetch(url,{method:'DELETE'});
        return "Veri silme işlemi başarılı";
     }
 
 }
 
 const req = new Request();
 
 req.get("https://jsonplaceholder.typicode.com/albums")
 .then(data =>{
     console.log(data);
 }).catch(err => console.log(err));
 
 req.post("https://jsonplaceholder.typicode.com/albums",{
     userId:1,
     title:"başarılı ekleme"
 }).then(newAlbum => console.log(newAlbum))
 .catch(err => console.log(err));
 
 req.put("https://jsonplaceholder.typicode.com/albums/3",{
     userId:1,
     title:"başarılı güncelleme"
 }).then(updateAlbum => console.log(updateAlbum))
 .catch(err => console.log(err));
 
 req.delete("https://jsonplaceholder.typicode.com/albums/5")
 .then(sonuc => console.log(sonuc))
 .catch(err => console.log(err));