import { Box, Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { submitSubmission } from '../Model/Submission';
import Navbar from '../Components/Navbar';
import Uploader from '../Components/Uploader';

const Submission = () => {
  const [dataSubmission, setDataSubmission] = useState({
    problem: '',
    language: '',
    code: null,
    cid: '',
  });

  const handleSubmitButton = async () => {
    await submitSubmission(dataSubmission);
  };

  return (
    <Navbar title='Submission'>
      <Box mb={2}>
        <TextField
          label='Problem'
          variant='outlined'
          size='small'
          value={dataSubmission.problem}
          onChange={(e) => {
            setDataSubmission((c) => ({ ...c, problem: e.target.value }));
          }}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label='Language'
          variant='outlined'
          size='small'
          value={dataSubmission.language}
          onChange={(e) => {
            setDataSubmission((c) => ({ ...c, language: e.target.value }));
          }}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label='CID'
          variant='outlined'
          size='small'
          value={dataSubmission.cid}
          onChange={(e) => {
            setDataSubmission((c) => ({ ...c, cid: e.target.value }));
          }}
        />
      </Box>
      <Uploader
        dataSubmission={dataSubmission}
        setDataSubmission={setDataSubmission}
      />
      <Box mt={2}>
        <Button
          onClick={handleSubmitButton}
          variant='contained'
          color='primary'
        >
          Submit
        </Button>
      </Box>
    </Navbar>
  );
};

export default Submission;
