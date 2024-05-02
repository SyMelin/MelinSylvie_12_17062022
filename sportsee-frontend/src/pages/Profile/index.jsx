import Welcome from "../../components/Welcome"
import NumbersWrapper from "../../components/NumbersWrapper"
import urls from "../../utils/constantes/urls" // not used in the GitHub Pages version of this project
import { useFetch, useHandleResize } from '../../utils/hooks' // useFetch is not used in the GitHub Pages version of this project
import { User } from '../../models/user'
import mockedData from "../../utils/constantes/mockedData" // NOTE: This data import is for showcase purposes only and replaces API calls in the GitHub Pages version of this project.
import '../../styles/Profile.css'


/**
 * React component: Page profile of the user
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function Profile() {
    const { userId } = {userId: 12} //to be substituted by " const {userId}  = useParams() " when the router is set
    // const { data, isLoading, error } = useFetchData(urls(userId)) // when the server is set. Not used in the GitHub Pages version of this project
    const isLoading = false // workaround specifically for the GitHub Pages version of this project
    const error = false // workaround specifically for the GitHub Pages version of this project
    /**
     * Note: As GitHub Pages doesn't support server-side operations, the data that would normally be fetched 
     * from the server using axios is instead imported directly from a local mock data file. 
     * This is a workaround specifically for the GitHub Pages version of this project and is not representative 
     * of how the application functions in a production environment.
     */
    const { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } = mockedData;  // only for showcase purposes on GitHub Pages
    // getUserData mocks the data received from the server for the user with the id 'userId'
    const getUserData = (id) => {
        const mainData = USER_MAIN_DATA.find(user => user.id === id);
        return [
            mainData,
            USER_ACTIVITY.find(user => user.userId === id),
            USER_AVERAGE_SESSIONS.find(user => user.userId === id),
            USER_PERFORMANCE.find(user => user.userId === id),
            mainData.todayScore,
            mainData.keyData
        ]
    }
    const data = getUserData(userId) // only for showcase purposes on GitHub Pages
    
    // EVENT ON RESIZE :
    // Recharts' ResponsiveContainer not working
    // so use the state variable 'windowDimensions' and the hook useHandleResize()
    const { windowDimensions } = useHandleResize()

    if (error) {
        return <div>Error: Something went wrong</div>
    }
    
    if (!isLoading) {
        /* Correction of : 
            //const [ mainData, activity, averageSessions, activities, todayScore, keyData ] = data
            //const user = { mainData, activity, averageSessions, activities, todayScore, keyData }
        */

        const user = new User(data) // modification following the project's presentation

        return (
            <div className="dashboard">
                <div className="dashboardInner">
                    <Welcome
                        userName={user.mainData.userInfos.firstName}
                        todayScore={user.todayScore}
                    />
                    <NumbersWrapper
                        user={user}
                        windowDimensions={windowDimensions}
                    />
                </div>
            </div>
        )
    } 
}

export default Profile