import axios_o from 'axios';

export default class ItemService
{

     RetrieveItems(){
        return axios_o.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.data)
    }

    DeleteItem(id){
         return axios_o.delete("https://jsonplaceholder.typicode.com/posts/"+id).then(response=>response.data);
    }

    RetrieveItem(id){

         return axios_o.get("https://jsonplaceholder.typicode.com/posts/"+id).then(response=>response.data);
    }

    UpdateItem(id,title,body,userId){

         return axios_o.put("https://jsonplaceholder.typicode.com/posts/"+id,{
             userId: userId,
             title:title,
             body:body
         }).then(response=>
             response.data
         );

    }

    addItem(title,body,userId){

        return axios_o.post("https://jsonplaceholder.typicode.com/posts/",{
            userId: userId,
            title:title,
            body:body
        }).then(response=> {
             return {"message":"success","data":response.data}
            }
        ).catch(error=>{
            return {"message":"error","data":null}
        })


    }




}
