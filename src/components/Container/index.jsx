/* eslint-disable react/prop-types */
import styles from './Container.module.css'

function Container({children, title}) {
    return (
        <>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.container}>
            {children}
        </div>
        </>
    );
}

export default Container
