import React, { useEffect } from 'react'
import { useState,useEffect } from 'react'

const useOnlineStatus = () => {
  
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(()=>{
        window.addEventListener('online', ()=>{
            setOnlineStatus(true)
        })
    
        window.addEventListener('offline', ()=>{
            setOnlineStatus(false)
        })
    },[])

    console.log(onlineStatus)


    return onlineStatus

}

export default useOnlineStatus