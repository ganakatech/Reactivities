import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

type Props = {
    activity: Activity | undefined
    closeForm: () => void
    submitForm: (activity: Activity) => void
}

export default function Activityform({activity, closeForm, submitForm}: Props) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data: {[key: string]: FormDataEntryValue} = {}
        formData.forEach((value, key) => {
            data[key] = value;
        }
        );
        if(activity) {
            data.id = activity.id;
        }

        submitForm(data as unknown as Activity);
    }

    return (
        <Paper sx={{ padding: 3, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                Create Activity
            </Typography>
            <Box component="form" onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
                <TextField name='title' label="Title" defaultValue={activity?.title}></TextField>
                <TextField name='description' label="Description" multiline rows={3} defaultValue={activity?.description}></TextField>   
                <TextField name='category' label="Category" defaultValue={activity?.category}></TextField>
                <TextField name='date' label="Date" type="date" defaultValue={activity?.date}></TextField>
                <TextField name='city' label="City" defaultValue={activity?.city}></TextField>
                <TextField name='venue' label="Venue" defaultValue={activity?.venue}></TextField>
                <Box display='flex' justifyContent='end' gap={3}>
                    <Button onClick={closeForm} color="inherit">Cancel</Button>
                    <Button type="submit" color="success" variant="contained">Submit</Button>
                </Box>
            </Box>

        </Paper>
    )
}
