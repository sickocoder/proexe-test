import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { style } from '../create-user-modal/create-user-modal.styles';
import { EditUserModalProps, FormUser } from './edit-user-modal.types';

const userUpdateFromFields = [
  ['id', 'name'],
  ['username', 'email'],
  ['city', 'phone'],
  ['website', 'company'],
];

// TODO: validate using something like yup
const requiredFieldValidation = { required: { message: 'This field is required', value: true } };

const EditUserModal: React.FC<EditUserModalProps> = ({ onCancel, onCreate, open, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormUser>();
  const onSubmit: SubmitHandler<FormUser> = data => {
    const fullUserObject = {
      ...data,
      id: user.id,
      address: {
        ...user.address,
        city: data.city,
      },
      company: {
        ...user.company,
        name: data.company,
      },
    };

    onCreate(fullUserObject);
  };

  const sanitizedUser = {
    ...user,
    city: user.address.city,
    company: user.company.name,
  };

  return (
    <Modal open={open} onClose={onCancel} aria-labelledby="new-user-modal">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create User
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mt={3} mb={3}>
            {userUpdateFromFields.map(doubleFields => (
              <Box mb={2}>
                {doubleFields.map(field => (
                  <TextField
                    disabled={field === 'id'}
                    style={{ marginRight: 16 }}
                    error={!!errors[field as keyof FormUser]}
                    label={field}
                    {...register(
                      field as keyof FormUser,
                      field !== 'id' ? requiredFieldValidation : undefined
                    )}
                    helperText={(errors[field as keyof FormUser] as any)?.message}
                    defaultValue={sanitizedUser[field as keyof typeof sanitizedUser] || ''}
                  />
                ))}
              </Box>
            ))}
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

export default EditUserModal;
