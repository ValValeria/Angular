import {ModelNames} from '../../nameofmodels'
import { BaseMainClass } from '../BaseMainClass';
import { User, Unique } from '../../../interfaces/interfaces';

type user_t=keyof User;
export  class User1 extends BaseMainClass<User> implements User {
    email: string;
    name: string;
    password: string;
    id_u: number;
    static fmodelName:ModelNames=ModelNames.User
    public fhasMany:ModelNames[]=[ModelNames.Post]
    public fbelongsTo:ModelNames[]=[]
    public auth:boolean;
    public classname:string=`User1`
    constructor(obj:User={},public fconfig?:Unique|null, attr?:user_t[],public loadedModel?:boolean){
         super(obj,fconfig,User1.fmodelName,attr,loadedModel)  
    }
}

const nUser=new User1({});

export{nUser as U}