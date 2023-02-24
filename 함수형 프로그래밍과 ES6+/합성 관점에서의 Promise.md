## 합성 관점에서의 Promise와 모나드

### 모나드

함수형 프로그래밍에서 사용되는 개념 중 하나로, 부작용을 방지하고 코드를 더 안전하고 예측 가능하게 만드는 데 사용함.

값을 감싸는 컨테이너이다.

```js
const g = (a) => a + 1;
const f = (a) => a * a;
```

```js
console.log(f(g(1))); // 4
console.log(f(g())); //NaN
```

위와 같이 합성을 했을 때, 인자가 없는 경우에는 NaN이 출력된다. 때문에 안정성이 보장되지 않는다.

</br>
</br>

```js
[1]
  .map(g)
  .map(f)
  .forEach((r) => console.log(r)); // 4

[]
  .map(g)
  .map(f)
  //값이 들어오지 않았을 경우 효과를 일으키지 않음
  .forEach((r) => console.log(r)); //
```

인자가 없는 경우에도 함수 합성을 안전하게 할 수 있도록 컨테이너를 만들고 map을 통해 합성한다.

</br>
</br>

```js
Promise.resolve(1)
  .then(g)
  .then(f)
  .then((r) => console.log(r)); // 4
```

**비동기가 일어나는 상황**에서의 안전한 합성을 위해 Promise와 then 메서드를 이용해 함수를 합성한다.
