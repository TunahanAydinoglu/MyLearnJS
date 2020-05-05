function Translate(word,language){

    this.apiKey = "trnsl.1.1.20200505T000546Z.7beed68f612ccb94.b092f9a328414d50d18ab57a928fd4e3d9680062";
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    //Ajax işlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = function(){
        if(this.xhr.status == 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            
            callback(null,text);
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
        }else{
            callback("Birr hata oluştu....",null);
        }


    }.bind(this);// yada arrow func kullanabiliriz

    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord,newLang){
    this.word = newWord;
    this.language = newLang;
};