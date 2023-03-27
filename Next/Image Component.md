# Image Component

브라우저 네이티브 lazy loading을 사용하는 컴포넌트이다.

</br>
</br>

## 이미지 컴포넌트 사용

```js
import Image from 'next/image';
```

</br>

## 로컬 이미지 사용

```js
import profilePic from '../public/me.png';
```

빌드 시 분석할 수 있도록 정적 가져오기를 사용해야 한다.  
next.js는 누적 레이아웃 이동 방지를 위해 가져온 파일을 기준으로 높이와 너비를 자동으로 설정한다.

</br>

## 원격 이미지 사용

원격 이미지를 사용하려면 src 속성이 상대적이거나 절대적인 URL 문자열이어야 한다.  
Next.js는 빌드 프로세스 중에 원격 파일에 액세스할 수 없으므로 너비, 높이 및 선택 사항인 블러 데이터를 제공해야 한다.

</br>

## 스타일링

className 또는 style을 사용할 것.  
styled-jsx는 사용할 수 없다.

fill을 사용할 때, 부모 요소는 position:relative, display:block을 설정해주어야 한다.

</br>

## blurDataURL

원본 이미지가 로드되는 동안 이미지의 흐릿한 버전을 보여줄 수 있다.
