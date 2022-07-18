import PropTypes from 'prop-types'
import '../../styles/Welcome.css'

//Comment est défini l'objectif 'scoreGoal' ?????? Ici , fixé arbitrairement à 0.10
function Welcome({ userName, todayScore }) {
    const scoreGoal = 0.10

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
    userName: PropTypes.string,
    todayScore: PropTypes.number
}

export default Welcome