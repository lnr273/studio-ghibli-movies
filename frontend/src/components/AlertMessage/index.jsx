import styles from "./AlertMessage.module.css";

function AlertMessage({children}) {
    return (
        <div className={styles.message}>{children}</div>
    );
}

export default AlertMessage;
