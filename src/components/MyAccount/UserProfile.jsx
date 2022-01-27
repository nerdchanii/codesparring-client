import { useRecoilValue } from 'recoil';
import Errpage from '../../Pages/Errpage/Errpage';
import { isLogin } from '../../state/login';
import './MyAccount.scss';
const UserProfile = ({ user }) => {
  const loginCheck = useRecoilValue(isLogin);
  if (!loginCheck)
    return (
      <div
        style={{
          minHeight: 'inherit',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        먼저 로그인해주세요!
      </div>
    );
  if (!user) {
    return (
      <div>
        <Errpage log="user정보가 없습니다" />
      </div>
    );
  }
  return (
    <div className="UserProfile">
      <div className="imgContainer">
        <img src={user.img} alt="userProfile" />
      </div>
      <div className="textContainer">
        <p className="nickname">
          nickName:
          <span>{user.nickName}</span>
        </p>
        <p className="email">
          email:
          <span>{user.email}</span>
        </p>
        <p className="rank">
          rank:
          <span>{user.rank}</span>
        </p>
        <p className="points">
          points:
          <span>{user.points}</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
