import React from 'react';
import { Box, TextField, IconButton, Button, Typography } from '@mui/material';
import { Close, Check } from '@mui/icons-material';

function EditLabel() {
    return (
        <Box
            sx={{
                width: 300,
                padding: 2,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: 'background.paper',
            }}
        >
            <Typography variant="h6" sx={{ mb: 2 }}>
                Edit labels
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton>
                    <Close />
                </IconButton>
                <TextField
                    placeholder="Create new label"
                    variant="standard"
                    fullWidth
                />
                <IconButton>
                    <Check />
                </IconButton>
            </Box>
            <Button fullWidth variant="text">
                Done
            </Button>
        </Box>
    );
}

export default EditLabel;
