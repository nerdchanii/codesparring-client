import ProblemList from './ProblemList';
import './ProblemList.scss';

const ProblemListCotainers = () => {
  return (
    <div className="ProblemListContainers">
      <div className="section-title">Problem List</div>
      <div>
        <ProblemList />
      </div>
    </div>
  );
};

export default ProblemListCotainers;
