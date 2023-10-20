document.write("<br >"+'Hello javascript'+ "<br>");
document.getElementById('demo').innerHTML='Happy raksha Bandhan to you all students' + "<br>";
// a=16;
// b='16';
// document.write(a===b);

// a=146;
// b=45;
// // if else [else if]
// if (a>b){
//     document.write('a is greater than b')
//     document.getElementById('demo').innerHTML='a have greater value' + a;
// } else{
//     document.write("b is greater than a");
// }

// prompt

// c=prompt('Enter any value1: ');
// d=prompt('Enter any value2: ');

// if (c > d){ 
//     console.log('c is greater than d','c value is',c)
// } else if(c == d){
//     console.log('d and c are equal','values is',d,'c= ',c)
// }
// else if(c < 0){console.log('c is less than 0',c,'value of c') }
// else {console.log('d is greater than c','d value is',d)}

// e=prompt('Enter any value E: ');

// if (e >= 0){
//     if(e==0){
//         console.log('value is 0',e)
//     }

//     else{
//         console.log('value is +ve',e)
//     }
// }else{
//     console.log("value is -ve",e)
// }


// switch statement
// switch (cond/variable){
//     case 1:
//         body
//         break
//     case 2:
//         body
//         break
//     case 3:
//         body
//         break
//     case 4:
//         body
//         break
//     default:
//         stat
//         break
// }

// let day='';

// switch('Monday'){
//     case 'Tuesday':
//         day='Its Tuesday';
//         console.log(day)
//         break
//     case 'Wednesday':
//             day='Its Wednesday';
//             console.log(day)
//             break
    // case 'Monday':
    //     day='Its Monday';
    //     console.log(day)
    //     break
//     case 'Friday':
//         day='Its Friday';
//         console.log(day)
//         break
//     default:
//         day='No days';
//         console.log(day)
// }
// let d='';
// switch(new Date().getDay()){
//     case 0:
//         d='Its sunday';
//         console.log(d)
//         break
//     case 1:
//         d='Its Monday';
//         console.log(d)
//         break
//     default:
//         d='No days';
//         console.log(d)

// }
// create an simple calculator with min 3-4 operations?

// loops
// for [for of, for in,forEach], while- [do while] loop
// variable,condition,increment
// for(let a;a<0;a++){

// }
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// console.log(cars.length)
let text = "";
for (let i = 0; i < cars.length; i++) {
  text = cars[i] ;
  console.log(text)
}

var num=[23,34,45,67,80,56];
for(let r=0;r < num.length;r++){
    if (num[r]%2==0){
        console.log('even numbers are: ',num[r]);
    }else{
        console.log('odd numbers are: ',num[r])
    }
}

// for in and for of

let a=['gaurav','riddhi','nishant'];
 var ob={name:'ruhi',age:23,role:'Dr.'};
// for (let x in ob){
    // console.log(a[x])
//     console.log(x);;
//     // document.write(ob[x])
//     // document.write(a[x] +"<br>")
// }
// for(let f of ob){
//     // document.write(ob[j] +"<br>")
//     // console.log(ob[b])
//     console.log(ob[f]);

// }

// s='Javascript';

// for(let i of s){
//     console.log(i);
// }

// while loop--infinite/true loop
// syntax: while(condition){}
// i=0;
// while(i<=10){
//     console.log(i)
//     i++
// }

// do -while loop
// do{
//     code block
// }while();

// i=0;
// do{
//     console.log(i)
//     i++
// }while(i>10);
// break, continue

// Data Structures
// let ar=['riddhi','gaurav','anisha','nishant'];
// let ar=new Array('riddhi','gaurav','anisha','nishant')
// console.log(ar)
// for(var w=0;w<=4;w++){
//     console.log(ar[w]);

// }
// console.log('data Structures')
// var inn=new Array(3);

// for(var g=0;g<3;g++){
//     inn[g]=prompt('Enter any values for array: ')
//     // inn=g;
//     // console.log(inn[g]);
// }
// console.log(inn)

// for(var w=0;w<3;w++){
//     console.log(inn[w]);

// }
// fetching data in array
let ar=['riddhi','gaurav','anisha','nishant'];
console.log(ar)
ar1=[23,34,45,[12,11]]
console.log(ar[1])
console.log(ar1[1])
console.log(ar1[3][1])
// replacing of data
ar1[1]=233;
console.log(ar1)
// deleting of data
delete ar[2];
console.log(ar)
// functions of array
ar.pop();
console.log(ar)
ar.push('Nikalous')
ar.push('Nikalous')
console.log(ar)
// shift/unshift , concat/join
var p=['sanjay','leela','bhnasali'];
// slice(start,end)
b=p.slice(1,3);
console.log(b);

// splice(index,how many,'new vlues')

// p.splice(2,0,'Neha','toni','kakkar');
p.splice(2,3,'Neha','toni','Neha');
console.log(p)
// indexOf('search item',start)
// var i=p.indexOf('sanjay');
var i=p.indexOf('Neha');
console.log(i)

// lastIndexOf(value,ending)
g=p.lastIndexOf('Neha')
console.log(g)
// forEach()
// syntax: forEach(function(){
//     statement
// })
noah=['nick','nicklaus','lister','raphala'];
console.log(noah)
// noah.forEach(function(value,index){
//     console.log(value, index)
// })
noah.forEach(loop);
function loop(value,index){
    console.log(value, index)

}

my_fav_char={leads:['nick','Jenna','noah','leaon']
              ,age:22,status:'Good'};
console.log(my_fav_char);
// do notation
console.log(my_fav_char.leads);
console.log(my_fav_char.age);
// indexing
console.log(my_fav_char['age']);
console.log(my_fav_char['leads'][2]);

// var objj={fname:'Vincet',role:'necktie',
// expertise:function(){
//     return 'barbed wire'
// } };
var objj={fname:'Vincet',role:'necktie',
expertise:function(){
    return 'barbed wire'
},
    full_descp:function(){
        return this.fname+' '+this.role
    } };
console.log(objj);
console.log(objj.expertise());
console.log(objj.full_descp());
// new Object()
// array of object,object of object,
// object of array,array of array
// fetching + replacing of data
// String methods

var s='Javascript is Forgiving language';
// var w=s.length;
console.log(s);
// var w=s.toLowerCase();
// var w=s.toUpperCase();
// var w=s.replace('is','heyy');
// var w=s.split('/');
// var w=s.substr(9,13);
var w=s.repeat(2);
console.log(w);
// Date Methods
// get ad set methods
var now=new Date();
console.log(now);
// console.log(now.toDateString());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
// setter methods for date
now.setDate(29);
console.log(now);

// functions
// syntax:
// function func(){

// }
// func();
function amore(){
    console.log('Hello Dolcezza')
}
amore();
















