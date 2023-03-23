# API Routes

폴더 페이지/api 내의 모든 파일은 /api/\*에 매핑되며 페이지가 아닌 API 엔드포인트로 처리된다.  
이러한 번들은 서버 측 번들일 뿐이며 클라이언트 측 번들 크기는 증가하지 않는다.

```js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
```

api route가 작동하려면 함수를 export default 해야 한다.
req, res 파라미터를 받을 수 있다.

</br>
</br>

## Dynamic API Routes

```js
// pages/api/post/[pid].js

export default function handler(req, res) {
  const { pid } = req.query;
  res.end(`Post: ${pid}`);
}
```

`[]` 안의 값을 사용할 수 있다.  
`pages/api/post/[...params].js` 와 같이 괄호 안에 점 3개를 사용하는 경우 `/api/post/a`, `/api/post/a/b`, `/api/post/a/b/c` 와 같은 모든 경로를 사용할 수 있다.
