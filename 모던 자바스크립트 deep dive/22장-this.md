# 22장 - this

</br>

## 1. this 키워드

메서드는 자신이 속한 객체의 상태를 참조하고 변경할 수 있어야 한다.  
자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.

자바스크립트 엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다.  
this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

```
바인딩 - 식별자와 값을 연결하는 과정
```

</br>
</br>

## 2. 함수 호출 방식과 this 바인딩

this 바인딩은 함수 호출 시점에 결정된다.

</br>

### 2-1. 일반 함수 호출

기본적으로 this에는 전역 객체가 바인딩된다.

```js
function foo() {
  console.log("foo's this:", this) // window
  function bar() {
    console.log("bar's this:", this) // window
  }
  bar()
}
foo()
```

전역 함수는 물론이고 중첩 함수를 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩된다.  
this는 객체의 프로퍼티나 메서드를 참조하기 위한 변수이므로 일반함수에서는 의미가 없다.  
strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.

**어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩된다.**

</br>

### 2-2. 메서드 호출

메서드 내부의 this에는 메서드를 호출한 객체가 바인딩된다.
메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩된다.

</br>

### 2-3 생성자 함수 호출

생성자 함수 내부의 this에는 생성자 함수가 생성할 인스턴스가 바인딩된다.

</br>

### 2-4 Function.prototype.apply/call/bind 메서드에 의한 간접 호출

apply, call, bind 메서드는 Function.prototype의 메서드다. **모든 함수가 상속받아 사용할 수 있다.**

- Function.prototype.apply / Function.prototype.call
  this로 사용할 객체와 인수 리스트를 인수로 전달받아 함수를 호출한다.

```js
//thisArg : this로 사용할 객체


//argsArray :  함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
Function.prototype.apply(thisArg[, argsArray])

// arg1, arg2, ... : 함수에게 전달할 인수 리스트
Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])
```

**apply와 call의 본질적인 기능은 함수를 호출하는 것이다.**  
함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.

대표적인 용도는 유사 배열 객체에 배열 메서드를 사용하는 경우다.

```js
function convertArgsToArray() {
  console.log(arguments)

  // arguments 객체를 배열로 변환
  const arr = Array.prototype.slice.call(arguments)
  console.log(arr)

  return arr
}

convertArgsToArray(1, 2, 3) // [1, 2, 3]
```

</br>

- Function.prototype.bind
  함수를 호출하지 않고 this로 사용할 객체만 전달한다.

```js
function getThisBinding() {
  return this
}

const thisArg = { a: 1 }

console.log(getThisBinding.bind(thisArg)) // getThisBinding

// bind 메서드는 함수를 호출하지 않으므로 명시적으로 호출해야 한다.

console.log(getThisBinding.bind(thisArg)()) // { a : 1 }
```
