goalWord = ['m', 'o', 'u', 'n', 't']
guessWord = []
guesses = 0;
window.onload = function (){
    window.addEventListener("keydown", function(evt){
        //this.console.log(evt.code);
        let row = this.document.getElementsByClassName('tileRow')[guesses]
        if (guessWord.length < 5 && evt.keyCode > 64 && evt.keyCode < 91){
            guessWord.push(evt.key);
            row.children[guessWord.length-1].innerHTML = evt.key
        }
        if (evt.keyCode == 8){
            guessWord.pop()
            row.children[guessWord.length].innerHTML = ""
        }
        this.console.log(guessWord)
        if (evt.keyCode == 13 && guessWord.length == 5){
            for (i = 0; i < 5; i++){
                for (j = 0; j < 5; j++){
                    if (guessWord[i] == goalWord[j])
                        row.children[i].style.backgroundColor = "yellow";
                }
            }

            for (i = 0; i < guessWord.length; i++){
                this.console.log(`${guessWord[i]} : ${goalWord[i]}`)
                if (guessWord[i] == goalWord[i]){
                    row.children[i].style.backgroundColor = "green";
                    this.console.log(`${guessWord[i]} is correct at position ${i}`)
                }
            }
            guesses += 1
            guessWord = []
        }

    })
}