class NoticeService {
  constructor({ apis }) {
    this._apis = apis;
  }

  getNotices = async () => {
    return this._apis.notice.getNotices();
  }

  addNotice = async (data) => {
    return this._apis.notice.addNotice(data);
  }

  getNotice = async (id) => {
    return this._apis.notice.getNotice(id);
  }

  deleteNotice = async (id) => {
    return this._apis.notice.deleteNotice(id);
  }

  updateNotice = async ({ id, data }) => {
    return this._apis.notice.updateNotice({ id, data });
  }


}

export default NoticeService;
