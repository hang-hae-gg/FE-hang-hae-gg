import React from 'react'
import Cookies from "js-cookie"

export default function logout() {
    Cookies.remove('token')
    alert('로그아웃 되었습니다!')
}
