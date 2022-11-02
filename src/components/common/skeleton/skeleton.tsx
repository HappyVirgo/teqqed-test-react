import styles from './skeleton.module.scss'

export const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.loadingImageMask} />
      <div className={styles.maskGroup}>
        <div className={styles.loadingMask}></div>
        <div className={styles.loadingMask}></div>
        <div className={styles.loadingMask}></div>
      </div>
    </div>
  )
}
