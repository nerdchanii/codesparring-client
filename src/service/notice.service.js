class NoticeService {
  constructor({ apis }) {
    this._apis = apis;
  }

  getNotices() {
    return this._axios.notice.getNotices();
  }

  addNotice(data) {
    return this._axios.notice.addNotice(data);
  }

  getNotice(id) {
    return this._axios.notice.getNotice(id);
  }

  deleteNotice(id) {
    return this._axios.notice.deleteNotice(id);
  }

  updateNotice({id, data}) {
    return this._axios.notice.updateNotice({id, data});
  }
  

}

export default NoticeService;
