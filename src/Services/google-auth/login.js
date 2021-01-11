import React, { useCallback } from 'react'
import { useGoogleLogin } from 'react-google-login'

// import { useHistory } from 'react-router-dom'
import imgGoogle from '../../assets/icons/google.svg'
import './loginStyle.css'

const clientId = process.env.REACT_APP_KEY_ID

function LoginGoogle() {
  // const history = useHistory()

  const onSuccess = res => {
    return res

    //history.push('/')
  }
  const onFailure = res => {
    console.log(`Login failed : `, res)
  }

  const { signIn } = useCallback(
    useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true
    }),
    [onSuccess, onFailure]
  )
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
