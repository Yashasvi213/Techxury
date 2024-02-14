import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





const Otp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    otp: "",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (event) => {
    setData({ ...data, otp: event.target.value });
    console.log(data);
  };

  //submitting the form
  const submitForm = async (e) => {
    e.preventDefault();
    const result = await fetch("http://localhost:8080/otp/step2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      
    });

    if ((await result.text()) === "1") {
      
      navigate("/profile");
      
      
     
    } else {
      console.log(result.text());
      alert("Invalid OTP");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight lg_color_wt">
            OTP Verification
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 lg_color_wt"
              >
                OTP Verification
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="otp"
                  name="otp"
                  type="otp"
                  autoComplete="otp"
                  placeholder="Enter OTP"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={submitForm}
                to="/login/Login"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                OTP Verified
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otp;
