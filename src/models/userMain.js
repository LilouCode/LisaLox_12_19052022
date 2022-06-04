export default class userMain{
    constructor({
        id,
        keyData,
        score,
        userInfos
    }) {
        this._id = id;
        this._keyData = keyData;
        this._score= score;
        this._userInfos = userInfos;
    }

    get id (){
        return this._id;
    }
    get keyData (){
        return this._keyData;
    }
    get score (){
        return this._score;
    }
    get userInfos (){
        return this._userInfos;
    }
    set id (newId){
        this._id = newId;
    }
    set keyData (newkeyData){
        this._keyData = newkeyData;
    }
    set score (newScore){
        this._score = newScore
    }
    set userInfos (newUserInfos){
        this._userInfos = newUserInfos;
    }
}