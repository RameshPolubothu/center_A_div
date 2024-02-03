import { useState } from "react";
import { Link } from "react-router-dom";

function register() {
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [role, setRole] = useState(Roles.STUDENT);
  // const [block_id, setBlock_id] = useState("");
  // const [usn, setUsn] = useState("");
  // const [room, setRoom] = useState("");
  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // const body = {full_name:fullname, email, password,phone, type: role, block_id, usn, room}
  //     let body;
  //     if (role === Roles.WARDEN) {
  //       body = {
  //         full_name: fullname,
  //         email,
  //         password,
  //         phone,
  //         type: role,
  //         block_id,
  //       };
  //     } else {
  //       body = {
  //         full_name: fullname,
  //         email,
  //         password,
  //         phone,
  //         type: role,
  //         block_id,
  //         usn,
  //         room,
  //       };
  //     }
  //     const response = await fetch("http://localhost:3000/register", {
  //       method: "POST",
  //       headers: { "content-type": "application/json " },
  //       body: JSON.stringify(body),
  //     });
  //     console.log(response);
  //     const data = await response.json();
  //     console.log(data);
  //     if (data.jwtToken) {
  //       window.location = "/";
  //     } else {
  //       alert("user already exists");
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
        <div className="relative mt-20">
          <div className="relative flex sm:w-full md:w-[30rem] rounded-lg border-gray-600 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-6 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <span className="flex items-center gap-2 text-[#89288f] flex-shrink-0 text-3xl font-black  tracking-normal opacity-100">
                  Sign Up
                </span>
              </div>
              {/* 
              <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
                Welcome!
              </h4> */}
              <p className="mb-6 text-gray-500">
                Please sign-in to access your account
              </p>

              <form className="mb-4" action="#" method="POST">
                <div className="mb-4">
                  <div className="flex justify-between">
                    <label
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                      htmlFor="fullname"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="text"
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-orange-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="full-name"
                      placeholder="Enter your full name"
                      onChange={(element) => setFullname(element.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-orange-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      id="email"
                      name="email-username"
                      placeholder="Enter your email "
                      onChange={(element) => setEmail(element.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="phonenumber"
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-orange-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="phone-number"
                      placeholder="Enter your phone number"
                      onChange={(element) => setPhone(element.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <label
                      htmlFor="hostel"
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >
                      Hostel No.
                    </label>
                    <div className="relative">
                      <select
                        id="hostel"
                        name="hostel"
                        className="block w-full cursor-pointer appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-gray-400 text-sm outline-none focus:border-orange-500 focus:bg-white"
                        onChange={(element) =>
                          setBlock_id(element.target.value)
                        }
                      >
                        <option value="" disabled selected>
                          Hostel
                        </option>
                        <option value="hostel-1">Hostel-1</option>
                        <option value="hostel-2">Hostel-2</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    <label
                      htmlFor="blockId"
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >
                      Block ID
                    </label>
                    <div className="relative">
                      <select
                        id="blockId"
                        name="blockId"
                        className="block w-full cursor-pointer appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-orange-500 focus:bg-white text-gray-400 "
                        onChange={(element) =>
                          setBlock_id(element.target.value)
                        }
                      >
                        <option value="" disabled selected>
                          Wing
                        </option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="password"
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >
                      Room
                    </label>
                    <input
                      type="text"
                      className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white text-gray-400 focus:shadow"
                      name="password"
                      placeholder="Room No."
                      onChange={(element) => setRoom(element.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="w-full">
                    <label
                      htmlFor="password"
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-orange-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="password"
                      placeholder="................."
                      onChange={(element) => setPassword(element.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <button
                    className="grid w-full cursor-pointer select-none rounded-md border bg-newpurple py-2 px-5 text-center align-middle text-sm font-bold text-white shadow hover:border-[#75237a] hover:bg-[#75237a] hover:text-white focus:border-[#75237a] focus:bg-[#75237a] focus:text-white focus:shadow-none tracking-wide"
                    // onClick={onSubmit}
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="mb-4 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="cursor-pointer text-newpurple underline hover:text-orange-500 hover:underline-offset-2 ms-2"
                >
                  {" "}
                  Login{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default register;
