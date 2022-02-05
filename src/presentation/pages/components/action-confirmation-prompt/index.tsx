import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

import { ActionConfirmationPromptProps } from './action-confirmation-prompt.types';

const ActionConfirmationPrompt: React.FC<ActionConfirmationPromptProps> = ({
  isOpen,
  onCancel,
  onDelete,
  userId,
}) => (
  <div>
    <Dialog
      open={isOpen}
      onClose={onCancel}
      aria-labelledby="Delete User"
      aria-describedby="You are going to delete a user. Are you sure?"
    >
      <DialogTitle id="alert-dialog-title">Delete User</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You are going to delete a user. Are you sure?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onDelete(userId)}>Delete</Button>
      </DialogActions>
    </Dialog>
  </div>
);

export default ActionConfirmationPrompt;
