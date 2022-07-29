export class User {
    constructor (data) {
        this.mainData = data[0];
        this.activity =  data[1];
        this.averageSessions = data[2];
        this.activities  = data[3];
        this.todayScore = data[4];
        this.keyData = data[5];
    }
}