import ScienceNav from '../../components/Science/ScienceNav';
import Science from '../../components/Science/Science';

const SciencePage = (props) => {
  return (
    <>
      <div className="science">
        <ScienceNav />
          <Science/>
      </div>
    </>
  );
};

export default SciencePage;
