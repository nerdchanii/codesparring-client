import { useNavigate } from 'react-router-dom';
import './Problem.scss';

const ProblemHeader = ({ data }) => {
  // const { data } = props;
  const { id, title, level } = data;
  const navigate = useNavigate();

  return (
    <div className="ProblemHeader">
      <div className="Problem-title">
        {id}. {title}(lv.{level})
      </div>
      <div className="backButton">
        <button
          onClick={() => {
            navigate('/practice');
          }}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
};
export default ProblemHeader;
