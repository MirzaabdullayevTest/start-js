// console.log('Hello world');  
// var str = 'Hello world from str'  /* variable = var o'zgaruvchi */
// var str2 = ' Good Bye from str2'
// var words = str + str2 + 22
// console.log(typeof words);
// alert(words + 222);
// document.write('<h1 style="color: red"> Hello world </h1>')

// var num = 14
// var num2 = 36
// var sum = num - num2
// console.log(sum);

/* 
String = "0_+1assd"  // "" / '' / ``
Number = 02111 // -5 0.5  -5.0004
Boolean = true false
Object = { name: 'Javlonbek', surname: 'Mirzaabdullayev' } 
Array = [1, 2, 'Tom', true, false, -5]
Undefined = Xato tushunmadim
Null = Xech nima yo'q bo'shliq
*/
// var val = prompt('What is your name?')  // klientdan qiymat olish
// document.write(val)
// console.log(val);
// alert(val);

// var sum = 5555 + +'5'
// document.write(sum)
// document.write(typeof sum)

// var num1 = +prompt('Birinchi sonni kiriting: ')  // 5  // o'zi turi string // agar + qo'ysak number ga aylanadi
// var num2 = +prompt('Ikkinchi sonni kiriting: ')  // 6
// var sum = num1 + num2
// alert(sum)

/* 
 
<
>
<=
>=
== // mi?  // boolean
=== // mi?  // qat'iy
!=  // emas 5 != 5 false // 5 teng emasmi 5 ga yo'q (false) 5 5ga teng
!==  // emas 5 !== '5' true // 5 number teng emasmi 5 string ga ha(true) teng emas

*/

// kasr maxrajida 0 yozish mumkin emas //  0 / 12
// var num1 = +prompt('1 chi sonni kiriting: turi number')
// var num2 = +prompt('2 chi sonni kiriting: turi number')
// // var res = num1 / num2  // * - / +
// if (num2 === 0) {
//     /* demak num2 0 ga teng */
//     console.log('Kasr maxrajiga 0 kiritish mumkin emas!');
// } else if (num2 === NaN) {
//     /* num2 0 ga teng emas */
//     console.log('NaN kiritish mumkin emas');
// } else {
//     console.log(num1 / num2);
// }

// var firstNumber = +prompt('1 son') // 4
// var secondNumber = +prompt('2 son')  // 2
// var typeOperator = prompt('Amalni kiriting: / * - +') // '/'  )
// var res = 0

// if (typeOperator === '/') {
//     if (secondNumber === 0) {
//         alert('Maxrajga  nol kiritish mumkin emas!');
//     }
//     else {
//         res = firstNumber / secondNumber
//     }
// } else if (typeOperator === '*') {
//     res = firstNumber * secondNumber
// } else if (typeOperator === '+') {
//     res = firstNumber + secondNumber
// } else if (typeOperator === '-') {
//     res = firstNumber - secondNumber
// } else {
//     alert('Siz kiritgan amal mavjud emas');
//     res = 'Siz kiritgan amal mavjud emas'
// }

// document.write('<h1>' + firstNumber + typeOperator + secondNumber + ' = ' + res + '</h1>')

/* kolkulyator amallari + - * / va maxraj nol bo'lmasligi kerak */

/* =============================== && || ! */
// var a = 2  // b < a < c  || c < a < b
// var b = 3  // a < b < c  || c < b < a
// var c = 10

// if (b < a && a < c || c < a && a < b){

//     console.log('O`rta son ' + a);

// }else if(a < b && b < c || c < b && b < a){

//     console.log('O`rta son ' + b);

// }else{

//     console.log('O`rta son ' + c);

// }

// var a = +prompt('1- sonni kiriting: ')  //    a < b < c  || c < b < a
// var b = +prompt('2- sonni kiriting: ')  // 
// var c = +prompt('3- sonni kiriting: ')  //   7 < 8 < 60

// if (b < a && c < a) {
//     if (b < c) {
//         console.log('a=' + a + 'eng katta' + 'b=' + b + ' eng kichkina');
//     } else {
//         console.log('a=' + a + 'eng katta' + 'c=' + c + ' eng kichkina');
//     }
// } else if (a < b && c < b) {
//     if (a < c) {
//         console.log('b=' + b + 'eng katta' + 'a=' + a + ' eng kichkina');
//     } else {
//         console.log('b=' + b + 'eng katta' + 'c=' + c + ' eng kichkina');
//     }
// } else {
//     if (a < b) {
//         console.log('c=' + c + 'eng katta' + 'a=' + a + ' eng kichkina');
//     } else {
//         console.log('c=' + c + 'eng katta' + 'b=' + b + ' eng kichkina');
//     }
// }

// if (a < b && b < c || c < b && b < a) {
//     console.log('o`rta son: ' + b);
// } else if (b < a && a < c || c < a && a < b) {
//     console.log('o`rta son: ' + a);
// } else {
//     console.log('o`rta son: ' + c);
// }

/* ================= qoldiq */
// var a = 5
// var b = 4
// var c = null

// c = a % b  // 5 % 4

// console.log(c);

/* =================== ikrement dikrement */
// var a = 5
// a = 9
// a = 'a'
// console.log(a);
// a++ // a + 1  // inkrement
// ++a
// console.log(a);
// a++ //  1 qo'shishga tayyorlanish
// console.log(a);   
// console.log(++a);

// var b = 0
// console.log(b--);
// console.log(--b);

// ============
// var year = 2025
// var name = 'Ford'
// var currentYear = 2022
// var age = currentYear - year

// // if (age >= 20) {
// //     console.log('Xaydash taqiqlanadi, moshina yoshi: ' + age);
// // } else {
// //     console.log('Xaydash mumkin yosh: ' + age);
// // }

// // ternarniy usuli
// age >= 20
//     ? console.log('Xaydash taqiqlanadi, moshina yoshi: ' + age)
//     : age < 0 ? console.log('Mavjud bo`lmagan moshina: ' + age)
//         : console.log('Xaydash mumkin yosh: ' + age);

// var weekDay = 'Shanba'

// if (weekDay === 'Dushanba' || weekDay === 'Seshanba' || weekDay === 'Chorshanba' || weekDay === 'Payshanba' || weekDay === 'Juma') {
//     console.log('Ish kuni');
// } else if (weekDay === 'Yakshanba' || weekDay === 'Shanba') {
//     console.log('Dam olish kuni');
// } else {
//     console.log('Bunday hafta kuni yoq');
// }

// var weekDay = 'Seshanba'
// switch (weekDay) {
//     case 'Dushanba':  // case ===
//     case "Seshanba":
//     case 'Chorshanba':
//     case 'Payshanba':
//     case 'Juma':
//         console.log('Ish kuni');
//         break
//     case "Shanba":
//     case "Yakshanba":
//         console.log('Dam olish kuni');
//         break
//     default:
//         console.log('Bunday hafta kuni yoq');
// }

// ================================== Function // ishchi qachon siz chaqirsez shun kelib ishliydi bo'masa ishlamiydi

// var a = 5
// var b = 9
// var c = null

// c = a % b
// console.log(c);

// var d = 10
// var h = 6
// var o = null

// o = d % h
// console.log(o);

// var j = 11
// var k = 4
// var q = null

// q = j % k
// console.log(q);

// j = 20
// k = 9
// q = null

// q = j % k
// console.log(q);

// console.log('Hello world tashqari');

// res(5, 6, 8)

// var res = function (b, a, c) {  // anonim
//     // console.log('Hello world');
//     console.log(c);
//     c = b * a
//     console.log('qoldiq: ' + c);
// }
// calc(8, 0, null)
// console.log('Hello ');
// function calc(b, a, c) {
//     // console.log('Hello world');
//     c = prompt('C ga xabar yozing')
//     console.log(c);
//     c = b * a
//     console.log('qoldiq: ' + c);
// }

// res()
// res()
// res()
// res()
// res(1, 5, null)
// res(4, 2, null)
// res(10, 2, 0)
// calc(8, 0 , null)
// var personYear = +prompt('Nechanchi yilda tug`ilgansiz? ') // number
// var currentYear = +prompt('Qaysi yilda turganingizni yozing: ')
// var age = null
// function calcAge(odamYili, HozirgiYil, yosh) {
//     return yosh = HozirgiYil - odamYili
// }
// var asd = calcAge(personYear, currentYear, age)
// console.log('Yoshingiz: ' + asd);
// calcAge(age)

// color = 'red'
