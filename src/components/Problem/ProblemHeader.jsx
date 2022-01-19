import { useNavigate } from 'react-router-dom';

const ProblemHeader = ({ data }) => {
  // const { data } = props;
  const { id, title, level } = data;
  const navigate = useNavigate();

  return (
    <div>
      <div>
        {id}, {title}, lv.{level}
      </div>
      <div>
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
