import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  Row,
  Col,
  Figure,
  Button,
  Image,
  Dropdown,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { PureComponent } from "react";

import { useState, useEffect, useFetch } from "react";
import CommentData from "./CommentData";
import { auto } from "@popperjs/core";

class Comment extends PureComponent {
  constructor() {
    super();
    this.state = {
      title: "Comments",

      comments: [
        {
          time: new Date(2022, 6, 20, 21, 2, 30),
          nickName: "DW",
          detail: "That is awesome!",
        },
      ],
      text: "",
    };
  }

  render() {
    const { title, comments, text } = this.state;

    return (
      <div className="comment" style={{ borderWidth: "0px" }}>
        <h1>{title}</h1>
        <Container className="content" style={{ paddingTop: "30px" }}>
          <div style={{ paddingBottom: "30px" }}>
            {comments.map((item, index) => {
              return (
                <CommentData
                  key={item.time.getTime()}
                  {...item}
                  style={{ paddingBottom: "30px" }}
                />
              );
            })}
          </div>
        </Container>

        <div className="newComment">
          <div className="text" style={{ display: "flex" }}>
            <textarea
              value={text}
              onChange={(e) => this.changeText(e)}
              placeholder="Please enter comments here"
              style={{ backgroundColor: "white" }}
            />
          </div>

          <div
            className="submit"
            onClick={() => {
              this.addComment();
            }}
            style={{ margin: "auto", marginTop: "20px" }}
          >
            Submit
          </div>

          <div
            className="submit"
            style={{ margin: "auto", marginTop: "20px" , width:"155px"}}
          >
            <Link to="/Otherswork" style={{ backgroundColor: "rgba(0,0,0,0)", color: "black" }}>
                Back to other's work
            </Link>
          </div>
        </div>
      </div>
    );
  }

  changeText(e) {
    this.setState({ text: e.target.value });
  }

  addComment() {
    if (!this.state.text) {
      alert("Please enter comment content");
      return;
    }
    let detail = this.state.text;
    this.setState({ text: "" });
    let newComment = {
      time: new Date(),
      nickName: "Anonymous",
      detail,
    };
    this.setState({
      comments: [newComment, ...this.state.comments],
    });
  }
}

Comment.propTypes = {};

export default Comment;
