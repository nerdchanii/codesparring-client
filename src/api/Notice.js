class Notice {
  constructor({ axios }) {
    this._axios = axios;
  }

  // get notices list without params
  getNotices = async () => {

    return this._axios.get('/notices');
  }

  addNotice = async (data) => {
    return this._axios.post('/notices', data);
  }

  getNotice = async (id) => {
    return this._axios.get(`/notices/${id}`);
  }

  deleteNotice = async (id) => {
    return this._axios.delete(`/notices/${id}`);
  }

  updateNotice = async ({ id, data }) => {
    return this._axios.put(`/notices/${id}`, data);
  }



}
export default Notice;
