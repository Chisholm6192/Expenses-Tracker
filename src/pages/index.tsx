import Image from 'next/image';
import styles from '../styles/landingpage.module.css';
import creditCard from '../images/creditcard.png';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

export default function LandingPage() {
  const [opened, { toggle }] = useDisclosure(false);  
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <div className={styles.mainSection}>
        <div className={styles.topbar}>
          <a href="#">
            <div className={styles.topbarBrand}>
              <div className={styles.topbarLogo}>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
              </div>
              <h1>ExTracker</h1>
            </div>
          </a>
          <ul className={styles.topbarLinks}>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#features">Features</a></li>
          </ul>
          <div className={styles.userReg}>
            <button className={styles.loginButton}>Log In</button>
            <button className={styles.rgstrButton}>Sign Up</button>
          </div>
          <div className={styles.burgerMenuContainer}>
            <Burger color="white" className={styles.burger} opened={opened} onClick={toggle} aria-label={label} />
            <div className={opened ? styles.menuActive : ""}>
              {opened ? (
                <div className={styles.burgerContentContainer}>
                  <div className={styles.topbar}>
                    <a href="#">
                      <div className={styles.topbarBrand}>
                        <div className={styles.topbarLogo}>
                          <span className={styles.circle}></span>
                          <span className={styles.circle}></span>
                        </div>
                        <h1>ExTracker</h1>
                      </div>
                    </a>
                    <Burger color="white" className={styles.burger} opened={opened} onClick={toggle} aria-label={label} />
                  </div>
                  <ul className={styles.topbarLinksBurger}>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a>Log In</a></li>
                    <li><a>Sign Up</a></li>
                  </ul>
                </div>
              ) : ( 
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.mainHero}>
          <h1>An easy way to manage <span>your expenses</span></h1>
          <h6>Keep track of your spending across all bank accounts with ExTracker</h6>
          <button className={styles.mainButton}>Get Started</button>
        </div>
        <div className={styles.mainImageContainer}>
          <div className={styles.mainImage}></div>
          <div className={styles.mainBackgroundExtension}></div>
        </div>
      </div>
      
      <div className={styles.overviewSection}>
        <div className={styles.overviewHero}>
          <h1>Keep tabs on your expenses</h1>
          <h6>We help you easily connect all your cash, credit, loan and investment accounts.  You can see your expenses and complete financial picture in ExTracker</h6>
          <button className={styles.overviewButton}>Get Started</button>
        </div>
        <div className={styles.overviewImageContainer}>
          <Image
            src={creditCard}
            alt="Credit Card"
            className={styles.overviewCardImage}
          ></Image>
          <div className={styles.overviewImage}></div>
        </div>
      </div>

      <div className={styles.featuresSection}>
        <div className={styles.featuresHero}>
          <h1>We Make Your Financial <span>More Well Organized</span></h1>
          <h6>We have features that will make it easier for you to manage your financial stability. Balance, budget and plan saving for the future. Your satisfaction is our top priority.</h6>
        </div>

        <div className={styles.featuresContainer}>
          <div className={styles.box}>
            <div className={styles.temporaryPlaceholder}></div>
            <div className={styles.content}>
              <h3>Balance</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.temporaryPlaceholder}></div>
            <div className={styles.content}>
              <h3>Budget</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.temporaryPlaceholder}></div>
            <div className={styles.content}>
              <h3>Save</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
