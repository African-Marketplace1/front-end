import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategorySelect(props) {
  const { onChange, category } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl style={{ width: "100%" }}>
        <InputLabel
          id="label"
          style={{
            backgroundColor: "white",
            padding: "0px 5px 5px 5px",
          }}
        ></InputLabel>
        <Select
          labelId="label"
          onChange={onChange}
          name="category"
          value={category}
          style={{ height: "2.1rem" }}
        >
          <MenuItem value={"Animal Products"} style={{ display: "block" }}>
            Animal Products
          </MenuItem>
          <MenuItem value={"Beans"} style={{ display: "block" }}>
            Beans
          </MenuItem>
          <MenuItem value={"Cereals"} style={{ display: "block" }}>
            Cereals
          </MenuItem>
          <MenuItem value={"Fruits"} style={{ display: "block" }}>
            Fruits
          </MenuItem>
          <MenuItem value={"Peas"} style={{ display: "block" }}>
            Peas
          </MenuItem>
          <MenuItem value={"Roots & Tubers"} style={{ display: "block" }}>
            Roots & Tubers
          </MenuItem>
          <MenuItem value={"Seeds & Nuts"} style={{ display: "block" }}>
            Seeds & Nuts
          </MenuItem>
          <MenuItem value={"Vegetables"} style={{ display: "block" }}>
            Vegetables
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
