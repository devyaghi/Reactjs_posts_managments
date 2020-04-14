import React from "react";
import ItemService from '../Services/ItemService';


export default class Posts extends React.Component{

    constructor(props) {
        super(props);
        this.state={post_data:[]}
    }

    handleDeletePost=(id)=>{
       // console.log(id);
      this.itemservice=new ItemService();
      this.itemservice.DeleteItem(id).then(result=>{
         // console.log(result);
         let new_posts=this.state.post_data.filter(post=>post.id!==id);
         //console.log(new_post);
         this.setState({post_data:new_posts});
      });

    }

    handleEditPost=(id)=>{
       // console.log(id);
        window.location="Edit/"+id;
    }

    render() {

        let display_data=this.state.post_data.map(
            p=>{
                return <tr >
                         <td>{p.id}</td>
                         <td>{p.title}</td>
                         <td>{p.body}</td>
                         <td>{p.userId}</td>
                         <td>
                             <input className="btn btn-sm btn-danger btn-block" type="button" value="Delete" onClick={()=>this.handleDeletePost(p.id)}/>
                             <input className="btn btn-sm btn-success btn-block" type="button" value="Edit" onClick={()=>this.handleEditPost(p.id)}/>

                         </td>
                      </tr>
            }
        );

        return (
            <div className="container-fluid">

             <div className="row">
                 <div className="col-sm">
                     <div className="card">
                         <div className="card-header">
                            <div className="row">
                                <div className="col-sm-6">Posts List</div>
                                <div className="col-sm-6">
                                    <div className="float-right">
                                    <a href="/Add" className="btn btn-sm btn-success">Add new post</a>
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className="card-bodyr">
                             <table className="table table-striped table-sm">
                                 <thead className="thead-light">
                                 <tr>
                                     <th>id</th>
                                     <th>title</th>
                                     <th>body</th>
                                     <th>userid</th>
                                     <th>Operations</th>

                                 </tr>
                                 </thead>
                                 <tbody>

                                 {display_data}

                                 </tbody>

                             </table>
                         </div>
                     </div>
                 </div>
             </div>
            </div>
        )
    }

    componentDidMount() {

        this.itemservice=new ItemService();
       // const data=this.itemservice.RetrieveItems();
       // console.log(data);
        this.itemservice.RetrieveItems().then(
            result=>{
                console.log(result);
                this.setState({post_data:result});
            }
        );



    }


}