import { useState } from 'react'

const areas = ['Vijay Nagar', 'Palasia', 'Rajwada', 'Bhawarkuan', 'Sapna Sangeeta', 'Scheme 54', 'Annapurna']
const roomTypes = ['Single Room', 'Shared Room', '1BHK', '2BHK']
const facilities = [
    { name: 'wifi', label: 'WiFi' },
    { name: 'water', label: '24x7 Water' },
    { name: 'furnished', label: 'Furnished' },
    { name: 'parking', label: 'Parking' },
]

function AddListing() {
    const [formData, setFormData] = useState({
        location: 'Vijay Nagar',
        roomType: 'Shared Room',
        rent: '',
        roomSize: '',
        totalBeds: '',
        availableBeds: '',
        address: '',
        wifi: false,
        water: false,
        furnished: false,
        parking: false,
        contact: '',
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // Type karne ya checkbox dabane par form ka data update karta hai
    function updateForm(e) {
        const { name, value, type, checked } = e.target
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    }

    // Button dabane par form check karta hai
    function submitForm(e) {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (!formData.rent || !formData.roomSize || !formData.totalBeds || !formData.availableBeds || !formData.address || !formData.contact) {
            setError('Saare fields bharna zaroori hai.')
            return
        }
        if (Number(formData.rent) <= 0 || Number(formData.roomSize) <= 0) {
            setError('Rent aur room size 0 se zyada hone chahiye.')
            return
        }
        if (Number(formData.availableBeds) > Number(formData.totalBeds)) {
            setError('Available beds, total beds se zyada nahi ho sakte.')
            return
        }
        if (formData.contact.length !== 10 || isNaN(formData.contact)) {
            setError('Contact number 10 digits ka hona chahiye.')
            return
        }

        console.log('Listing data:', formData)
        setSuccess('Listing add ho gayi! (Backend baad mein judega)')
    }

    return (
        <div className="listing-page">
            <div className="listing-card">
                <h2>Apna room list karo</h2>
                <p className="listing-subtitle">Sahi details daalo, taaki renters ko sahi match mile</p>

                <form onSubmit={submitForm}>
                    <div className="form-grid">
                        <div>
                            <label>Location (area)</label>
                            <select name="location" value={formData.location} onChange={updateForm}>
                                {areas.map((a) => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Room type</label>
                            <select name="roomType" value={formData.roomType} onChange={updateForm}>
                                {roomTypes.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Rent (Rs / mahina)</label>
                            <input type="number" name="rent" placeholder="5000" value={formData.rent} onChange={updateForm} />
                        </div>
                        <div>
                            <label>Room size (sq ft)</label>
                            <input type="number" name="roomSize" placeholder="120" value={formData.roomSize} onChange={updateForm} />
                        </div>
                        <div>
                            <label>Total beds</label>
                            <input type="number" name="totalBeds" placeholder="3" value={formData.totalBeds} onChange={updateForm} />
                        </div>
                        <div>
                            <label>Available beds</label>
                            <input type="number" name="availableBeds" placeholder="1" value={formData.availableBeds} onChange={updateForm} />
                        </div>
                    </div>

                    <label>Poora address</label>
                    <input type="text" name="address" placeholder="House no., gali, landmark" value={formData.address} onChange={updateForm} />

                    <label>Facilities</label>
                    <div className="facility-grid">
                        {facilities.map((f) => (
                            <label key={f.name} className={formData[f.name] ? 'facility active' : 'facility'}>
                                <input type="checkbox" name={f.name} checked={formData[f.name]} onChange={updateForm} />
                                {f.label}
                            </label>
                        ))}
                    </div>

                    <label>Contact number</label>
                    <input type="text" name="contact" placeholder="10 digit number" value={formData.contact} onChange={updateForm} />

                    {error && <p className="msg msg-error">{error}</p>}
                    {success && <p className="msg msg-success">{success}</p>}

                    <button type="submit" className="btn btn-full">Listing add karo</button>
                </form>
            </div>
        </div>
    )
}

export default AddListing