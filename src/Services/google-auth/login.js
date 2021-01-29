import React from 'react'
import { useGoogleLogin } from 'react-google-login'

//import { useHistory } from 'react-router-dom'
import imgGoogle from '../../assets/icons/google.svg'
import './loginStyle.css'

const clientId =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_GOOGLE_ID_CLIENT
    : process.env.REACT_APP_GOOGLE_API_KEY

function LoginGoogle() {
  //const history = useHistory()
  const onSuccess = res => {
    // history.push('/welcome')
    localStorage.setItem('name', JSON.stringify(res.Es.nT))
  }
  const onFailure = res => {
    console.log(`Login failed : `, res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true
  })

  return (
    <>
      <button onClick={signIn} className='btnLogin'>
        <img src={imgGoogle} alt='Google-auth' className='icon' />
        <span className='text'> Sign in with Google </span>{' '}
      </button>{' '}
    </>
  )
}
export default LoginGoogle
