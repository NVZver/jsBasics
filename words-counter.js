const text1 = `Once a wizard was told that he can be the greatest magician but there is a boy who will kill him.
The wizard wanted to prevent his death and kill the boy but he had been destroyed finally.
But if he paid less attention to the prophecy hi probably would stay alive.`;
 
function countWords(text){
    return text.split(' ').length;
}

console.log(`your saga includes ${countWords(text1)} words`);
