import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

// 여러 slice를 하나로 합치는 rootReducer 생성
const rootReducer = combineReducers({
  user: userSlice, // user 상태 관리
  // 추후 다른 slice 추가 가능(product, cart...)
});

// redux persist 설정
const persistConfig = {
  key: "root", // localStorage에 저장될 키 이름
  storage, // localStorage 사용
  whitelist: ["user"], // user 상태만 저장
  // blacklist: [],  // 저장하지 않을 reducer 지정
};

// rootReducer를 persistReducer로 감싸기
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux store 생성
const store = configureStore({
  reducer: persistedReducer, // persist된 reducer 사용
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Redux Persist의 특정 액션들은 직렬화 체크에서 제외
        // (이 액션들은 함수나 Date 객체 등 직렬화 불가능한 값들을 포함할 수 있음)
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// persistStore: Redux store와 연동되는 persistor 생성
export const persistor = persistStore(store);
// 기본 store export
export default store;
