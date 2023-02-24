## 비동기를 값으로 만드는 Promise

</br>

```js
function add10(a, callback) {
  setTimeout(() => callback(a + 10), 100)
}

var a = add10(5, (res) => {
  add10(res, (res) => {
    add10(res, (res) => {
      console.log(res)
    })
  })
})
```

실행 후에 추가적으로 할 수 있는 일이 없다. 콜백 함수를 통해 추가적으로 할 일을 이어나가야 함.

</br>
</br>

```js
function add20(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a + 20), 100))
}

var b = add20(5).then(add20).then(add20).then(console.log())
```

코드를 평가했을 때 Promise가 return된다. 때문에 Promise를 통해 이후의 일을 추가적으로 할 수 있다.

**비동기 상황이 값으로 다루어진다.**
