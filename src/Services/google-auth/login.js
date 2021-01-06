import React from 'react'
import { useGoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from '../../utils/refreshToken'
import { useHistory } from 'react-router-dom'
import imgGoogle from '../../assets/icons/google.svg'
import './loginStyle.css'

const clientId = process.env.REACT_APP_KEY_ID

function LoginGoogle() {
  const history = useHistory()

  const onSuccess = res => {
    console.log(`Login success with current user : `, res.profileObj)

    refreshTokenSetup(res)
    history.push('/home')
  }
  const onFailure = res => {
    console.log(`Login failed : `, res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    autoLoad: true,
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
