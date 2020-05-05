function UI(){

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage= document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");
};

UI.prototype.changeUI = function(){
    //arayüz değiştirme

    this.outputImage.src = `images/${this.languageList.value}.png`;
    
    this.outputLanguage.textContent = this.languageList.options[this.languageList.selectedIndex].textContent;
}

UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}