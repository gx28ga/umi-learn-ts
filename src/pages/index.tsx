import styles from './index.less';
import { connect } from 'umi';

console.log(connect);

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
