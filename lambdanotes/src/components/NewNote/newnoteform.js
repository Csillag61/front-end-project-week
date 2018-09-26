import React, { Component } from "react";
import SideBar from "../Sidebar/sidebar";
import { addNote } from "../../actions";
import { connect } from "react-redux";
import "./newnoteform.css";
import { Link } from "react-router-dom";

class NewNoteForm extends Component {
  state = {
    id: -1,
    title: "",
    textBody: "",
    tags:""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addHandler = () => {
    const { title, textBody, tags} = this.state;
    this.props.addNote({ title, textBody, tags });
    this.setState({ title: "", textBody: "", tags:"" });
  };

  render() {
    return <div className="page-container">
        <SideBar />
        <div className="section-container">
          <h1 className="notes-title">Create New Note: </h1>
          <div className="note-container">
            <form className="create-form">
              <textarea placeholder="Title" onChange={this.handleInputChange} className="title-input" value={this.state.title} name="title" />
              <textarea placeholder="Type your note here.." onChange={this.handleInputChange} className="content-input" value={this.state.textBody} name="textBody" />
              <textarea placeholder="Note Tags" onChange={this.handleInputChange} className="title-input" value={this.state.title} name="title" />

              <Link to="/">
                <button className="create-button" type="button" onClick={() => this.addHandler()}>
                  {" "}
                  Save{" "}
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>;
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { addNote }
)(NewNoteForm);
