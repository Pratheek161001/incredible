import React from 'react'
import myvedio from '../assets/VN20231110_224112.mp4'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <div
      style={{
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
         }}>
      <video controls autoPlay loop style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
        }}>
        <source src={myvedio} />
      </video>
      
    </div>
  )
}

export default Home