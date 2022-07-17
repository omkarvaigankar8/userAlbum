import ClipLoader from "react-spinners/ClipLoader";


function Loader({loading}) {

  let color = "#ffffff";
    console.log("load",loading)
  return (
    <div className="sweet-loading">
      <ClipLoader color={color} loading={loading}   size={150} />
    </div>
  );
}

export default Loader;