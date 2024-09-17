import styles from './Balance.module.css';
import icon from './logo.svg'
const Balance = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p style={{ fontSize: "0.60rem", opacity: "0.75" }}>My balance</p>
                <h4 style={{ fontSize: "1.1rem", marginTop: "5px" }}> $921.48 </h4>
            </div>
            <img src={icon} className={styles.circle} />

        </div>);
}

export default Balance;