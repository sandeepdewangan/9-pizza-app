import { Form, redirect } from "react-router-dom";

const CreateOrder = () => {
  return (
    <div>
      <h1>CreateOrder</h1>
      <Form method="POST">
        <input type="text" name="fullname" />
        <input type="text" name="mobile" />
        <button>Add</button>
      </Form>
    </div>
  );
};

// whenever form is submitted this function calls.
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // call actions from here
  return redirect("/menu");
}

export default CreateOrder;
