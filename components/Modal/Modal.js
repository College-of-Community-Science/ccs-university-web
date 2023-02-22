
import styles from './Modal.module.scss'

import { MdClose } from 'react-icons/md'

export default function Modal ({show, setShow}) {
    return (
        <div className={styles.modalScreen} style={show ? null : {opacity: 0, pointerEvents: 'none'}}>
            <div className={styles.modalContainer} style={show ? null : {opacity: 0, transform: 'translateY(1rem)'}}>
                <div className={styles.closeBtn} onClick={() => setShow(false)}>
                    <MdClose />
                </div>
                <h1>College of Community Science</h1>
                <h2>Swami Keshwanand Rajasthan Agricultural University, Bikaner</h2>

                <h3>Admission Notice <br/>(Session 2023-24)</h3>

                <p>Applications are invited for the following courses:</p>

                <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th style={{textAlign: 'right'}}>Qualification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>B.Sc(Hons.) Community Science</td>
                            <td rowSpan={2} style={{textAlign: 'right'}}>10+2 science with minimum 50% marks</td>
                        </tr>
                        <tr>
                            <td>B.Sc.(Hons.) Food Nutrition and Dietetics</td>
                        </tr>
                    </tbody>
                </table>

                <p>Eligible candidate may contact to the college for admission between 10:00 AM to 5:00 PM.</p>
                <p>
                    <b>Contact: </b> 
                    <a href='tel:09413940444'>09413940444</a>, <a href="tel:01512250692">0151-2250692</a>(O)
                </p>

                <h4>DEAN</h4>
            </div>
        </div>
    )
}