export default class userPerformance{
    constructor({
        data,
        kind,
        userId
    }) {
        this._data = data;
        this._kind = kind;
        this.userId = userId;
    }

    get data () {
        return this._data ;
    }
    get kind() {
        return this._kind ;
    }
    get userId() {
        return this._userId ;
    }
    
    set data (newData){
        this._data = newData ;
    }
    set kind (newKind){
        this._kind = newKind ;
    }
    set userId (newUserId){
        this._userId = newUserId ;
    }
}