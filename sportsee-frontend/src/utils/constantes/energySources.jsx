import caloriesIcon from '../../assets/fire.svg'
import proteinIcon from '../../assets/chicken.svg'
import carbsIcon from '../../assets/apple.svg'
import fatIcon from '../../assets/cheeseburger.svg'


/** @constant
    @type { Object.<Object>}
*/
const energySources = {
    calorie: {
        name: 'Calories',
        img: caloriesIcon
    },
    protein: {
        name: 'Protéines',
        img: proteinIcon

    },
    carbohydrate: {
        name: 'Glucides',
        img: carbsIcon
    },
    lipid: {
        name: 'Lipides',
        img: fatIcon
    }
}

export default energySources