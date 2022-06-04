export default class userAverageSessions {
    constructor({
        sessions,
        userId
    }){
        this._sessions = sessions;
        this._userId = userId;
    }

    get sessions(){
        return this._sessions ;
    }

    get userId(){
        return this._userId ;
    }

    set sessions (newSessions){
        this._sessions = newSessions;
    }

    set userId (newUserId){
        this._userId = newUserId;
    }
}