import PropTypes from 'prop-types'
import '../../styles/Welcome.css'


/**
 * Welcome properties
 * 
 * @typedef { Object } Props
 * @prop { String } userName - Firstname of the user
 * @prop { Number{0-1} } todayScore  - Today score of the user
 */

/**
 * React component: an element that welcome the user and congratulate them if they reached their goal
 * 
 * @type { React.FC<Props> }
 * @returns { React.ReactElement }
 */
function Welcome({ userName, todayScore }) {
    const scoreGoal = 0.10 //Here scoreGoal is arbitrarily set at 0.10. However it should be defined (by the user maybe?)

    return (
        <div className="welcome">
            <h1 className="welcome__title">Bonjour <span className="welcome__userName">{userName}</span></h1>
            { todayScore >= scoreGoal &&
                <p className="welcome__congrat"> Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            }
        </div>
    )
}

Welcome.propTypes = {
    /** Firstname of the user */
    userName: PropTypes.string,
    /** Today score of the user */
    todayScore: PropTypes.number
}

Welcome.defaultProps = {
    userName: '',
    todayScore: 0
}

export default Welcome