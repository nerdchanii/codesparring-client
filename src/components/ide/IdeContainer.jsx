import Editor from './Editor';
import Header from './Header';
import Output from './Output';
import './Ide.scss';
const IdeContainer = () => {
  return (
    <div className="IdeContainer">
      <Header />
      <Editor />
      <Output />
    </div>
  );
};

export default IdeContainer;
