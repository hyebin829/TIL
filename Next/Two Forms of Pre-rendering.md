# Two Forms of Pre-rendering

### pre-rendering

Next.js는 사전에 각 페이지에 대한 HTML을 생성한다.  
생성된 각 HTML은 해당 페이지에 필요한 최소한의 javascript와 연결되며  
페이지가 브라우저에 의해 로드되면 javascript 코드가 실행되어 페이지가 완전히 상호작용하게 된다. (hydration)

---

## Static Generation

빌드 시 HTML을 생성하는 사전 렌더링 방법.  
pre-rendring된 HTML은 각 요청에 재사용된다.
각 요청에 대해 동적으로 생성할 필요가 없는 페이지에 적합하다.

### getStaticProps

이 함수를 사용하면 빌드 시 데이터를 가져오고 Static generation을 사용하여  
 페이지의 HTML 콘텐츠를 생성할 수 있다.  
 page 에서만 export할 수 있다.

</br>

```js
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}
```

서버 측에서만 실행되기 때문에 데이터베이스 쿼리와 같은 코드를 직접 작성할 수 있다.
</br>

### Developments vs. Production

- In development - 매 요청마다 실행된다.
- In production - 빌드 타임에 실행된다.

빌드 시간에 한번 발생하기 때문에 자주 업데이트 되거나 모든 사용자 요청에 따라  
변경되는 데이터에는 적합하지 않다.

</br>
</br>

## Server-side Rendering

각 요청에 대해 HTML을 생성한다.  
개인화된 데이터 또는 사용자별 콘텐츠를 표시하는 페이지와 같이  
사용자에 맞게 지정해야 하는 페이지에 이상적이다.  
정적 생성에 비해 초기 페이지 로드가 약간 느리다.

### getServerSideProps

요청 시 호출된다.

</br>
</br>
페이지의 특정 요구 사항에 따라 각 페이지 별로 서로 다른 렌더링 방법을 설정할 수 있다.
