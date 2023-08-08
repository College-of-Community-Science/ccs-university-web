import styles from './ScrollMessage.module.scss'

export default function ScrollMessage ({ onClickMethod }) {
    return (
        <div className={styles.messageStrip}>
            <div className={styles.messageContainer}>
                <div className={styles.slider}>
                    {[...Array(4).keys()].map((i) => {
                        return (
                            <a href='https://news.ccsbikaner.in/2023/07/share-news.html' target='_Blank' rel='noreferrer' key={i}>Submission of abstracts and full length papers in National Conference on “Perspective of Millets in Global Scenario” to be organized during August 25-26, 2023 is now 10th August, 2023</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}