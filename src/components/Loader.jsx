import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <BarLoader color="#96a9eb" />
    </div>
  );
};

export default Loader;
