import "./App.css";
import Testimonial from "./components/Testimonial";
import reviews from "./data.js";
function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden flex flex-col justify-center items-center bg-gray-200 gap-10">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl font-bold">Our Testimonials</h1>
        <div className="h-1 bg-purple-400 w-6/12"></div>
      </div>
      <Testimonial reviews={reviews}/>
    </div>
  );
}

export default App;
