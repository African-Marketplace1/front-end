import React, { useEffect, useState } from "react";
import UserProducts from "./UserProducts";
import axios from "axios";
import { useParams } from "react-router-dom";
import Top from "./Top.js";
import CircularProgress from "@mui/material/CircularProgress";

function ForeignUser(props) {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  console.log(id);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://africanmarketplace-1.herokuapp.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.dir(err);
        setIsFetching(false);
      });
    console.log(user);
  }, []);
  return (
    <div className="container py-5">
      {isFetching ? (
        <CircularProgress />
      ) : (
        <div>
          {user && (
            <div>
              <Top user={user} />
              <UserProducts user={user} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ForeignUser;
