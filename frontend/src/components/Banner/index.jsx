/* eslint-disable react/prop-types */
import styles from './Banner.module.css'

function Banner({image, title}) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className={styles.banner}>
            <h1>{title}</h1>
        </div>
    );
}

export default Banner
