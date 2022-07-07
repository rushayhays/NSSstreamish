import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";

const Comment = ({ comment }) => {
    
  return (
    <Card >
      <p className="text-left px-2">Posted by: {comment.Id}</p>
      <CardBody>
        <p>
          <strong>Comment</strong>
        </p>
        <p>{comment.message}</p>
      </CardBody>
    </Card>
  );
};

export default Comment;