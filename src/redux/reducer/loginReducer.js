import { LOGIN, INSTITUTE_DETAIL, LOGOUT, DEPARTMENT_DETAIL } from '../actions/types';

const Initial_state = {
  token: '',
  instituteId: '',
  instituteName: '',
  role: '',
  timeout: 200000,
  departmentId: '',
  departmentName: '',
};

export default(state = Initial_state, action) => {
  // console.log('action.payload', action.payload);
  switch (action.type)
  {
    case LOGIN:
      return { ...state, token: action.payload.data.access_token, instituteName: action.payload.data.name, role: action.payload.data.role };
    case INSTITUTE_DETAIL:
      console.log('inst detail', action.payload);
      return { ...state, instituteId: action.payload.id, instituteName: action.payload.institute_name };
    case LOGOUT:
      return Initial_state;
    case DEPARTMENT_DETAIL:
      console.log('department Details', action.payload);
      return { ...state, departmentId: action.payload.id, departmentName: action.payload.department_name  }
    default:
      return state;
  }
};
