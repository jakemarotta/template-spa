import logo from '@/assets/images/logo.svg';
import styles from './AppLogo.module.scss';

export const AppLogo = () => {
  return (
    <img role="img" src={logo} className={styles.AppLogo} alt="logo" />
  )
}
