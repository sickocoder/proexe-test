import { UserModel } from '../../../../domain/models';

export interface EditUserModalProps {
  open: boolean;
  onCreate: (user: any) => void;
  onCancel: () => void;
  user: UserModel;
}

export type FormUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  phone: string;
  website: string;
  company: string;
};
