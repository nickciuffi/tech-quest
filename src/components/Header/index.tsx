import styles from './styles.module.scss';
import Link from 'next/link';

type HeaderProps = {
  theme: 'blue' | 'purple' | 'red' | 'green';
};

export default function Header(props: HeaderProps) {
  function findClass(text: string): string {
    return Object.keys(styles).find((e) => e === text);
  }

  return (
    <div className={`${styles.background} ${styles[findClass(props.theme)]}`}>
      <Link href="/">
        <h2>TECH QUEST</h2>
      </Link>
    </div>
  );
}
