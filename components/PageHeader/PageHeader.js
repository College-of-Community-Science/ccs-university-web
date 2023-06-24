
import styles from './PageHeader.module.scss';

import bgImage from '../../assets/images/facultyImage.png'

export default function PageHeader () {
    return (
        <div className={styles.pageHeader} style={{backgroundImage: `url(${bgImage.src})`}}>
            <h1>Page Title</h1>
            <p>Page Subtitle</p>
        </div>
    )
}