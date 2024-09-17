import Chart from './Chart/Chart';
import styles from './Spending.module.css';
const Spending = () => {
    return (
        <div className={styles.container}>
            <h5 style={{ color: "black", opacity: "0.9" }}>  Spending - Last 7 days</h5>
            <Chart />
            <div className={styles.thinline}></div>

            <div className={styles.footer}>
                <div>
                    <p style={{ fontSize: "0.60rem", opacity: "0.7" }}> Total this month</p>
                    <h3>  $478.33 </h3>
                </div>
                <div style={{ margin: "16px" }}>
                    <p className={styles.precentage}>   +2.4%
                    </p>
                    <p style={{ fontSize: "0.60rem", opacity: "0.7" }}>   from last month
                    </p>
                </div>

            </div>
        </div>);
}

export default Spending;