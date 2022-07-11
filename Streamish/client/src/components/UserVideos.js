import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideosByCertainUser } from "../modules/userManager";
import { useParams } from "react-router-dom";
import SingleUserVideo from "./SingleUserVideo";

import "../styles/VideoList.css";

const UserVideos = () => {
//   const [videos, setVideos] = useState([]);
  const [user, setUser] = useState({});
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true)
  
  

  useEffect(() => {
    getAllVideosByCertainUser(id).then(user => {
        setUser(user);
        setIsLoading(false);
    })
    
  }, []);



  return(
   <div>
        {isloading == true?<p>LOADING...</p>:<div>
        <p>{user.name}</p>
        <div className="container">
            <div className="row justify-content-center">
                {user.userVideos.map((video) => (
                    <SingleUserVideo video={video} key={video.id} />
                ))}
            </div>
        </div>
    </div>
          } 

   </div>
  );
  
}

export default UserVideos;