import { FC } from 'react';
import styles from './logo.module.scss';

interface ILogoProps {
  size: number;
}

const Logo: FC<ILogoProps> = ({ size }) => {
  return (
    <div style={{ width: size + 25, height: size + 25 }} className={styles.logo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 128 128"
        viewBox="0 0 128 128"
        width={size || 48}
        height={size || 48}
        className={styles.svgLogo}
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* <stop offset="0%" style={{ stopColor: ' #FF3355' }} />
            <stop offset="100%" style={{ stopColor: '#AA1122' }} />  */}
            <stop offset="0%" style={{ stopColor: 'rgb(188, 12, 241)' }} />
            <stop offset="100%" style={{ stopColor: 'rgb(212, 4, 4)' }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad)"
          d="M111.1,78.1c-3.9-0.4-7.8,0.8-11.2,3.3c-0.4,0.3-0.8,0.4-1.3,0.5c0-0.1-0.1-0.3-0.1-0.4  c-11.7-30.6,2-76.8,2.2-77.2c0.3-0.9,0-1.9-0.7-2.5c-0.7-0.7-1.7-0.9-2.6-0.5c-38,13.7-63.8,50.5-66.8,55c-2.5-2.2-5.4-3.6-8.6-4  C11.8,51,2.8,61,1.8,74.6c-0.9,13.6,6.6,25.6,16.8,26.8c1.3,0.2,2.7,0.1,4-0.1c1.2-0.2,2.5,0.1,3.5,0.8c1.1,0.8,2.3,1.4,3.7,1.9  c9.7,3.3,21.7-4.3,26.6-17c5-12.7,1.1-25.7-8.6-29c-3.7-1.3-7.8-0.9-11.7,0.7C35.6,59,35.2,59,34.7,59c2.4-3.6,25.9-37,59.8-51.3  C91.3,20,84.4,53.2,92.4,79.3c-2.5-1.1-5.1-1.5-7.7-1.2C74.5,79.2,67.9,91,69.9,104.5c2.1,13.5,12,23.5,22.3,22.4  c1.4-0.1,2.6-0.5,3.9-1c1.1-0.5,2.4-0.4,3.6,0c1.3,0.5,2.6,0.9,4,1c10.2,1.1,20.2-9,22.3-22.4C127.9,91,121.3,79.2,111.1,78.1z"
        ></path>
      </svg>
    </div>
  );
};

export default Logo;
