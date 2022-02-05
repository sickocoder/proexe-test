import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { style } from './create-user-modal.styles';
import { CreateUserModalProps, FormInputs } from './create-user-modal.types';

// TODO: validate using something like yup
const requiredFieldValidation = { required: { message: 'This field is required', value: true } };

const CreateUserModal: React.FC<CreateUserModalProps> = ({ onCancel, onCreate, open }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = data => onCreate(data);

  return (
    <Modal open={open} onClose={onCancel} aria-labelledby="new-user-modal">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create User
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mt={3} mb={3}>
            <Box mb={2}>
              <TextField
                fullWidth
                error={!!errors.name}
                label="Name"
                {...register('name', requiredFieldValidation)}
                helperText={errors.name?.message}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                error={!!errors.email}
                label="Email"
                {...register('email', requiredFieldValidation)}
                helperText={errors.email?.message}
              />
            </Box>
          </Box>
          <Box>
            <Button onClick={onCancel} type="button">
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateUserModal;
