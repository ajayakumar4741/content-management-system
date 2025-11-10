import { jwtDecode } from 'jwt-decode'
import React, { useState } from 'react'

function ProtectedRoute() {
    const {isAuthorized, setAuthorized} = useState(null)
    async function authorize(){
        const token = localStorage.getItem("access")
        if (!token){
            setAuthorized(false)
            return
        }
        const decodedToken = jwtDecode(token)
        const expiry_date = decodedToken.exp
        const current_time = Date.now()/1000
    }
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
