import React from "react";
import ItemService from "../Services/ItemService";

export default class Edit extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            userid:''
        ,title:'', body:''
        }

    }

    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h1>Edit Post</h1>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" className="form-control" defaultValue={this.state.title} onChange={this.handleTitleChanged}  />
                                    </div>

                                    <div className="form-group">
                                        <label>Body</label>
                                        <input type="text" className="form-control" defaultValue={this.state.body} onChange={this.handleBodyChanged} />
                                    </div>

                                    <div className="form-group">
                                        <label>UserId</label>
                                        <input type="text" className="form-control" defaultValue={this.state.userid} onChange={this.handleUserIdChanged} />
                                    </div>

                                    <input type="button" className="btn btn-outline-success" value="update" onClick={this.handleUpdate} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleUserIdChanged=(e)=>
    {
        this.setState({userid:e.target.value})
    }

    handleBodyChanged=(e)=>
    {
        this.setState({body:e.target.value})
    }

    handleTitleChanged=(e)=>
    {
      this.setState({title:e.target.value})
    }

    handleUpdate=()=>{

      //  console.log(this.state.title);
      //  console.log(this.state.body);
      //  console.log(this.state.userid);
        this.itemservice=new ItemService();
        this.itemservice.UpdateItem(this.props.match.params.id,this.state.title,this.state.body,this.state.userid).then(
            res=>{
                console.log(res);
            }
        );

    }


    componentDidMount() {
        this.itemservice=new ItemService();
        this.itemservice.RetrieveItem(this.props.match.params.id).then(res=>{
            console.log(res);
            this.setState({userid:res.userId,title:res.title,body:res.body});
        });

    }

}