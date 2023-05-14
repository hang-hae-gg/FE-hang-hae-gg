import Router from "./shared/Router";
import "./index.css";
import { setIsAuthenticated, setUserId } from "./redux/modules/authReducer";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";

function App() {
  const dispatch = useDispatch();

  useEffect (() => {
    // 쿠키에서 토큰 가져와서 저장
    const token = Cookies.get('access_token')
    if (token) {
      try {
        const decoded = jwt_decode(token)
        // 일반로그인시 decoded.email 아닐수도 !
        dispatch(setUserId(decoded.email))
        dispatch(setIsAuthenticated(true))
      } catch (error) {
        console.error("토큰 오류", error)
        dispatch(setIsAuthenticated(false))
      }
    }
  }, [dispatch])

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
