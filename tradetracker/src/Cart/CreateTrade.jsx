import Form from "../Form/Form";
import Create from "../Home/Create";

const FormView = ({ data }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <Form data={data} />
        <Create data={data} />
      </div>
    </div>
  );
};

export default FormView;
