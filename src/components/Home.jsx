import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import { Typography } from "@mui/material";

const Home = () => {
  const [task, setTask] = useState();

  const getTasks = async () => {
    await getDocs(
      query(collection(firestore, `blogs`), orderBy("time", "desc"))
    ).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        key: doc.id,
      }));
      setTask(data);
    });
  };

  return (
    <div>
      <div style={{ width: "700px", margin: "40px auto" }}>
        <Typography
          variant="h3"
          sx={{ color: "rgb(20, 20, 20)", fontWeight: "600" }}
        >
          Let's <strong style={{ color: "red" }}>Blog</strong> your stories and
          experiences
        </Typography>
      </div>
      <div>
        {task.map((value, key) => {
          const labelId = `${key}`;
          return (
            <div>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/static/images/cards/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
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
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Blog:</Typography>
                    
                    <Typography paragraph>
                        {value.Blog}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
