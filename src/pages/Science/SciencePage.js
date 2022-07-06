import ScienceNav from '../../components/Science/ScienceNav';
const SciencePage = (props) => {
  return (
    <>
      <div className="science">
        <ScienceNav />
        <div className="sciencePages">{props.children}</div>
      </div>
    </>
  );
};

export default SciencePage;
