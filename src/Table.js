import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  Box,
  IconButton,
} from '@mui/material';
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material';


const data = [
  {
    id: 1,
    name: 'Parent 1',
    children: [
      { id: 101, name: 'Child 1.1', subChildren: ['Subchild 1.1.1', 'Subchild 1.1.2'] },
      { id: 102, name: 'Child 1.2', subChildren: ['Subchild 1.2.1', 'Subchild 1.2.2'] },
    ],
  },
  {
    id: 2,
    name: 'Parent 2',
    children: [
      { id: 201, name: 'Child 2.1', subChildren: ['Subchild 2.1.1', 'Subchild 2.1.2'] },
      { id: 202, name: 'Child 2.2', subChildren: ['Subchild 2.2.1', 'Subchild 2.2.2'] },
    ],
  },
];

const TableRowItem = ({ row }) => {
    console.log(row)
  const [open, setOpen] = useState(false);
  const handleExpand = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
     
      <TableRow sx={{ height: '10px' }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={handleExpand}>
            {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
      </TableRow>
      {row.children && (
        <TableRow s>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="purchases">
                  <TableBody>
                    {row.children.map((child) => (
                      <TableRowItem key={child.id} row={child} />
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>)}
    </React.Fragment>
  );
};



export default TableRowItem;
