import DarkVeil from "@/components/DarkVeil"
import logo from '../../../public/logo.png'
import Image from "next/image"
import { FaDiscord} from "react-icons/fa"
import styles from './page.module.css'
import Magnet from '@/components/Magnet'
import TextType from '@/components/TextType';
import Header from '@/app/home/components/header/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <DarkVeil
          hueShift={340}
          scanlineIntensity={0.3}
          speed={0.5}
          warpAmount={1}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
              <Image src={logo} alt="Logo" width={400} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />

            <Magnet magnetStrength={12} padding={20} >
              <a href="https://discord.com/oauth2/authorize?client_id=1409491387006844928" style={{ textDecoration: 'none' }}>
                <button className={styles.inviteButton}>
                  <FaDiscord className={styles.discordIcon} />
                  <span>Convidar</span>
                </button>
              </a>
            </Magnet>
          </div>
          <div className={styles.textContent}>
            <p>Um <span className={styles.bot}>bot de música</span> do discord que toca de tudo</p>
            <div className={styles.players}>
              <TextType
                text={[
                  'YouTube',
                  'Spotify',
                  'SoundCloud',
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={1500}
                className={styles.textType}
                textColors={['#FF0000', '#1DB954', '#FF5500', '#FFFFFF']}
                variableSpeed={{ min: 50, max: 150 }}
              >
              </TextType>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}