import styles from './ScrollMessage.module.scss'

export default function ScrollMessage ({ onClickMethod }) {
    return (
        <div className={styles.messageStrip}>
            <div className={styles.messageContainer}>
                <div className={styles.slider}>
                    {[...Array(4).keys()].map((i) => {
                        return (
                            <p key={i} onClick={onClickMethod}>Intrested candidates having 10+2(Science) with minimum 50% may apply for admission in B.Sc.(Hons.) Community Sc. & B.Sc.(Hons.) FND latest by 27th Feb 2023</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}