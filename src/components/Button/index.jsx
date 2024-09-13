/* eslint-disable react/prop-types */
import styles from './Button.module.css'
import { useNavigate } from 'react-router-dom';

function Button({children, value}) {

    const navigate = useNavigate()

    return (
        <button
            className={styles.button}
            onClick={() => {
                navigate(`${value}`)
            }}
        >
            {children}
        </button>
    );
}

export default Button
