import Axios from 'axios';
import { Base64 } from 'js-base64';

export const submitSubmission = async ({ problem, language, code, cid }) => {
  try {
    const config = {
      headers: {
        Authorization: `basic ${Base64.toBase64('user:user')}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    console.log(config);
    const formData = new FormData();
    formData.append('problem', problem);
    formData.append('language', language);
    formData.append('code', code);
    formData.append('cid', cid);
    const { data } = await Axios.post(
      `https://domjudge.smkn2sumedang.sch.id/api/v4/contests/${cid}/submissions`,
      formData,
      config
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
