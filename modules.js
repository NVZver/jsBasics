const keyboard_maker = function(){
    type = 'mechanical';
    return {
        getType: function(){
            console.log('the private type from closure: ', type);
            console.log('the private type from scope: ', this.type);
            return type;
        }
    }
}

const newKeyboard = keyboard_maker();
console.log(newKeyboard.getType());
newKeyboard.type = 'membran';
console.log(newKeyboard);
console.log(newKeyboard.getType());
