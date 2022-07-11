import React from "react";
import { Card, CardBody } from "reactstrap";
import Comment from "./Comment.js";
import { Link } from "react-router-dom";


const SingleUserVideo = ({ video }) => {

  return (
    <Card >

      <p className="text-left px-2">
        
      </p>
      <CardBody>
        <iframe className="video"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <p>
          <Link to={`/videos/${video.id}`}>
            <strong>{video.title}</strong>
          </Link>

        </p>
        
        <p>{video.description}</p>
        <div className="row justify-content-center">
          {video.comments == null?<p>emptyspace</p>:video.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />))
          } 
        </div>
      </CardBody>
    </Card>
  );
};

export default SingleUserVideo;