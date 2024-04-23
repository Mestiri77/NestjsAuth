import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import { DashboardNavbar } from 'examples/Navbars/DashboardNavbar/DashboardNavbar'
import React, { useEffect, useState } from 'react'
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap'
import MDButton from "components/MDButton";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Reclamations() {
  const [rows, setRows] = useState([]);
  const fetchReclamation = async () => {
    try {
      const response = await
        axios
          .get("http://localhost:3001/reclamations/")
      setRows(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchReclamation()
  }, [])
  console.log(rows); //infinite loop error **********************************

  const navigate = useNavigate()
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'refRec',
      headerName: 'refRec',
      width: 150,
      editable: true,
    },
    {
      field: 'observation',
      headerName: 'observation',
      width: 150,
      editable: true,
    },
    {
      field: 'documentURL',
      headerName: 'documentURL',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'description',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'status',
      type: 'number',
      width: 110,
      editable: true,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <IconButton
              size="small"
              disableRipple
              color="inherit"
            // sx={navbarIconButton}
            // onClick={}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              size="small"
              disableRipple
              color="inherit"
            // sx={navbarIconButton}
            // onClick={}
            >
              <EditIcon />
            </IconButton>
          </div>);
      }
    },
  ];

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];
  return (
    <div>

      <div className='d-flex justify-content-end'>
        <Button onClick={() => { navigate('add') }}>Add</Button>
        <MDButton variant="gradient" color="info" circular size="large">Button</MDButton>
      </div>
      <Box sx={{ height: 520, width: '100%' }}>
        <DataGrid
          // {...data}
          // apiRef={apiRef}
          // loading={loading}
          // // disableRowSelectionOnClick
          // initialState={initialState}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }}
          pagination
          pageSizeOptions={[7]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        // checkboxSelection
        />
      </Box>
      {/* <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box> */}



    </div>
  )
}
