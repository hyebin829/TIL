# Redux-toolkit

redux-toolkit을 사용하기 위해 코드를 작성하던 중 궁금한 점에 대해 정리했습니다.

## useSelector, useDispatch를 custom hook으로 만들어서 사용하는 이유

</br>

react-redux의 useSelector, useDispatch를 그냥 사용할수도 있는데 custom hook으로 만들어서 사용하는 이유가 무엇일까요?

다음과 같은 이유가 있습니다.

- 타입 추론 : useAppDispatch와 useAppSelector hook에서 generic을 이용하여 타입을 지정할 수 있습니다.

  이를 이용하여 사용자가 올바른 타입을 전달하는지 확인할 수 있으며, TypeScript의 강력한 타입 추론 능력을 활용할 수 있습니다.

```ts
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

위와 같이 타입을 지정해 custom hook을 만들었을 경우, useAppSelector를 사용해 상태를 불러올 때마다 RootState 타입을 작성해줄 필요가 없습니다.

</br>

```
* AppDispatch 타입

AppDispatch는 @reduxjs/toolkit 패키지에서 제공하는 createSlice 함수를 이용하여 생성된 slice에서 사용되는
액션 객체들을 dispatch하는데 사용되는 타입입니다.

createSlice 함수를 이용하여 생성된 slice에서 사용되는 모든 액션 객체들의 타입은
createSlice 함수를 이용하여 생성된 리듀서 함수의 case 함수들의 첫 번째 매개변수로 사용되는 객체의 타입과 동일합니다.

일반적으로 AppDispatch 타입은 Redux의 Dispatch 타입과 동일합니다. 하지만 createSlice 함수를 이용하여 생성된 slice에서는
Redux Toolkit에서 제공하는 createAsyncThunk 함수와 같은 비동기 작업을 처리하는 유틸리티 함수를 사용할 때 필요합니다.

Redux Toolkit을 사용할 때는 useDispatch를 이용하여 dispatch 함수를 가져올 때 AppDispatch 타입을 사용하면 됩니다.
이렇게 사용하면 dispatch 함수가 생성된 slice의 액션 객체를 받아서 사용할 수 있게 됩니다.
```

---

</br>

## extraReducer를 사용하는 이유

여러 개의 리듀서 함수를 작성할 때, extraReducer를 사용하는 이유는
하나의 상태에 대해서 여러 개의 리듀서를 작성하기 위함입니다.

```ts
// 예시 리듀서 1
const counterReducer = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
})

// 예시 리듀서 2
const authReducer = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false
    },
  },
})
```

다음과 같은 리듀서 함수가 두개 있을 때,

```ts
const rootReducer = createSlice({
  name: 'root',
  initialState: {
    counter: 0,
    auth: { isAuthenticated: false },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(counterReducer.actions.increment, (state) => {
        state.counter++
      })
      .addCase(authReducer.actions.login, (state) => {
        state.auth.isAuthenticated = true
      })
  },
})
```

extraReducers를 사용해 중복을 제거하고, 상태 또한 두개로 나뉜 것이 아닌 하나의 상태로 다룰 수 있습니다.
