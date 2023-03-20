import landingPageStyles from '../styles/landingpage.module.css';

export default function Home() {
  return (
    <>
      <div className={landingPageStyles.topbar}>
        <div className={landingPageStyles.topbarLogo}>
          <h1><a href="#">ExTracker</a></h1>
        </div>
        <ul className={landingPageStyles.topbarLinks}>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
        <div className={landingPageStyles.userReg}>
          <button className={landingPageStyles.loginButton}>Log In</button>
          <button className={landingPageStyles.rgstrButton}>Sign Up</button>
        </div>
      </div>
    </>
  );
}
