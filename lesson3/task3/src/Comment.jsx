import React from "react";
import "./avatar.scss";
import moment from "moment";
import UserInfo from "./UserInfo";

const formatDate = date => moment(new Date(date)).format("DD MMM YYYY");

console.log(formatDate(new Date()))

function Comment(props) {
    console.log(props.date)
  return (
    <div className="comment">
      <UserInfo user={props.user}/>
      <div className="comment__text">
        {props.text}
      </div>
      <div className="comment__date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

export default Comment;