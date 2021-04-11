import { DataGrid } from '@material-ui/data-grid';

export default function CustomTable({ rows, columns }) {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
}
