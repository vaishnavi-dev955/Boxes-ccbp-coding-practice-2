const Box = (props) => {
  const { className, Children } = props;
  return (
    <div className={className}>
      <p className="paragraph">{Children}</p>
    </div>
  );
};

const element = (
  <div className="background-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-list-container">
      <Box className="box1" Children="small" />
      <Box className="box2" Children="Medium" />
      <Box className="box3" Children="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
