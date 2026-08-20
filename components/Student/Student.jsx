import styles from './Student.module.css';
import Saitan from './Saitan.jpg';
import PropTypes from 'prop-types';

export default function Student(prop) {
    return(
        <div className={styles.student}>
            <img src={Saitan} alt="Student Image" className={styles.studentImg} />    
            <p>Name : {prop.name}</p>
            <p>Age : {prop.age}</p>
            <p>School : {prop.school ? "Yes" : "No"}</p>
        </div>
    )
}

Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    school : PropTypes.bool,
}

Student.defaultProps = {
    name : "Unknown",   
    age : 0,
    school : false,
}