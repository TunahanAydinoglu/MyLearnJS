class Storage{

    static addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        
        localStorage.setItem("films",JSON.stringify(films));
    
    }
    
    static getFilmsFromStorage(){
        let films;    
        if(localStorage.getItem("films")=== null){
            films = [];
        }else{
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }
    static deleteFilmStorage(filmTitle){
        let films = this.getFilmsFromStorage();
    
        films.forEach(function(film,index){
            if(film.title === filmTitle){
                films.splice(index,1);//indexten itibaren 1 veri sil 
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }
}
