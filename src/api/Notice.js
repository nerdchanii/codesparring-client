class Notice {
  constructor({ axios }) {
    this._axios = axios;
  }

  // get notices list without params
  getNotices() {
    return this._axios.get('/notices');
  }

  addNotice(data) {
    return this._axios.post('/notices', data);
  }

  getNotice(id) {
    return this._axios.get(`/notices/${id}`);
  }

  deleteNotice(id) {
    return this._axios.delete(`/notices/${id}`);
  }

  updateNotice({id, data}) {
    return this._axios.put(`/notices/${id}`, data);
  }
  

  
}
export default Notice;
