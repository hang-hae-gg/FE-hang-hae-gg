import Cookies from "js-cookie"
import { setIsAuthenticated, setUserId } from "../redux/modules/authReducer"

export default function logout(dispatch) {
    Cookies.remove('Authorization')
    Cookies.remove('Authorization-refresh')
    dispatch(setUserId(null))
    dispatch(setIsAuthenticated(false))
    alert('로그아웃 되었습니다!')
}
