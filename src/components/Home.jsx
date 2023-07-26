import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import { firestore } from "../firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import Swal from "sweetalert2";

const Home = () => {
  const [task, setTask] = useState([]);

  const getTasks = async () => {
    Swal.showLoading()
    console.log("20");
    await getDocs(
      query(collection(firestore, `blogs`), orderBy("Time", "desc"))
    ).then((snapshot) => {
      console.log("10");
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        key: doc.id,
      }));
      setTask(data);
      console.log(task);
      Swal.close()
    });
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <div className="blog-quote">
        <Typography
          variant=""
          sx={{ color: "rgb(20, 20, 20)", fontWeight: "600" }}
        >
          Let's <strong style={{ color: "red" }}>Blog</strong> your stories and
          experiences
        </Typography>
      </div>
      
        <div className="blog-card">
          {task.map((value, key) => {
            console.log(value);
            return (
              <Blogs
                title={value.Title}
                tags={value.Tags}
                author={value.Author}
                blog={value.Blog}
                image={value.Image}
                key={value.key}
              />
            );
          })}
        </div>
      
    </div>
  );
};

export default Home;
