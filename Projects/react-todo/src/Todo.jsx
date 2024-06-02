import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
// import { useState } from "react";
export default function Todo({ value, handleToggle, deleteTodo }) {
    const labelId = `checkbox-list-label-${value.id}`;
    return (
        <ListItem
            key={value.id}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => {
                        deleteTodo(value.id);
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton
                onClick={() => {
                    handleToggle(value.id);
                }}
                dense
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={value.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={value.id} primary={value.title} />
            </ListItemButton>
        </ListItem>
    );
}
