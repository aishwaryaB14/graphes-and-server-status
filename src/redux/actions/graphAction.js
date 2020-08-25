import axios from 'axios';
import { baseUrl } from '../../utils/utils';
import { GET_STATUS } from './type';

const getStatusSuccess = (data) => {
  return (
    {
      type: GET_STATUS,
      payload: data
    }
  );
};

export const getStatusData = () => async dispatch => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/peardrop_services`)
      .then((res) => {
        // console.log("ress....", res)
        resolve(res)
        dispatch(getStatusSuccess(res.data))
      })
      .catch((err) => {
        reject(err)
      })
  })
}

