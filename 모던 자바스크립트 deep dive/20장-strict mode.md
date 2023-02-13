# 20장 - strict mode

## 1. strict mode란?

자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.

</br>
</br>

## 2.strict mode의 적용

strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다.

```js
'use strict'

function foo() {
  x = 10 // ReferenceError: x is not defined
}

foo()
```

전역의 선두에 추가하면 스크립트 전체에 strict mode가 적용된다.

```js
function foo() {
  'use strict'

  x = 10 // ReferenceError: x is not defined
}

foo()
```

함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용된다.

코드의 선두에 'use strict';를 위치시키지 않으면 strict mode가 제대로 동작하지 않는다.

</br>
</br>

## 3. 전역에 strict mode를 적용하는 것은 피하자

전역에 적용한 strict mode는 스크립트 단위로 적용된다.  
스크립트 단위로 적용된 strict mode는 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 적용된다.  
non-strict mode와 혼용하는 것은 오류를 발생시킬 수 있기 때문에 전역에 strict mode를 적용하는 것은 바람직하지 않다.

```js
(function(){
    'use strict';

    //Do something...
}();)
```

혼용해서 사용하지 않기 위해 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.

</br>
</br>

## 4. 함수 단위로 strict mode를 적용하는 것도 피하자

즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.

</br>
</br>

## 5. strict mode가 발생시키는 에러

</br>

### 5-1. 암묵적 전역

선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.

</br>

### 5-2. 변수, 함수, 매개변수의 삭제

delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError 발생.  
delete 연산자는 객체의 속성을 제거하는 연산자이다.

</br>

### 5-3. 매개변수 이름의 중복

중복된 매개변수 이름 사용지 SyntaxError 발생.

</br>
</br>

## 6. strict mode 적용에 의한 변화

</br>

### 6-1. 일반 함수의 this

strict mode에서 함수를 일반 함수로 호출하면 this에 undefined가 바인딩된다.  
생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다.

</br>

### 6-2. arguments 객체

strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
