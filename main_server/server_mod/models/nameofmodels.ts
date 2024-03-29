import { intr, User, Post, Comments } from "../interfaces/interfaces"

export enum ModelNames{
    User="First_Users",
    Post="First_Posts",
    Comments="Comments_Angular"
}
export const obj1=["userId","postId"]

export const confingD:intr={
   [ModelNames.User]:{
       class:  'User1',
       name:"users",
       key:"userId",////ключи в зависимых моделях,
       otherFields:[],///ключи других моделей в таблице,
       fields:[{'name':'string'},{'email':'string'},{'password':"string"},{
           'id_u':'number'}],
       mainkey:'id_u' ,
       has:[],
       validators:[{letters:'name',email:'email'}]////property name- is rule(only letter), property value is the name of field
   },
   [ModelNames.Post]:{
       class:  'Post1',
       name:"posts",
       key:"postId",
       fields:[],
       otherFields:[],///ключи других моделей в таблице,
       mainkey:'id',
       has:[],    
       validators:[{letters:'title'}]
   },
   [ModelNames.Comments]:{
      class:'Comments1',
      name:"comments",
      mainkey:'id_c',
      key:'comment_id',
      has:[],
      otherFields:[],
      fields:[],
      validators:[]
   }

}
confingD[ModelNames.Post].otherFields= [{/// depend on 
    key:confingD[ModelNames.User].key,model:confingD[ModelNames.User],modelName:ModelNames.User
}]

confingD[ModelNames.User].has= [{/// models which depend on  User (has users key in their models)
    key:confingD[ModelNames.User].key,modelName:ModelNames.Post,model:confingD[ModelNames.Post]
}]
confingD[ModelNames.Post].has= [{/// depend on 
    key:confingD[ModelNames.Comments].key,model:confingD[ModelNames.Comments],modelName:ModelNames.Comments
}]

confingD[ModelNames.Post].fields=[{"p1":"string"},{"title":'string'},
{"videoUrl":"string"},{[confingD[ModelNames.User].key]:"number"},{'id':'number'}]

/**
 * Comments
 */
confingD[ModelNames.Comments].fields=[
    {"sender":"string"},{"receiver":'number'},
    {"message":"string"},{[confingD[ModelNames.Comments].mainkey]:'number'},
    {[confingD[ModelNames.Post].key]:'number'}
]
confingD[ModelNames.Comments].otherFields=[
   {key:confingD[ModelNames.Post].key,model:confingD[ModelNames.Post],modelName:ModelNames.Post},
]
/** */
Object.freeze(confingD);

export type names="users" | "posts"|'comments'
export type keys="postId"|"userId"
export type Models=User&Post&Comments
