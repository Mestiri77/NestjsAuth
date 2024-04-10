import * as React from 'react';
import Box from '@mui/material/Box';
import {
    DataGridPremium,
    GridToolbar,
    useGridApiRef,
    useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { useDemoData } from '@mui/x-data-grid-generator';
import { navbarIconButton } from 'examples/Navbars/DashboardNavbar/styles';
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function DataGridPremiumDemo() {
    // const { data, loading } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 100,
    //     editable: true,
    //     visibleFields: [
    //         'commodity',
    //         'quantity',
    //         'filledQuantity',
    //         'status',
    //         'isFilled',
    //         'unitPrice',
    //         'unitPriceCurrency',
    //         'subTotal',
    //         'feeRate',
    //         'feeAmount',
    //         'incoTerm',
    //     ],
    // });
    // const apiRef = useGridApiRef();

    // const initialState = useKeepGroupedColumnsHidden({
    //     apiRef,
    //     initialState: {
    //         ...data.initialState,
    //         rowGrouping: {
    //             ...data.initialState?.rowGrouping,
    //             model: ['commodity'],
    //         },
    //         sorting: {
    //             sortModel: [{ field: '__row_group_by_columns_group__', sort: 'asc' }],
    //         },
    //         aggregation: {
    //             model: {
    //                 quantity: 'sum',
    //             },
    //         },
    //     },
    // });
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
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

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <Box sx={{ height: 520, width: '100%' }}>
            <DataGridPremium
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
    );
}