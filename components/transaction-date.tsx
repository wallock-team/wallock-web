import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Transaction(props: string[]) {
  let {timeLines} = props as any;
  const [value, setValue] = React.useState<string | number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number | string) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" justifyContent="center" sx={{ width: '100%', bgcolor: 'primary-color'}}>
      <Tabs value={value} onChange={handleChange} textColor="secondary" variant="scrollable">
        {/* {timeLines.map((t: string) =>(
          <Tab label={t} value= {t}/>
        ))} */}
        <Tab label="3" />
        <Tab label="2" />
        <Tab label="0" />
        <Tab label="1" />
      </Tabs>
    </Box>
  );
}