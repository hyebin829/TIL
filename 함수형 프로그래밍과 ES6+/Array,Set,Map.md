# Array, Set, Map - 이터러블/이터레이터 프로토콜

내장 객체 Array, Set, Map 으로 만든 array, set, map은 for ... of 문으로 순회가 가능하다.

- Array

```js
const arr = [1, 2, 3]
for (const a of arr) console.log(a)
```

- Set

```js
const set = new Set([(1, 2, 3)])
for (const a of set) console.log(a)
```

- Map

```js
const map = new Map([(['a', 1], ['b', 2], ['c', 3])])
for (const a of map) console.log(a)
```

</br>
</br>

배열의 경우 key로 접근하여 값을 조회할 수 있지만 map과 set의 경우에는 그렇지 않다.

```js
const arr = [1, 2, 3]
for (const a of arr) console.log(a)
```

```js
//console
arr[0] // 1
arr[1] // 2
arr[2] // 3
```

</br>

```js
const set = new Set([(1, 2, 3)])
for (const a of set) console.log(a)
```

```js
// console
set[0] // undefined
set[1] // undefined
set[2] // undefined
```

## 이터러블/이터레이터 프로토콜

내장객체 Array, Set, Map은 이터러블/이터레이터 프로토콜을 따르고 있다.

- 이터러블 : 이터레이터를 리턴하는 \[Symbol.iterator\]() 를 가진 값

```js
const arr = [1, 2, 3]
for (const a of arr) console.log(a)

arr[Symbol.iterator] // f values() { [native code] }
```

</br>

- 이터레이터 : {value, done} 객체를 리턴하는 next()를 가진 값

```js
const arr = [1, 2, 3]
for (const a of arr) console.log(a)

let iterator = arr[Symbol.iterator]()
```

```js
//console
iterator.next() // {value: 1, done: false}
iterator.next() // {value: 2, done: false}
iterator.next() // {value: 3, done: false}
iterator.next() // {value: undefined, done: true}
```

value의 값을 출력하다가 done이 true가 되면 for...of 문에서 빠져나온다.

</br>

- 이터러블/이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록 한 규약

</br>

```js
const map = new Map([(['a', 1], ['b', 2], ['c', 3])])

for (const a of map.keys()) console.log(a) // a b c
for (const a of map.values()) console.log(a) // 1 2 3
for (const a of map.entries()) console.log(a) // ["a", 1] ["b", 2] ["c", 3]
```

```js
//console

map.values() // MapIterator {1,2,3} 이터레이터이다.

//Symbol.iterator를 가지고 있다.
let iterator = map.values()
iterator[Symbol.iterator] // f [Symbol.iterator]() { [native code] }

// 그것을 Symbol.iterator로 실행했을 때 자기 자신을 반환한다.
let iterator2 = iterator[Symbol.iterator]()
iterator2.next() // {value: 1, done: false}
iterator2.next() // {value: 2, done: false}
iterator2.next() // {value: 3, done: false}
```
