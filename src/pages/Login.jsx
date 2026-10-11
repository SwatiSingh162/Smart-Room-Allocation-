import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    // useState: form ka data yahan yaad rakhta hai
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'SEEKER',
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // Jab bhi user kuch type kare, formData update ho jaye
    function upadateform(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Login button dabane par
    function loginuser(e) {
        e.preventDefault() // page refresh hone se rokta hai
        setError('')
        setSuccess('')

        if (!formData.email || !formData.password) {
            setError('Email aur password dono bharo.')
            return
        }
        if (formData.password.length < 6) {
            setError('Password kam se kam 6 characters ka hona chahiye.')
            return
        }

        console.log('Login data:', formData)
        setSuccess('Form submit ho gaya! (Backend baad mein judega)')
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Wapas aaye, swagat hai</h2>
                <p className="login-subtitle">Apne account mein login karo</p>

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

                <form onSubmit={loginuser}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="aap@example.com"
                        value={formData.email}
                        onChange={upadateform}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Kam se kam 6 characters"
                        value={formData.password}
                        onChange={upadateform}
                    />

                    {error && <p className="msg msg-error">{error}</p>}
                    {success && <p className="msg msg-success">{success}</p>}

                    <button type="submit" className="btn btn-full">Login</button>
                </form>

                <p className="login-footer">
                    Account nahi hai? <Link to="/register">Register karo</Link>
                </p>
            </div>
        </div>
    )
}

export default Login