import axios from 'axios';

const http = axios.create({
  baseURL: `https://crudcrud.com/api/${process.env.VUE_APP_API_KEY}/`,
});

// eslint-disable-next-line import/prefer-default-export
export const createTeacher = (teacher) => http.post('/teacher', teacher);
export const fetchTeachers = () => http.get('/teacher');
export const fetchTeacher = (id) => http.get(`/teacher/${id}`);
export const updateTeacher = (teacher, id) => http.put(`/teacher/${id}`, teacher);
export const deleteTeacher = (id) => http.delete(`/teacher/${id}`);
