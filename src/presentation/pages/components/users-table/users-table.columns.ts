import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 230 },
  { field: 'username', headerName: 'Username', width: 130 },
  {
    field: 'city',
    headerName: 'City',
    width: 130,
  },
  { field: 'email', headerName: 'Email', width: 230 },
];
