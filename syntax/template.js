// Template Literal
// ''대신 ~아래에 있는 ``를 사용하면
// \n을 사용하지 않고 enter만 쳐서 실제 출력을 줄바꿈할 수 있다.
// 또한 변수를 대입할 때, ${변수}를 이용해서 손쉽게 변수도 넣을 수 있다.              

var name = 'kimsangyeob';
var letter = `rld Wide Web, ${name}

alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices. ${name}

JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, function`;

console.log(letter);