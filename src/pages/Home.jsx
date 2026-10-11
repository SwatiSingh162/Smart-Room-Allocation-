import { Link } from 'react-router-dom'
import { FiUsers, FiSearch, FiPercent, FiZap, FiShield, FiWifi, FiMapPin, FiDroplet } from 'react-icons/fi'

const sampleRooms = [
    { id: 1, area: 'Vijay Nagar', type: 'Shared Room', rent: 5000, match: 92 },
    { id: 2, area: 'Palasia', type: '1BHK', rent: 8500, match: 80 },
    { id: 3, area: 'Rajwada', type: 'Single Room', rent: 6000, match: 65 },
]

const steps = [
    { icon: <FiUsers />, title: 'Create an Account', text: 'Register as an owner or renter.' },
    { icon: <FiSearch />, title: 'Set your Requirements', text: 'Set your budget ,location,and amenities.' },
    { icon: <FiPercent />, title: 'Check your Match', text: 'Best-matched rooms appear first,with owner contact just one click away.' },
]

const features = [
    { icon: <FiZap />, title: 'Smart matching', text: 'Each room is scored based on your preferences.' },
    { icon: <FiShield />, title: 'No broker', text: 'Direct contact with the owner,with no commission.' },
    { icon: <FiDroplet />, title: 'All details upfront', text: 'Know the WiFi,water, and furnishing details upfront.' },
    { icon: <FiMapPin />, title: 'Indore focused', text: ' popular areas like Vijay Nagar, Palasia and Rajwada.' },
]

function matchClass(score) {
    if (score >= 85) return 'match'
    if (score >= 70) return 'match mid'
    return 'match low'
}

function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-inner">
                    <div>
                        <span className="badge">Made for Indore</span>
                        <h1>"The Right Room, <span>The Right Match</span>In One Click"</h1>
                        <p>
                            Tell us your budget and requirements.The system matches rooms based on
                            your preferences,no broker,no hassle.
                        </p>
                        <div className="search-box">
                            <input type="text" placeholder="Location, like Vijay Nagar" />
                            <Link to="/register" className="btn">Find rooms</Link>
                        </div>
                        <div className="stats">
                            <div><strong>Free</strong><span>listing</span></div>
                            <div><strong>0</strong><span>broker</span></div>
                            <div><strong>8</strong><span>match criteria</span></div>
                        </div>
                    </div>

                    <div className="room-stack">
                        {sampleRooms.map((room) => (
                            <div className="room-card" key={room.id}>
                                <div>
                                    <h4>{room.area}</h4>
                                    <p>{room.type} · Rs {room.rent}</p>
                                    <div className="amenities"><FiWifi /><FiDroplet /></div>
                                </div>
                                <span className={matchClass(room.match)}>{room.match}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>How it Works</h2>
                <p className="section-sub">Find your room in just 3 simple steps</p>
                <div className="grid-3">
                    {steps.map((s) => (
                        <div className="card" key={s.title}>
                            <div className="card-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <h2>Why Smart Room Allocation?</h2>
                <p className="section-sub">Making room search easy and transparent.</p>
                <div className="grid-4">
                    {features.map((f) => (
                        <div className="card" key={f.title}>
                            <div className="card-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta">
                <h2>Ready to find your perfect room ?</h2>
                <p>Register now , whether you're an owner or a renter.</p>
                <Link to="/register" className="btn">Get Started</Link>
            </section>

            <footer className="footer">Smart Room Allocation System · B.Tech Major Project</footer>
        </>
    )
}

export default Home