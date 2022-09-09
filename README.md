# Beginners Javascript

# メモ

개발자는 게을러야한다.
중복사용할것은 따로 값을줘서 불러주기.
`const` , `let`  
`boolean= true,false,null`  
`undefined` , `null`  
`array [ ] 0,1,2,3,~~ `
`000.push("iiii")` 추가  
function 에 argument인자 받기 복수가능  
항상 const  
가끔 let

```sh
const toBuy = ["potato", "tomato","pizza"];
console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("one")
```

```sh
function plus(natto,kimchi){
    console.log(natto + kimchi);
}
// natto 5 ,kimchi 10
plus(5, 10);
plus(3.149572, 1131);
```

```sh
const calculator =  {

    plus: function (a,b){
        console.log(a+b);
    }
    minus: function (a,b){
        console.log(a-b);
    }
    times: function (a,b){
        console.log(a*b);
    }
    divide: function (a,b){
        console.log(a/b);
    }
    power: function (a,b){
        console.log(a ** b);
    }
}
calculator.plus(1,1);
calculator.minus(2,2);
calculator.times(3,3);
calculator.divide(4,4);
calculator.power(5,5);

```

```sh
const calculator = {
    plus: function(a,b){
        return a + b ;
        //return >>> x~
        리턴이후에는 실행x
    },
    minus: function(a,b){
        return a - b ;
    },
    times: function(a,b){
        return a * b ;
    },
    divide: function(a,b){
        return a / b ;
    },
    power: function(a,b){
        return a ** b ;
    },
};
const x = 2;
const y = 3;
const plusResult = calculator.plus(x,y);
const plusResult = calculator.minus(x,y);
const plusResult = calculator.times(x,y);
const plusResult = calculator.divide(x,y);
const plusResult = calculator.power(x,y);
```

```sh
console.log(typeof age);
parseInt ///use

console.log(typeof "15", typeof parseInt("15"));
```

function은 내부에서 외부로 실행! in > out

isNaN

```sh
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age <0 ){
    consol.log("Please write a real positive number ");
} else if (age < 18) {
    consol.log("you are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink")
} else if (age > 50 && age <= 80) {
    console.log("you should exercise");
} else if (age === 100) {
    console.log("wow you are wise");
} else if (age > 80) {
    console.log("you can do whatever you want.");
}
```

&& 둘다 ture two only ture== ture
|| 하나만 ture면 ture

# メモ帳

`document.title `
웹페이지 콘솔에서치면 속성나옴
`document.title = "hello"`
값 변경할수있음. 새로운값 지정가능  
javascript가 이미 html에 연결되어있다는 사실.  
다른것도 가능

`title.innerText = "Got you!";`
js 파일에서 값 주면 js가 변경시킬수있다.  
`console.log(title);`
`console.dir(title);`
속성보기 웹 개발자도구 검사에서.  
자바스크립트에서 html 요소를 가져올수있음.  
그리고 변경할수도있음.

`const hellos = document.getElementsByClassName("hellos");`
이런방법도있음.

`const hellos = document.querySelector(".hellos h1");`
querySelector는 element를 css방식으로 검색할수있음.  
단. 첫번째 엘리먼트 요소만 가져온대 중복 x  
`const hellos = document.querySelectorAll(".hellos h1");`
중복 가능 o

結果
`const hellos = document.querySelector("#hello");`
`const title = document.getElementsById("hello");`
같음

`const hellos = document.querySelector("#hello form");`

```sh

const title = document.getElementById("title");
const title = document.querySelector("div.hello:first-child h1");
console.log(title);
title.innerText = "Hello";
console.dir(title);

const hellos = document.getElementsByClassName("hellos");
const hellos = document.quesrySelector(".hellos h1");

title.innerText = "Got you!";
console.log(title);
console.dir(title);
console.log(title.id);
console.log(title.className);
console.log(hellos);
```

js로 title(예) 의 object내부를보면 정보 많음 가져와서 변경할수도있음.  
이번엔 event listener, 클릭이벤트해봄  
즉 js로 이런것들이 가능하다 ↓

```sh

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("title was clicked!");
}
title.addEventListener("click", handleTitleClick);

handleTitleClick();

------------------------------ --------------html
  <div class="hello">
            <h1>Grab me 1!</h1>
        </div>
```

```sh

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

```

이벤트가 엄청 많다 와이파이도 가능. javascrtip로 안되는것이 없네 ^^

# メモ帳

```sh
function handleTitleClick() {
    if (h1.style.color === "blue") {
        h1.style.color = "red";
    } else {
        h1.style.color = "blue";
    }
}
```

간단한 if문

```sh
function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "red";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
```

좀더 알아보기 쉬워졌다.  
`transition: color 0.5s ease-in-out;`
서서히~

`DOMTokenList.remove(token1[, token2[, ...tokenN]])`
`Removes the specified token(s) from the list.`

`DOMTokenList.add(token1[, token2[, ...tokenN]])`
`Adds the specified token(s) to the list.`
사용하겠다.

```sh
function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}
```

Toggle 사용 한다면 ?

```sh
function handleTitleClick() {
    h1.classList.toggle("clicked");
}
```

WoW 새로운 기술을 잘 알아야함!!!!!!!!!!!!!!!!!!!!
----css에 정의된 class name들로 HTML element에서 숨기고 표시하는 방법과
toggle사용방법을 알게됬음.

# メモ帳

```sh
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
same same
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
```

`event.preventDefault();`
 브라우저가 하려는 동작을 허용하지 않는다.

# メモ帳

`.hidden{ display:none; }`
 어떤 클래스 요소에게도 주면 요소가 보이지않음 html에 class="hidden" 추가해줘야함
걍 보이지않음 개발자관리자에서 걍 소스 딜리트한것처럼

```sh
function onLoginBtnClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
}
```

마치 모멘텀에서 이름 설정하면 창 사라지고 그다음 이메일 입력하라는것처럼
사라지게해줌.
`event.preventDefault();`
기본동작은 실행되지 않도록 막아주고.
`hidden` class name을 더해줘서 form을 숨기고

모멘텀에 헬로우 동민 하는것처럼 하는중..
html에 아이디 그리팅 주고 히든으로 가리고
js에서 불러주고 innerText에 담는데 개발자도구에 보임 밑에
그걸또 안보이게 리무브해줌 안보이게해줌 히든

`const HIDDEN_CLASSNAME = "hidden";`
일반적으로 String만 포함된 변수는 대문자로 표기하고 string 을 저장하고 싶을때 사용해
loginForm,loginInput처럼 중요한 정보를 담은게아니라서 대문자로 작성

`greeting.innerText = "Hello " + username;`
`greeting.innerText = (백틱)Hello + ${username}(백틱);`
두개다 같은방식 밑에가 좀더 최신형태.
둘다 스페이스 한칸 띄어주고 함.
 규칙 하나는, 니가 만약 변수와 string을 결합하고싶다면 쓰면됨
중요한규칙은 백틱 으로 시작
자 그다음은 나를 저장시키는거 나의 정보를 유지시키는것. 로그인같은 기능

localStorage라는 API가 있다 뭔가 저장해주는 기능이있다
개발자도구를 이용하면됨.
오른쪽 애플리케이션 > 로컬스토리지 등등있음 .
 username처럼 반복되는 string는 무조건 변수로 저장해놓는것이 좋음 대문자~
4.7 0:41부분
자바스크립트를 불러오기 전부터 히든 두 요소는 숨겨져있음 디스플레이 논
이제 자바스크립트가 들어와서 제일먼저 로컬 스토리지 확인.

프리벤트디폴트 자동으로 새로고침해주는걸 막아줄꺼야.
히든 시켜주기
둘다 히든 있는데 디스플레이논으로 숨겨져있음.

1.로컬 스토리지를 확인.

2.  getItem("제대로된 변수명입력") 해줘야지 값이 나옴. 널 또는 입력했던 값만/

3.if문 확인 . 조건식 확인

4.세이브유저네임에 값이 null이라면 loginForm으로부터 HIDDEN_CLASSNAME을 제거
`<form class="hidden" id="login-form> >> (= <form id= "login-form>)`
그렇다면 form이 표시됨

5.`loginForm.addEventListener("submit", onLoginSubmit);`
submit을 기다림

6.이벤트가 발생하면 onLoginSubmit함수가 실행 될것임.

7. `event.preventDefault();`
   이벤트가 하는행동 멈춰준다.(페이지 새로고침 -기본셋팅)

`loginForm.classList.add(HIDDEN_CLASSNAME);`
폼을 숨겨줄것이다.

`const username = loginInput.value;`
username 에 현재 페이지 그 값을 넣어줌

`localStorage.setItem(USERNAME_KEY, username);`
그 값과 키 값을 로컬스토리지에 저장해줌. (웹개발자도구 어플리케이션-로컬스토리지)

`paintGreetings(username);`
paintGreetings함수는 username이라는 함수 하나만 받고있음
` greeting.innerText = (백틱)Hello ${username}(백틱);`
비어있는 h1(innerText)요소안에 텍스트를 추가해줌.
`greeting.classList.remove(HIDDEN_CLASSNAME);`
히든을 써서 텍스트박스 클래스명 없애줘야지 그다음 적은값 보이게(greeting의h1태그에 히든을없애줌)  
 물론 greeting에 텍스트를 추가해주고 난다음에.

--폴더나누기 divide and conquer

# メモ帳

`const clock = document.querySelector("h2#clock");`
`// const clock = document.getElementById("clock");`
get해서 아이디만 받아오거나, 쿼리셀렉트로 요소 받아오거나 똑같은방법

interval은 매번 일어나야하는 무언가 임.

```sh
function sayHello() {
    console.log("hello")
}

setInterval(sayHello, 5000)
```

매 5초마다 갱신해줘! == timeout

`new Date()`
웹 개발자도구 콘솔에서 치면 실시간 바로나옴.

```sh
const date = new Date();
undefined
date.getDate();
8
date.getDay()
4
date.getHours();
16
date.getMinutes();
54
date.getSeconds();
7
```

`clock.innerText=백틱${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}백틱;`
연속해서 사용
시계할때 최소한 2개의 글자를 가지고있어야함 01 표현위해 `padStart()`
`"1".padStart(2,"0")`
길이는 2로 하겠다 앞쪽에 0을 채우겠다.
`const seconds = String(date.getSeconds()).padStart(2, "0");`
스트링으로 감싸줌 변환 완료 change
` clock.innerText=백틱${hours}:${minutes}:${seconds}백틱;`
$ , : 써서 계속해서 가능. 이해하도록

quotes.js에 array로 오브젝트2개씩 넣었다quote,author
html아이디랑 스판2개 그래서 `#quote span:first-child`줬다 라스트랑

`Math.random() `
이라는 것도 있음. 그래서 나는
`Math.random() * 10`
명언 10개라서 다만 끝에 소수점들이 나옴
`Math.round(1.1)`
소수점 때고 돌려줌.
`Math.ceil(1.1)`
반 올림아니고 올림 1.01 해도 2가 되고 2.99해도 3이됨
`'Math.floor(1.999999)`
하면 0이됨 내림임
다까라
`Math.floor(Math.random() * 10)`
지금내가필요한거 됨.
근데 10개만 되는거라서 확장성을 위해서 코드 수정.

배열이 얼마나 길이를 가지고있는지 확인
`[1,2,3,4,5].length`
`[Math.floor(Math.random() * quotes.length)]`
명언에도 이미지에도 반복해서 사용함.

HTML만으로는 이미지를 랜덤(기능)으로 나오게할수없음.
`const bgImage = document.createElement("img");`
자스 기능인 createElement를 사용한다.
`bgImage.src = 백틱img/${pakuImage}백틱`
`document.body.appendChild(bgImage);`
사용하게
`<input type="text" placeholder="今日のリスト?" required/>`
required???
` event.preventDefault();`
서브밋 기능을 만들어놓고 내가써야되기때문에 기본적인기능은 방지.

`function paintToDo(newTodo){`
` const li = document.createElement("li");`
`}`
아까전이랑 같은거 사용 creatElement

```sh
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
}
```

또 js안에서 html 을 만들었다.

`function deleteToDo(){`
`console.log("lala")`
`}`
여기에 이벤트 라고 값주면 개발자도구에서 버튼 속성들 나오는데 거기서
path를 보라. target도
`console.dir(event.target)`
해서 parentNode 나 element 보면 li있음
parentElement는 element의 부모요소

`const li = event.target.parentElement;`
target은 버튼 parent부모

저장은되는데
저장된것이 배열로 안담아지고
같은말을 입력하면 초기화? 되어버림
개발자도구에서

```sh
const player ={name:"dondon"}
undefined
JSON.stringify(player)
"{"name":"dondon"}"
```

라고 결과값나옴. stringify인가봄
`JSON.parse("[1,2,3,4]")`
string나옴

```sh
function sayHello(item){
    console.log("this is the turn of",item);
}
parsedToDos.forEach((item) => console.log("this is the", item);
```

위에꺼랑 밑에꺼랑 같은거 펑션을 => 애로우 대체

# memo

지우고 싶은 item을 제외하고 새 array를 만든다.
Fillter 펑션은. 반드시 return해야된다.

1번째 예시!

```sh
function sexyFilter(item){
    return item !==3
}
[1, 2, 3, 4, 5].filter(sexyFilter)
답: (4) [1,2,4,5]
```

2번째 예시!

```sh
const arr = ["pizza", "banana", "tomato"]
function sexyFilter(food){
     return food !== "banana"}

arr.filter(sexyFilter)
답:  (2) ["pizza", "tomato"]
```

3번째 예시

```sh
const arr = [1234, 5454, 223, 122, 45, 6775, 334]

function sexyFunction(potato) { return potato <= 1000}

arr.filter(sexyFunction)
답:(4) [233,122,45,334]
```

filter !== 같지않다면 지워줘~

날씨정보 얻기
`https://home.openweathermap.org/api_keys`
이 사이트에서 받아옴.
` const url = 백틱 http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}백틱`
lat,lon,api_key변수로 묵어줌
`fetch(url);`
갖고옴 그리고 개발자도구에서 network들어가면 정보 나옴
패치가 자바스크립트가 대신에 url요청해줬음.
`.then((response) => response.json())`
여기서 말하는 json은 그 개발자도구 밑에 거기 나오는 소스들 api정보들 말하는거.
