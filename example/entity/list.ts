import 'reflect-metadata';
const Router = Symbol();
function Log(){
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        let params = Reflect.getMetadata('design:type', target, name);
        console.log(params);
    }
}
interface noticeItem {
    id: string
    title: string
    sendTime: string
    sendUserName?:string
    timing?:boolean
}
export default class List{
    private url:string
    private data:noticeItem[]
    private api:Promise<any>
    constructor(url:string,api:Promise<any>) {
        this.url = url;
        this.data = [];
        this.api = api;
    }
    @Log()
    fetchData(){
        return 'ddddd';
    }
    pushData(data:noticeItem) {
        //todo
    }
    delData(id:string) {

    }
    findItemById(id:string) {

    }
}