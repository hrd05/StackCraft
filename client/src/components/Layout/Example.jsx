import verifyLogo from "../../assets/verified.jpg";
import flowchart from "../../assets/flowchart.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Example({ id }) {
  Example.propTypes = {
    id: PropTypes.any.isRequired,
  };
  return (
    <div className="bg-blue-300 px-2">
      <div className="flex justify-center bg-blue-300 col-span-3 p-6 pb-0">
        <p className="bg-gray-950 text-white border border-black text-center rounded-md text-lg p-4 w-full">
          UNDERSTANDING HOW IT WORKS
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 text-justify tracking-tight">
        <div className="flex items-center justify-center bg-blue-300 text-black pt-6 col-span-3 md:col-span-1">
          <img
            style={{ height: "32rem", width: "23rem" }}
            src={flowchart}
            alt="REST Flowchart"
          />
        </div>
        <div className="flex-col items-center justify-start bg-blue-300 text-black p-6 pb-2 col-span-3 md:col-span-2">
          <p>
            A unique API endpoint has been created for you at the address below.
            You can append any REST resource to it and issue a request. Your
            TestTest API will automatically create the resource.
          </p>
          <div className="overflow-x-auto bg-gray-950 text-white border border-black text-center rounded-md p-4 mt-4 mb-4 mx-6 text-sm">
            https://stack-craft.vercel.app/{id}
          </div>
          <p>
            For example, let&aposs say you are building a &ldquo;Student
            Database&rdquo; application and it needs to Create, Read, Update and
            Delete (CRUD) the student records like this one:
          </p>
          <p className="text-center mt-4 mb-4">
            {'"name":"Kevin", "age":14, "grade":"8"'}
          </p>
          <p>
            To create a student, your application needs to issue a POST request
            with the student JSON payload to a REST API Endpoint. The name{" "}
            <span className="">&ldquo;students&rdquo;</span>
            sounds apt and is a good name for the REST resource, so append it to
            your endpoint:
          </p>
          <div className="overflow-x-auto bg-gray-950 text-white border border-black text-center rounded-md p-4 mt-4 mb-4 mx-6 text-sm">
            https://stack-craft.vercel.app/{id}/students
          </div>
          <p>
            Every time you click the button a POST request will be sent to your
            endpoint to create a new student. To get all students created so
            far, you can issue a GET request using your browser by going to
            <span> </span>
            <Link
              className="font-bold"
              to="https://crudcrud.com/api/831596645f1a41b48326571a360a598f/students"
              target="_blank"
              rel="noopener noreferrer"
            >
              the address of the REST endpoint
            </Link>
            .
          </p>
          <br></br>
          <p className="text-justify">
            Note that every student record gets a unique{" "}
            <span className="">_id</span> property generated by the TESTEST API
            to make sure that there is always a way to refer to individual
            objects. Use this identifier when you want to read (GET), update
            (PUT) or delete (DELETE) individual entities from your resources.
            See the <span className="font-bold">the above table</span> for
            details.
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-blue-300 col-span-3 p-4">
        <p className="bg-gray-950 text-white border border-black text-center rounded-md text-lg p-4 w-full mx-2 my-2">
          WHY CHOOSE TESTEST-API?
        </p>
      </div>
      <div className="flex-col items-center justify-center text-center mx-[10vw] gap-4">
        <div className="grid grid-cols-2 bg-blue-300 text-md md:text-lg lg:text-xl xl:text-xl">
          <div className="bg-blue-300 text-sky-900 font-bold col-span-1">
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-8 h-6 rounded-md"
                src={verifyLogo}
                alt="verify pic"
              />
              <p>Fast Prototyping</p>
              <br></br>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-8 h-6 rounded-md"
                src={verifyLogo}
                alt="verify pic"
              />
              <p>Minimum Viable Products</p>
              <br></br>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-8 h-6 rounded-md"
                src={verifyLogo}
                alt="verify pic"
              />
              <p>Proof-of-Concept Applications</p>
              <br></br>
            </div>
          </div>
          <div className="bg-blue-300 text-sky-900 font-bold col-span-1">
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-8 h-6 rounded-md"
                src={verifyLogo}
                alt="verify pic"
              />
              <p>Tutorials</p>
              <br></br>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-8 h-6 rounded-md"
                src={verifyLogo}
                alt="verify pic"
              />
              <p>Application Testing</p>
              <br></br>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-8 h-6 rounded-md"
                src={verifyLogo}
                alt="verify pic"
              />
              <p>Small Production Applications</p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-8">
        <div className="flex justify-center bg-blue-300 px-6 py-0">
          <p className="bg-gray-950 text-white border border-black text-center rounded-md text-lg p-4 w-full">
            GETTING STARTED
          </p>
        </div>
        <h1 className="text-xl md:text-xl lg:text-2xl font-bold p-3 pb-0">
          It&apos;s simple
        </h1>
        <h1 className="text-md md:text-md lg:text-xl pb-3">
          <strong>You</strong> take care of the <strong>CLIENT</strong>
          <br></br> <strong>TestTest</strong> will take care of the{" "}
          <strong>REST</strong>
        </h1>
        <div className="overflow-x-auto bg-sky-900 text-white border border-sky-900 rounded-md p-4 mb-2 mx-6 md:mx-[16vw] text-md">
          https://testtest.com/api/{id}
        </div>
        <h1 className="text-md md:text-md lg:text-xl pb-3">
          Your <strong>TestTest REST endpoint</strong> is ready and running,
          waiting for your requests. <br></br>
          <strong>Try for free now !</strong>
        </h1>
        <Link
          className="hover:text-white bg-sky-600 text-white rounded-md pb-3 pt-2 px-5 text-sm md:text-md lg:text-md xl:text-md"
          to={`/Dashboard/${id}`}
        >
          Check Endpoint Information
        </Link>
      </div>
    </div>
  );
}
export default Example;
