import PersonalData from "./components/PersonalData";

function App() {

  
  return (
    <>
    <div className="flex items-center gap-3">  
      <h1 className="hover:bg-green-500 cursor-pointer text-white bg-gray-500 px-5 py-1 rounded">Personal Details</h1>
      <h1 className="hover:bg-green-500 cursor-pointer text-white bg-gray-500 px-5 py-1 rounded">Education Details</h1>
      <h1 className="hover:bg-green-500 cursor-pointer text-white bg-gray-500 px-5 py-1 rounded">Skills</h1>
      <h1 className="hover:bg-green-500 cursor-pointer text-white bg-gray-500 px-5 py-1 rounded">Interest</h1>
      <h1 className="hover:bg-green-500 cursor-pointer text-white bg-gray-500 px-5 py-1 rounded">Experience</h1>
      <h1 className="hover:bg-green-500 cursor-pointer text-white bg-gray-500 px-5 py-1 rounded">Projects</h1>
      <h1 className="hover:bg-green-500 cursor-pointer text-white bg-gray-500 px-5 py-1 rounded">Objective</h1>
    </div>
      <PersonalData/>
    </>
  );
}

export default App;