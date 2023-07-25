import { Button, Card, TextField } from "@mui/material";

const Create = () => {
  return (
    <div>
      <Card sx={{ maxWidth: "800px", margin: "20px auto" }}>
        <div className="create-quiz">
          <form style={{ padding: "30px" }}>
            <fieldset
              style={{
                border: "none",
                display: "grid",
                gridTemplateColumns: "repeat(2, 5fr)",
                gap: "5px",
              }}
            >
              <legend style={{ fontWeight: "600", fontSize: "16pt" }}>
                Add New Blog
              </legend>

              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
              />
              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
              />
              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
              />
            </fieldset>
            <Button variant="contained" sx={{ backgroundColor: "red" }}>
              Submit
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Create;
