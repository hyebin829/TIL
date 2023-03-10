# JWT

## JSON Web Token

클라이언트와 서버간의 인증 정보를 안전하게 전송하기 위해 사용합니다.

JWT는 JSON 형식으로 인코딩되며, 기본적으로 세 부분으로 구성됩니다. 헤더(Header), 페이로드(Payload), 서명(Signature)으로 이루어져 있습니다.

헤더(Header): JWT가 어떤 방식으로 인코딩되었는지에 대한 정보를 담고 있습니다.  
페이로드(Payload): JWT에 담길 정보를 담고 있습니다. 예를 들어, 사용자 ID, 권한 등이 포함될 수 있습니다.  
서명(Signature): JWT의 유효성을 검증하기 위한 서명 값입니다. 이 서명 값은 암호화된 헤더와 페이로드, 그리고 비밀키를 조합하여 생성됩니다.

JWT는 서버에서 발급되어 클라이언트에게 전달됩니다. 클라이언트는 이후 서버에 요청을 보낼 때마다 JWT를 함께 전달하여 인증을 수행합니다. 이때 JWT는 HTTP 요청 헤더에 포함되어 전달됩니다.

</br>

JWT는 암호화된 문자열로 이루어져 있기 때문에, 데이터를 안전하게 전송할 수 있습니다.  
또한 서버에서는 JWT를 검증하여, 요청을 보내는 클라이언트가 인증된 클라이언트인지 확인할 수 있습니다.  
이러한 이유로 JWT는 인증과 권한 부여를 처리하는 데에 매우 유용하게 사용됩니다.

</br>

1. 사용자가 로그인을 시도합니다. 로그인 정보는 사용자가 입력한 ID와 비밀번호입니다.
2. 입력된 로그인 정보가 서버에 전송됩니다. 이때, HTTPS와 같은 보안 프로토콜을 사용하여 전송합니다.
3. 서버에서는 입력된 ID와 비밀번호가 유효한지 검증합니다. 유효하지 않은 경우, 로그인 실패 메시지를 반환합니다.
4. 입력된 ID와 비밀번호가 유효한 경우, 서버는 해당 사용자를 위한 JWT 토큰을 생성합니다. JWT 토큰은 사용자 정보와 함께 서명된 문자열입니다.
5. 서버는 생성된 JWT 토큰을 클라이언트에게 반환합니다. 반환된 JWT 토큰은 클라이언트 측에서 저장되어야 합니다.

</br>
</br>

### 클라이언트 측에서 토큰을 저장하는 방법

로컬 스토리지나 세션 스토리지에 저장하는 방법이 있으나 XSS(Cross-Site Scripting) 공격의 대상이 될 수 있습니다.  
XSS 공격은 악성 스크립트를 삽입하여 사용자의 브라우저에서 실행되도록 하여, 악의적인 행동을 수행하는 공격입니다.  
만약 악성 스크립트가 로컬 스토리지나 세션 스토리지에 저장된 토큰을 탈취한다면, 해당 토큰을 사용하여 사용자의 계정에 대한 액세스를 얻을 수 있습니다.

</br>

따라서 보안상 더 안전한 방법으로는 쿠키에 JWT 토큰을 저장하고, 쿠키의 HttpOnly 속성을 true로 설정하여, 자바스크립트로 쿠키에 접근하는 것을 방지하는 것이 좋습니다.  
이 방법은 XSS 공격으로부터 보호될 수 있으며, CSRF(Cross-Site Request Forgery) 공격으로부터도 보호될 수 있습니다.

```
HttpOnly 속성 : Javascript에서 쿠키에 접근할 수 없도록 합니다.
```
