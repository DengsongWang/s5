import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

class CommentData extends PureComponent {
  render() {
    const { nickName, time, detail} = this.props;
    return (
      <div className="comment">
        
          <Container
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "#BFA524",
              borderWidth:"3px"
            }}
          >
            <strong style={{ fontSize: "25px" }}>
              <p className="nickname">{nickName}</p>
            </strong>

            <p className="time" style={{ fontSize: "13px" }}>
              {this.getTime(time)}
            </p>

            <p
              className="detail"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                fontSize: "20px",
              }}
            >
              {detail}
            </p>
          </Container>
        
      </div>
    );
  }

  getTime(time) {
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");
    return `${year}.${month}.${day}  ${hour}:${minute}:${second}`;
  }
}

Comment.propTypes = {
  nickName: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  detail: PropTypes.string.isRequired,
};

export default CommentData;
