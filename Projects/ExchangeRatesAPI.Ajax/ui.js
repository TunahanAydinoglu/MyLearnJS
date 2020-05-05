class UI{
    constructor(firstCur,secondCur){
        this.firstCur = firstCur;
        this.secondCur = secondCur;

        this.firstOutput = document.getElementById("outputFirst");
        this.secondOutput = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }

changeFirst(){
    this.firstOutput.textContent = this.firstCur.options[this.firstCur.selectedIndex].textContent;
}
changeSecond(){
    this.secondOutput.textContent = this.secondCur.options[this.secondCur.selectedIndex].textContent;
}
displayResult(result){
    this.outputResult.value = result;
}
}