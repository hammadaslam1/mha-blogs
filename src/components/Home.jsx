import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import { ExpandMore } from "@mui/icons-material";
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
  styled
} from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [task, setTask] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const getTasks = async () => {
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
    });
  };
  useEffect(() => {
    getTasks();
  }, []);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

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
      <div>
        <div
        className="blog-card"
        >
          {task.map((value, key) => {
            return (
              <Card sx={{ width: "345px", margin: "auto", marginTop: '0', fontSize: '14pt', fontWeight: '700' }}>
                <CardHeader
                sx={{fontSize: '14pt', fontWeight: '700'}}
                  avatar={
                    <Avatar
                    
                      sx={{
                        bgcolor: "rgb(255, 125, 125)",
                        color: "rgb(255, 200, 200)",
                      }}
                      aria-label=""
                    ></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={value.Title}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={
                    value.Image
                      ? value.Image
                      : "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1"
                  }
                  alt={value.Title}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {value.Tags ? value.Tags : ""}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse
                  in={expanded}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography variant="h5">Blog:</Typography>

                    <Typography paragraph>{value.Blog}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
