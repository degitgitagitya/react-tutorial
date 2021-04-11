import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function Uploader({ dataSubmission, setDataSubmission }) {
  const classes = useStyles();

  return (
    <div>
      <input
        accept='*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
        onChange={(e) => {
          const file = e.target.files[0];
          const { type } = file;
          if (type === 'audio/mpeg') {
            console.log('file rejected');
            return;
          }
          setDataSubmission((c) => ({ ...c, code: file }));
        }}
      />
      <label htmlFor='contained-button-file'>
        <Button variant='contained' color='primary' component='span'>
          Upload
        </Button>
      </label>
    </div>
  );
}
