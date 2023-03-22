# Data Fetching

## getServerSideProps

이 함수를 페이지에서 내보내면 Next.js는 getServerSideProps에서 반환한 데이터(JSON)를 사용하여 각 요청에 대해 이 페이지를 미리 렌더링한다.

- 서버 측에서만 실행되며 브라우저에서 실행되지 않는다.

- page에서만 export 될 수 있다.

- 사용자 요청에 따른 데이터를 가져올 때 유용하다.

- 내부에 오류가 발생하면 pages/500 파일이 표시된다.

</br>

### getServerSideProps return values

- notFound

```js
export async function getServerSideProps(context) {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
```

404 status와 404페이지를 반환할 수 있다.

</br>

- redirect

```js
export async function getServerSideProps(context) {
  // Check if user is authenticated, if not redirect to login page
  const { req, res } = context;
  if (!req.headers.cookie || !req.headers.cookie.includes('authToken')) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
```

내부 및 외부 리소스로 리디렉션할 수 있다.

</br>
</br>

---

## getStaticProps

이 함수를 내보내면 getStaticProps에서 반환한 props를 사용하여 빌드 시 Next.js에서 이 페이지를 미리 렌더링한다.

- page에서만 export 될 수 있다.

- SEO 용으로 사용될 페이지에서 사용한다.

- 서버 측에서만 실행되며 클라이언트에서 실행되지 않는다.

- 페이지를 미리 생성하고 런타임에 수행해야 하는 작업량을 줄여 성능을 향상시키려는 경우에 좋다.

- getStaticProps는 정적 HTML을 생성하므로 들어오는 요청 (예 : 쿼리 매개 변수 또는 HTTP 헤더)에 액세스 할 수 없다.  
  미들웨어를 사용해야 한다.

- 개발 환경에서는 모든 요청에 호출된다.

</br>

### getStaticProps return values

- revalidate  
  페이지 리렌더링이 발생할 수 있는 시간

</br>
</br>

---

## getStaticPaths

동적 경로를 사용하는 페이지에서 이 함수를 내보내면 Next.js는 getStaticPaths에서 지정한 모든 경로를 정적으로 미리 렌더링한다.

- getStaticProps와 함께 사용되어야 한다.

- getServerSideProps와 함께 사용할 수 없다.

- page에서만 사용할 수 있다.

- **경로에 대해 빈 배열을 반환하면 필요에 따라 모든 페이지 생성을 연기할 수 있다.(fallback : true)**

</br>

### getStaticPaths return values

- paths  
  렌더링 할 경로를 결정한다.

- fallback  
  Next.js가 빌드 시 미리 생성되지 않은 동적 경로에 대한 요청을 처리하는 방법을 결정하는 값.
  - false : Next.js는 미리 생성되지 않은 동적 경로에 대해 404 오류를 반환한다.
  - true : Next.js는 페이지 구성 요소의 대체 버전을 렌더링한 다음 런타임에 해당 페이지의 데이터를 가져온다.
  - blocking : 렌더링 하기 전에 요청된 페이지가 생성될 때 까지 기다린다.  
    서버가 요청한 페이지를 생성하는 동안 빈 페이지 또는 로딩 페이지를 반환한다.

</br>
</br>

---

## Incremental Static Regeneration

ISR(Incremental Static Regeneration)을 사용하면 페이지를 완전히 다시 불러오지 않고도 특정 부분을 업데이트 할 수 있다.

Next.js에서 ISR을 사용하려면 getStaticProps 함수에 revalidate 속성을 추가하면 된다.
