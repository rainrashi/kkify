import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Aplikasi pencari <span>Kawan Kos</span>
          </h1>
        </div>
        <p>
          Amidst the eternal waves of time From a ripple of change shall the
          storm rise Out of the abyss peer the eyes of a demon Behold the
          Razgriz, its wings of black sheath The demon soars through dark skies
          Fear and death trail its shadow beneath Until men united wield a
          hallowed sabre In final reckoning, the beast is slain As the demon
          sleeps, man turns on man His own blood and madness soon cover the
          earth From the depths of despair awaken the Razgriz Its raven wings
          ablaze in majestic light
        </p>
        <Link to='/register' className='btn btn-hero'>
          Login / Register
        </Link>
      </div>
      <img src={main} alt='kawan kos' className='img main-img' />
    </Wrapper>
  )
}

export default Landing
