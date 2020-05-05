//Prototype,Ajax,Callback

addEventListener();

function addEventListener(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    document.getElementById("language").onchange = function(){
        //arayüz işlemleri
        ui.changeUI();
    }
}
let word = document.getElementById("word");
let lang = document.getElementById("language");

const translate = new Translate(word.value,lang.value);
const ui = new UI();

function translateWord(e){

    translate.changeParameters(word.value,lang.value);

    translate.translateWord(function(err,response){
        if(err){
            console.log(err);
        }else{
            ui.displayTranslate(response);
        }
    });


    e.preventDefault();
};

