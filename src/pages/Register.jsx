import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'SEEKER',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError('Saare fields bharna zaroori hai.')
      return
    }
    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      setError('Phone number 10 digits ka hona chahiye.')
      return
    }
    if (formData.password.length < 6) {
      setError('Password kam se kam 6 characters ka hona chahiye.')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Dono password match nahi kar rahe.')
      return
    }

    console.log('Register data:', formData)
    setSuccess('Account ban gaya! (Backend baad mein judega)')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Naya account banao</h2>
        <p className="login-subtitle">Owner ya renter, dono ke liye free</p>

        <div className="role-toggle">
          <button
            type="button"
            className={formData.role === 'SEEKER' ? 'active' : ''}
            onClick={() => setFormData({ ...formData, role: 'SEEKER' })}
          >
            Renter
          </button>
          <button
            type="button"
            className={formData.role === 'OWNER' ? 'active' : ''}
            onClick={() => setFormData({ ...formData, role: 'OWNER' })}
          >
            Owner
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Poora naam</label>
          <input
            type="text"
            name="name"
            placeholder="Aapka naam"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="aap@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone number</label>
          <input
            type="text"
            name="phone"
            placeholder="10 digit number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Kam se kam 6 characters"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Password dobara likho</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Same password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {error && <p className="msg msg-error">{error}</p>}
          {success && <p className="msg msg-success">{success}</p>}

          <button type="submit" className="btn btn-full">Register</button>
        </form>

        <p className="login-footer">
          Pehle se account hai? <Link to="/login">Login karo</Link>
        </p>
      </div>
    </div>
  )
}

export default Register