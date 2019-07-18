/* 
// Base usage of RegEx
const str = 'I love JavaScript!';
const regex = /lo/;
console.log(str.search(regex));
*/


// Classes and symbols
const str_phone = '+234 (555) 333-445-23';
const regex_digit = /\d/; // [0 - 9]
const regex_digit_global = /\d/g;
//console.log(str_phone.match(regex_digit));
//console.log(str_phone.match(regex_digit_global));

const regex_b = /\bJava\b/i;
// console.log('Hello, Java!'.match(regex_b));
// console.log('Hello, Javascript!'.match(regex_b));

const regex_time = /[0-2][0-9][:-][0-5][0-9]/;
const str_time = 'it is 21-59';
// console.log(str_time.match(regex_time));


const regex_quantifer = /\d{1,}/g;
const regex_quantifer_simple = /\d+/g;
// console.log(str_phone.match(regex_quantifer));
// console.log(str_phone.match(regex_quantifer_simple));

const regex_question_mark = /colou?r/gi;
// console.log('US: Color, UK: colour'.match(regex_question_mark));


const regex_none_and_more_1 = /\d0{0,}/g;
const regex_none_and_more_2 = /\d0*/g;
const str_none_and_more = '100 10 1';
// console.log(str_none_and_more.match(regex_none_and_more_1));
// console.log(str_none_and_more.match(regex_none_and_more_2));

const str_multi_dots = 'hey....how.. are you?......';
const regex_multi_dots = /\.{3,}/g;
// console.log(str_multi_dots.match(regex_multi_dots));

const regex_exept_0 = /-?\d+(\.\d+)?/g;
// console.log('-1.5 0 2 34.234'.match(regex_exept_0));

const str_html_h1 = `<h1>Hello world!</h1>`;
const regex_group = /<(.*?)>/;
const regex_group_1 = /<.*?>(.*)<\/.*?>/;
const regex_group_g = /<(.*?)>/g;
// console.log(str_html_h1.match(regex_group_1));
// console.log(str_html_h1.match(regex_group_g));
// console.log(regex_group_g.exec(str_html_h1));

const str_html_class = `<span class="my-super-class"></span>`;
const regex_get_class = /<(([a-z]+)\s*([^>]*))>/;
console.log(str_html_class.match(regex_get_class));