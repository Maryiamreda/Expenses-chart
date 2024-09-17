import Balance from '../myBalance/Balance';
import Spending from '../spending/Spending';
import styles from './wrapper.module.css';


const Wrapper = () => {
    return (
        <div className={styles.container}>
            <Balance />
            <Spending />

        </div>);
}

export default Wrapper;