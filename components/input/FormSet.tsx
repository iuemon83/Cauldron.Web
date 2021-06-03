import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
import React from "react";

interface Props {
  label: React.ReactNode;
  children: React.ReactNode;
}

const FormSet: React.FC<Props> = (p: Props) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{p.label}</FormLabel>
      <FormGroup style={{ marginLeft: "2rem" }}>{p.children}</FormGroup>
    </FormControl>
  );
};

export default FormSet;
