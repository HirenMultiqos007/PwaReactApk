import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';

const Footer = () => {
    const [mode, setMode] = useState(true);
    useEffect(()=> {
      window.addEventListener(`online`, (e) => {
        setMode(true)
      })
      window.addEventListener("offline", (event) => {
        setMode(false)
      });
    },[])
  return (
    <div>
    {mode === "offline" && (
      <div>
        <Alert variant="warning">
          <Alert.Heading>You are in Offline mode</Alert.Heading>
        </Alert>
      </div>
    )}
  </div>
  )
}

export default Footer