import styles from './VideoList.module.css';

const VideoList = ({ title, children }) => {
  return (
    <div className={`${styles.wrapperList} ${styles.margin}`}>
      <h1>{title}</h1>
      {children || <p>No hay videos</p>}
    </div>
  );
};
export default VideoList;
