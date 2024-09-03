import * as React from 'react';
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Define a type for the data
type StampData = {
  pad: string;
  barcode: string;
  size: string;
  stock: number;
};

const initialData: { stamp: StampData[], refill: StampData[] } = {
  stamp: [
    { pad: 's-510', barcode: '4710850005105', size: '1.2x1.2 cm.', stock: 19 },
    { pad: 's-520', barcode: '4710850005204', size: '2x2 cm.', stock: 63 },
    { pad: 's-530', barcode: '4710850005303', size: '3.2x3.2 cm.', stock: 22 },
    { pad: 's-530D', barcode: '4710850005304', size: '3.2x3.2 cm. (D)', stock: 10 },
    { pad: 's-542', barcode: '4710850005424', size: '2.8x2.8 cm.', stock: 30 },
    { pad: 's-722', barcode: '4710850007220', size: '4x4 cm.', stock: 5 },
    { pad: 's-826', barcode: '4710850082608', size: '3.5x4.5 cm.', stock: 8 },
    { pad: 's-827', barcode: '4710850082707', size: '4x5 cm.', stock: 12 },
    { pad: 's-827D', barcode: '4710850082714', size: '4x5 cm. (D)', stock: 4 },
    { pad: 's-828', barcode: '4710850082806', size: '4.5x6 cm.', stock: 3 },
    { pad: 's-828D', barcode: '4710850082813', size: '4.5x6 cm. (D)', stock: 6 },
    { pad: 's-829', barcode: '4710850082905', size: '5x7 cm.', stock: 2 },
    { pad: 's-829D', barcode: '4710850082912', size: '5x7 cm. (D)', stock: 1 },
    { pad: 's-830', barcode: '4710850083005', size: '7x10 cm.', stock: 0 },
    { pad: 's-831', barcode: '4710850083104', size: '8x12 cm.', stock: 9 },
    { pad: 's-832', barcode: '4710850083203', size: '9x14 cm.', stock: 14 },
    { pad: 's-841', barcode: '4710850084101', size: '10x15 cm.', stock: 11 },
    { pad: 's-842', barcode: '4710850084200', size: '12x18 cm.', stock: 7 },
    { pad: 's-843', barcode: '4710850084309', size: '15x20 cm.', stock: 2 },
    { pad: 's-844', barcode: '4710850084408', size: '20x30 cm.', stock: 5 },
    { pad: 's-845', barcode: '4710850084507', size: '30x40 cm.', stock: 4 },
    { pad: 's-q32', barcode: '4710850000320', size: '3.2x3.2 cm.', stock: 15 },
    { pad: 's-q42', barcode: '4710850000420', size: '4.2x4.2 cm.', stock: 10 },
  ],
  refill: [
    { pad: 's-300', barcode: '4710850133006', size: '2.8x1.8 cm.', stock: 95 },
    { pad: 's-400', barcode: '110210011', size: '3.5x1.5 cm.', stock: 49 },
    { pad: 's-510', barcode: '00230160', size: '2x2 cm.', stock: 21 },
    { pad: 's-520', barcode: '4710850005204', size: '2x2 cm.', stock: 63 },
    { pad: 's-530', barcode: '4710850005303', size: '3.2x3.2 cm.', stock: 22 },
    { pad: 's-530D', barcode: '4710850005304', size: '3.2x3.2 cm. (D)', stock: 10 },
    { pad: 's-542', barcode: '4710850005424', size: '2.8x2.8 cm.', stock: 30 },
    { pad: 's-722', barcode: '4710850007220', size: '4x4 cm.', stock: 5 },
    { pad: 's-826', barcode: '4710850082608', size: '3.5x4.5 cm.', stock: 8 },
    { pad: 's-827', barcode: '4710850082707', size: '4x5 cm.', stock: 12 },
    { pad: 's-827D', barcode: '4710850082714', size: '4x5 cm. (D)', stock: 4 },
    { pad: 's-828', barcode: '4710850082806', size: '4.5x6 cm.', stock: 3 },
    { pad: 's-828D', barcode: '4710850082813', size: '4.5x6 cm. (D)', stock: 6 },
    { pad: 's-829', barcode: '4710850082905', size: '5x7 cm.', stock: 2 },
    { pad: 's-829D', barcode: '4710850082912', size: '5x7 cm. (D)', stock: 1 },
    { pad: 's-830', barcode: '4710850083005', size: '7x10 cm.', stock: 0 },
    { pad: 's-831', barcode: '4710850083104', size: '8x12 cm.', stock: 9 },
    { pad: 's-832', barcode: '4710850083203', size: '9x14 cm.', stock: 14 },
    { pad: 's-841', barcode: '4710850084101', size: '10x15 cm.', stock: 11 },
    { pad: 's-842', barcode: '4710850084200', size: '12x18 cm.', stock: 7 },
    { pad: 's-843', barcode: '4710850084309', size: '15x20 cm.', stock: 2 },
    { pad: 's-844', barcode: '4710850084408', size: '20x30 cm.', stock: 5 },
    { pad: 's-845', barcode: '4710850084507', size: '30x40 cm.', stock: 4 },
    { pad: 's-q32', barcode: '4710850000320', size: '3.2x3.2 cm.', stock: 15 },
    { pad: 's-q42', barcode: '4710850000420', size: '4.2x4.2 cm.', stock: 10 },
  ],
};

export default function StampTable() {
  // Use state to manage the stock data
  const [stampData, setStampData] = useState(initialData);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const updateStock = (index: number, type: 'stamp' | 'refill', change: number) => {
    setStampData((prevData) => {
      const newData = { ...prevData };
      const targetItem = newData[type][index];

      if (targetItem) {
        const updatedStock = targetItem.stock + change;
        newData[type][index] = { ...targetItem, stock: updatedStock >= 0 ? updatedStock : 0 };
      }

      return newData;
    });
  };

  const handleSave = () => {
    // Save the current state (you can replace this with an API call or other logic)
    setLastSaved(new Date());
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', margin: '20px 0' }}>
        {/* ตารางตรายางหมึกในตัว */}
        <TableContainer component={Paper} style={{ flex: 1, marginRight: '10px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={4} align="center">ตรายางหมึกในตัว</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>แท่น</TableCell>
                <TableCell>บาร์โค้ด</TableCell>
                <TableCell>ขนาด</TableCell>
                <TableCell>สต๊อค</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stampData.stamp.map((stamp, index) => (
                <TableRow key={index}>
                  <TableCell>{stamp.pad}</TableCell>
                  <TableCell>{stamp.barcode}</TableCell>
                  <TableCell>{stamp.size}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => updateStock(index, 'stamp', -1)} size="small" color="primary">
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    {stamp.stock}
                    <IconButton onClick={() => updateStock(index, 'stamp', 1)} size="small" color="primary">
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* ตารางราคารีฟิวส์ */}
        <TableContainer component={Paper} style={{ flex: 1, marginLeft: '10px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={4} align="center">ราคารีฟิวส์สำหรับแท่นหมึกในตัว</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>แท่น</TableCell>
                <TableCell>บาร์โค้ด</TableCell>
                <TableCell>ขนาด</TableCell>
                <TableCell>สต๊อค</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stampData.refill.map((refill, index) => (
                <TableRow key={index}>
                  <TableCell>{refill.pad}</TableCell>
                  <TableCell>{refill.barcode}</TableCell>
                  <TableCell>{refill.size}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => updateStock(index, 'refill', -1)} size="small" color="primary">
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    {refill.stock}
                    <IconButton onClick={() => updateStock(index, 'refill', 1)} size="small" color="primary">
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* ปุ่มบันทึกและวันที่ */}
      <div style={{ marginTop: '20px', width: '100%', maxWidth: '1200px', textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleSave} style={{ margin: '16px 0' }}>
          บันทึก
        </Button>
        {lastSaved && (
          <Typography variant="body2" style={{ marginLeft: '16px', marginBottom: '16px' }}>
            บันทึกล่าสุดเมื่อ: {lastSaved.toLocaleString()}
          </Typography>
        )}
      </div>
    </div>
  );
}
