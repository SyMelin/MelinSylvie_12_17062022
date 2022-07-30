/** Class representing a user */
export class User {
    /**
     * Create a user.
     * @param { Array } data - The user's data
     */
    constructor (data) {
        this.mainData = data[0];
        this.activity =  data[1];
        this.averageSessions = data[2];
        this.activities = data[3];
        this.todayScore = data[4];
        this.keyData = data[5];
    }
}