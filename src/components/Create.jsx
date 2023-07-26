import {
  Alert,
  AlertTitle,
  Button,
  Card,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase";
import Swal from "sweetalert2";

const Create = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [author, setAuthor] = useState();
  const [tags, setTags] = useState();
  const [blog, setBlog] = useState();

  const handleBlog = () => {
    if ((title, author, blog)) {
      const currentTime = new Date().getTime();
      const taskRef = addDoc(collection(firestore, `blogs`), {
        Title: title,
        Image: image,
        Author: author,
        Tags: tags,
        Blog: blog,
        Time: currentTime,
      }).then(() => {
        setTitle("");
        setImage("");
        setAuthor("");
        setTags("");
        setBlog("");
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your blog is published!'
        })
      });
    }
  };

  return (
    <div>
      <Card sx={{ maxWidth: "800px", margin: "20px auto" }} elevation={10}>
        <div className="create-quiz">
          <form style={{ padding: "30px" }}>
            <fieldset
              style={{
                border: "none",
                display: "grid",
                gridTemplateColumns: "repeat(2, 5fr)",
                gap: "25px 15px",
              }}
            >
              <legend
                style={{
                  fontWeight: "700",
                  fontSize: "18pt",
                  margin: "25px auto",
                }}
              >
                Add New Blog
              </legend>

              <TextField
                id="outlined-textarea"
                color="error"
                label="Blog Title"
                placeholder="Enter your blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <TextField
                id="outlined-textarea"
                type="url"
                label="Image URL"
                placeholder="https://image.png"
                color="error"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <TextField
                id="outlined-textarea"
                label="Author"
                placeholder="Enter your name"
                color="error"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
              <TextField
                id="outlined-textarea"
                label="Tags"
                placeholder="Enter tags here"
                color="error"
                value={tags}
                onChange={(e) => {
                  setTags(e.target.value);
                }}
              />

              <TextField
                id="outlined-textarea"
                label="Blog"
                placeholder="Enter your blog"
                color="error"
                value={blog}
                onChange={(e) => setBlog(e.target.value)}
                multiline
                sx={{ gridColumn: "1/3" }}
                required
              />
              <Button
                variant="contained"
                sx={{
                  gridColumn: "1/3",
                  backgroundColor: "red",
                  ":hover": { backgroundColor: "#df0000" },
                }}
                onClick={handleBlog}
              >
                Submit
              </Button>
            </fieldset>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Create;
