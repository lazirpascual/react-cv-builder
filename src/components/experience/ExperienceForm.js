import React, { useContext, useState } from "react";
import { ExperienceContext } from "../../contexts/ExperienceContext";
import ExperienceList from "./ExperienceList";

// Material-UI import
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import SaveIcon from "@material-ui/icons/Save";
import { Grid } from "@material-ui/core";

const ExperienceForm = ({ form }) => {
  const { saveForm, deleteForm } = useContext(ExperienceContext);
  const [edit, setEdit] = useState(true);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const toggleEdit = () => {
    return edit ? setEdit(false) : setEdit(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveForm(company, position, form.id);
    toggleEdit(form.id);
  };

  return edit ? (
    <Card variant="Media">
      <CardContent>
        <TextField
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          label="Company"
          type="text"
          variant="outlined"
          color="secondary"
          required
        ></TextField>
        <TextField
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          label="Position"
          type="text"
          variant="outlined"
          color="secondary"
          required
        ></TextField>
        <Grid container justify="flex-end">
          <IconButton>
            <SaveIcon onClick={handleSave} />
          </IconButton>
          <IconButton onClick={() => deleteForm(form.id)}>
            <DeleteOutlined />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  ) : (
    <ExperienceList form={form} toggleEdit={toggleEdit} />
  );
};

export default ExperienceForm;
