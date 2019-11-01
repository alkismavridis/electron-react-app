import {Subject} from "rxjs";
const fs = window.require("fs");


export default class App {
    //SECTION FIELDS
    private _list:string[] = [];
    readonly onChange = new Subject<App>();



    //SECTION LIFE CYCLE
    constructor() {
        setInterval(()=>this.loadFiles(), 2000);
    }


    //SECTION GETTERS
    get list(): ReadonlyArray<string> {
        return this._list;
    }


    //SECTION MODIFIERS
    loadFiles() {
        this._list = fs.readdirSync("/home/alkis");
        this.onChange.next(this);
    }
}
