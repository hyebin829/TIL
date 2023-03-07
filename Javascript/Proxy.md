# Proxy

다른 객체를 감싸고 그 객체의 동작을 가로채서 커스터마이징 할 수 있다.  
proxy 객체를 사용하면 객체의 프로퍼티에 접근할 때 , 그 값을 직접 반환하지 않고 프로퍼티 값을 다른 함수에서 가공한 결과를 반환할 수 있다.

두 개의 매개변수를 사용하여 proxy를 생성한다.

- target : 프록시할 원본 객체
- handler : 가로채는 작업과 가로채는 작업을 재정의하는 방법을 정의하는 객체

```js
const target = {
  message1: 'hello',
  message2: 'everyone',
};

const handler2 = {
  get(target, prop, receiver) {
    return 'world';
  },
};

const proxy2 = new Proxy(target, handler2);
```

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```
