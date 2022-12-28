import Dashboard from "../user/user";
import SuperPuzzle from "../puzzle/Puzzle";

const Dash = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        margin: "20px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
        flexWrap: "wrap"
      }}
    >
      <Dashboard />
      <SuperPuzzle />
    </div>
  );
};

export default Dash;
