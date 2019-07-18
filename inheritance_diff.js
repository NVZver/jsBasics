const Animal = {
    name: 'animal',
    getName: function(){
        return this.name;
    },
    say: function(){
        return this.saying || 'nothing to say...';
    }
};

const cat = Object.create(Animal);
cat.name = 'Masya';
cat.saying = 'Myaaaa';
cat.getName = function(){
    return `My name is ${this.name}. ${this.say()}`;
}
console.log(cat.getName());
