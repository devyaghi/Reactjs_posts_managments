import React from "react";
import ItemService from "../Services/ItemService";

export default class Add extends React.Component{


    constructor(props) {
        super(props);
        this.state={
            userid:''
            ,title:'', body:'',
            show_alert_success:false,
            show_alert_fail:false,
            show_loader:false
        }
    }

    handleTitleChanged=(e)=>
    {
        this.setState({title:e.target.value})
    }

    handleUserIdChanged=(e)=>
    {
        this.setState({userid:e.target.value})
    }

    handleBodyChanged=(e)=>
    {
        this.setState({body:e.target.value})
    }

    handleaddprocess=()=>{


        console.log(this.state.userid);
        console.log(this.state.title);
        console.log(this.state.body);

        this.setState({show_alert_success:false,show_alert_fail:false,show_loader:true});

        this.itemservice=new ItemService();
        this.itemservice.addItem(this.state.title,this.state.body,this.state.userid).then(
            res=>{
                //console.log(res);

                this.setState({show_loader:false});

                if (res.message==="success"){
                    this.setState({show_alert_success:true});
                   // console.log("yes")
                }else {
                    this.setState({show_alert_fail:true});
                   // console.log("no")
                }


            }

        );

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                   <div className="col-sm-12">
                       <div className="card">
                           <div className="card-header">
                               <h1>Create New Post</h1>
                           </div>
                           <div className="card-body">
                               <form>

                                   {this.state.show_alert_success &&
                                   <div className="alert alert-info alert-dismissible fade show">
                                       process complete successfully
                                       <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                           <span aria-hidden="true">&times;</span>
                                       </button>
                                   </div>
                                   }

                                   {this.state.show_alert_fail &&
                                   <div className="alert alert-danger alert-dismissible fade show">
                                       Error
                                       <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                           <span aria-hidden="true">&times;</span>
                                       </button>
                                   </div>
                                   }



                                   <div className="form-group">
                                       <label>Title</label>
                                       <input type="text" className="form-control" onChange={this.handleTitleChanged}  />
                                   </div>

                                   <div className="form-group">
                                       <label>Body</label>
                                       <input type="text" className="form-control" onChange={this.handleBodyChanged} />
                                   </div>

                                   <div className="form-group">
                                       <label>UserId</label>
                                       <input type="text" className="form-control" onChange={this.handleUserIdChanged} />
                                   </div>



                                   <button className="btn btn-outline-success" type="button" onClick={this.handleaddprocess}>

                                       {this.state.show_loader &&
                                       <span className="spinner-grow spinner-grow-sm" role="status"
                                             aria-hidden="true"></span>
                                       }
                                       Add

                                   </button>



                               </form>
                           </div>
                       </div>

                   </div>
                </div>
            </div>
        )
    }


}