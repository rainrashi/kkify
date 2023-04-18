import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate(initialState)
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext()
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  //global state and useNavigate
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { name, email, password }
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login berhasil, mengalihkan ke halaman utama...',
      })
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'Pendaftaran berhasil, mengalihkan ke halaman utama...',
      })
    }
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember
            ? 'Belum menjadi anggota?'
            : 'Sudah menjadi anggota?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Mari daftar disini' : 'Silahkan login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
