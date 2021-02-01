console.log('hello our visitor ');

function getage() {


    var age = prompt('what is your age ?');
    console.log('age');
    if (age < 20) { message = 'cool'; }
    else if (age < 30) { message = 'Amazing'; }
    else if (age <= 40) {
        message = 'welcome handsome';
    }
    else {
        message = 'welcome';
    }
   return document.write('<h4>' + message + '</h4>');
}


getage();




var showimage =function (){


var order = prompt('what size do you want adult or kid?');

while (order !== 'adult' && order !== 'kid') {
    order = prompt('please write only adult or kid ')
}


var room = '';

if (order === 'adult') {
    room = '<img src="https://img.freepik.com/free-vector/people-wearing-autumn-clothes_23-2148322908.jpg?size=626&ext=jpg" />';
} else if (order === 'kid') {
    room = '<img src="https://i.pinimg.com/originals/cc/d9/96/ccd99629b369562bbcde500cf2f92530.jpg"  />';
}
document.write(room);

var message = "";
var i;
for (i = 0; i < 5; i++) {
    message = "Hello";
}
document.write(message);
}
showimage();
