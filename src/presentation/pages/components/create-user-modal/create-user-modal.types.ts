export interface CreateUserModalProps {
  open: boolean;
  onCreate: (user: any) => void;
  onCancel: () => void;
}

export type FormInputs = {
  name: string;
  email: string;
};
