function Type(){
    var txtarea=document.getElementById("txt");
    var character=document.getElementById("tot");
    var remCharacter=document.getElementById("rem");
    var max=50;
    txtarea.addEventListener("input",function(){
        var textLength=txtarea.value.length;
        character.innerHTML="Total Characters : "+textLength;
        remCharacter.innerHTML="Remaining : "+(max-textLength);
        if(textLength>=max){
            txtarea.value=txtarea.value.substring(0,max);
            character.innerHTML="Total Characters : "+50;
            remCharacter.innerHTML="Remaining : "+0;

        }
    })
}