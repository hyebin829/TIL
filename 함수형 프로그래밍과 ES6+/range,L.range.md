## range, L.range

### range

```js
const range = (l) => {
  let i = -1
  let res = []
  while (++i < l) {
    res.push(i)
  }
  return res
}
```

range 를 실행했을 때, 모든 부분이 평가가 되며 즉시 값이 만들어짐.

### L.range

```js
const L = {}
L.range = function* (l) {
  let i = -1
  while (++i < l) {
    yield i
  }
}
```

이터레이터의 내부를 순회할때마다 값이 평가됨.

모든 값이 즉시 만들어지는 것이 아니기 때문에 range 함수에 비해 지연성이 있다.

---

</br>

```js
const take = (l, iter) => {
  let res = []
  for (const a of iter) {
    res.push(a)
    if (res.length == l) return res
  }
  return res
}

take(5, range(100000))
take(5, L.range(100000))
```

두 함수의 결과값은 같지만 지연성을 가진 L.range 함수는 값이 크면 클수록 range에 비해 시간이 단축된다.

```js
take(5, L.range(Infinity))
```

무한 수열을 사용하더라도 필요한 값만 만들어서 사용하기 때문에 브라우저가 멈추지 않고 필요한 값을 반환할 수 있게 된다.
