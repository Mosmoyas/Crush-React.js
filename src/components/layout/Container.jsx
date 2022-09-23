import styles from "./container.module.css"
const Container = ({ children }) => {
    return (
        <div className={styles.fixed}>{children}</div>
    )
}

export default Container;