import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as styles from './styles.module.css'

function AutoCompleteWithTitle({
  multiple = true,
  options,
  onChange,
  label,
}) {
  return (
    <div className={styles.autocompleteContainer}>
      <Autocomplete
        multiple={multiple}
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.name}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        size="small"
        defaultValue={[]}
        onChange={(e, value) => console.log(...value)}
        renderInput={(params) => (
          <div>
            <div className={styles.label}>{label}</div>
            <TextField
            id='textinput'
              {...params}
            //   label="Catagory"
              // placeholder="Catagory Name"
            />
          </div>
          //see whats params
        )}
      />
    </div>
  );
}

export default AutoCompleteWithTitle;
