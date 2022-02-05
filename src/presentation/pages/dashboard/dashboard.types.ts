import { HidratateUsersList, LoadUsersList } from '../../../domain/usecases';

export interface DashboardProps {
  loadUsersList: LoadUsersList;
  hidratateCache: HidratateUsersList;
  loadUsersListCache: LoadUsersList;
}
