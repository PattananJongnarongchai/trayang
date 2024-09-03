import * as React from 'react';
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const initialData = {
  s722: [
    { color: 'ทอง', stock: 0 },
    { color: 'เขียว', stock: 0 },
    { color: 'แดงใส', stock: 0 },
    { color: 'น้ำเงินใส', stock: 0 },
    { color: 'เทา', stock: 2 },
    { color: 'ม่วงทึบ', stock: 0 },
    { color: 'ดำ', stock: 0 },
    { color: 'ฟ้าเข้ม', stock: 0 },
    { color: 'นมเย็น', stock: 0 },
    { color: 'บานเย็น', stock: 0 },
    { color: 'ม่วงใส', stock: 0 },
  ],
  s841: [
    { color: 'ชมพูบานเย็น', stock: 0 },
    { color: 'ม่วงทึบ', stock: 0 },
    { color: 'เขียวทึบ', stock: 0 },
    { color: 'ฟ้าเข้ม', stock: 0 },
    { color: 'ขาว', stock: 0 },
    { color: 'แดงทึบ', stock: 0 },
  ],
  s842: [
    { color: 'แดงใส', stock: 0 },
    { color: 'ม่วง', stock: 1 },
    { color: 'เขียวใส', stock: 0 },
    { color: 'ฟ้าเข้ม', stock: 0 },
  ],
  s843: [
    { color: 'น้ำเงินใส', stock: 0 },
    { color: 'ขาว', stock: 1 },
    { color: 'เหลือง', stock: 0 },
    { color: 'แดง', stock: 0 },
  ],
  s844: [
    { color: 'ชมพู', stock: 0 },
    { color: 'เขียว', stock: 0 },
    { color: 'ส้มใส', stock: 1 },
    { color: 'ม่วง', stock: 1 },
  ],
  s845: [
    { color: 'น้ำเงินใส', stock: 0 },
    { color: 'แดง', stock: 0 },
    { color: 'เหลือง', stock: 0 },
    { color: 'ขาว', stock: 0 },
  ],
};

const getColorCode = (color) => {
  switch (color) {
    case 'ทอง':
      return { background: '#FFD700', text: '#000000' }; // Gold
    case 'เขียว':
      return { background: '#008000', text: '#FFFFFF' }; // Green
    case 'แดงใส':
      return { background: '#FF0000', text: '#FFFFFF' }; // Red
    case 'น้ำเงินใส':
      return { background: '#0000FF', text: '#FFFFFF' }; // Blue
    case 'เทา':
      return { background: '#808080', text: '#FFFFFF' }; // Gray
    case 'ม่วงทึบ':
      return { background: '#800080', text: '#FFFFFF' }; // Purple
    case 'ดำ':
      return { background: '#000000', text: '#FFFFFF' }; // Black
    case 'ฟ้าเข้ม':
      return { background: '#00008B', text: '#FFFFFF' }; // Dark Blue
    case 'นมเย็น':
      return { background: '#F8CBA6', text: '#000000' }; // Light Color
    case 'บานเย็น':
      return { background: '#FF69B4', text: '#000000' }; // Hot Pink
    case 'ม่วงใส':
      return { background: '#DA70D6', text: '#000000' }; // Orchid
    case 'ชมพูบานเย็น':
      return { background: '#FF1493', text: '#FFFFFF' }; // Deep Pink
    case 'ม่วงทึบ':
      return { background: '#4B0082', text: '#FFFFFF' }; // Indigo
    case 'เขียวทึบ':
      return { background: '#006400', text: '#FFFFFF' }; // Dark Green
    case 'ขาว':
      return { background: '#FFFFFF', text: '#000000' }; // White
    case 'แดงทึบ':
      return { background: '#B22222', text: '#FFFFFF' }; // Firebrick
    case 'เหลือง':
      return { background: '#FFFF00', text: '#000000' }; // Yellow
    case 'ส้มใส':
      return { background: '#FFA500', text: '#000000' }; // Orange
    default:
      return { background: '#FFFFFF', text: '#000000' }; // Default to white
  }
};

export default function PopularProducts() {
  const [data] = useState(initialData);

  const calculateTotalStock = (product) => {
    return product.reduce((total, item) => total + item.stock, 0);
  };

  return (
    <TableContainer component={Paper} style={{ margin: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} align="center">
              <Typography variant="h6">Stock ตรายาง S-722</Typography>
            </TableCell>
            <TableCell colSpan={2} align="center">
              <Typography variant="h6">Stock ตรายาง S-841</Typography>
            </TableCell>
            <TableCell colSpan={2} align="center">
              <Typography variant="h6">Stock ตรายาง S-842</Typography>
            </TableCell>
            <TableCell colSpan={2} align="center">
              <Typography variant="h6">Stock ตรายาง S-843</Typography>
            </TableCell>
            <TableCell colSpan={2} align="center">
              <Typography variant="h6">Stock ตรายาง S-844</Typography>
            </TableCell>
            <TableCell colSpan={2} align="center">
              <Typography variant="h6">Stock ตรายาง S-845</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            {['สี', 'คงเหลือ'].map((header, index) => (
              <TableCell key={index} align="center">{header}</TableCell>
            ))}
            {['สี', 'คงเหลือ'].map((header, index) => (
              <TableCell key={index + 2} align="center">{header}</TableCell>
            ))}
            {['สี', 'คงเหลือ'].map((header, index) => (
              <TableCell key={index + 4} align="center">{header}</TableCell>
            ))}
            {['สี', 'คงเหลือ'].map((header, index) => (
              <TableCell key={index + 6} align="center">{header}</TableCell>
            ))}
            {['สี', 'คงเหลือ'].map((header, index) => (
              <TableCell key={index + 8} align="center">{header}</TableCell>
            ))}
            {['สี', 'คงเหลือ'].map((header, index) => (
              <TableCell key={index + 10} align="center">{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.s722.map((item722, index) => {
            const colorProps722 = getColorCode(item722.color);
            const colorProps841 = getColorCode(data.s841[index]?.color);
            const colorProps842 = getColorCode(data.s842[index]?.color);
            const colorProps843 = getColorCode(data.s843[index]?.color);
            const colorProps844 = getColorCode(data.s844[index]?.color);
            const colorProps845 = getColorCode(data.s845[index]?.color);

            return (
              <TableRow key={index}>
                <TableCell sx={{ backgroundColor: colorProps722.background, color: colorProps722.text, textAlign: 'center' }}>
                  {item722.color}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps722.background, color: colorProps722.text, textAlign: 'center' }}>
                  {item722.stock}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps841.background, color: colorProps841.text, textAlign: 'center' }}>
                  {data.s841[index]?.color}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps841.background, color: colorProps841.text, textAlign: 'center' }}>
                  {data.s841[index]?.stock}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps842.background, color: colorProps842.text, textAlign: 'center' }}>
                  {data.s842[index]?.color}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps842.background, color: colorProps842.text, textAlign: 'center' }}>
                  {data.s842[index]?.stock}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps843.background, color: colorProps843.text, textAlign: 'center' }}>
                  {data.s843[index]?.color}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps843.background, color: colorProps843.text, textAlign: 'center' }}>
                  {data.s843[index]?.stock}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps844.background, color: colorProps844.text, textAlign: 'center' }}>
                  {data.s844[index]?.color}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps844.background, color: colorProps844.text, textAlign: 'center' }}>
                  {data.s844[index]?.stock}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps845.background, color: colorProps845.text, textAlign: 'center' }}>
                  {data.s845[index]?.color}
                </TableCell>
                <TableCell sx={{ backgroundColor: colorProps845.background, color: colorProps845.text, textAlign: 'center' }}>
                  {data.s845[index]?.stock}
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell colSpan={2} align="right">รวม:</TableCell>
            <TableCell align="center">{calculateTotalStock(data.s722)}</TableCell>
            <TableCell align="center">{calculateTotalStock(data.s841)}</TableCell>
            <TableCell align="center">{calculateTotalStock(data.s842)}</TableCell>
            <TableCell align="center">{calculateTotalStock(data.s843)}</TableCell>
            <TableCell align="center">{calculateTotalStock(data.s844)}</TableCell>
            <TableCell align="center">{calculateTotalStock(data.s845)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
