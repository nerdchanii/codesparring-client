const Errpage = (props) => {
  if (!props.log) {
    return <h1>hi</h1>;
  }
  return (
    <div>
      <h1>Error!</h1>
      <details>
        <summary>show log</summary>
        <div>{props.log}</div>
      </details>
    </div>
  );
};

export default Errpage;
