import React from 'react';

const AnimalRegister = () => {
  return (
    <div className="w-full bg-grey-500">
      <div className="container mx-auto py-8">
        <div className="w-96 mx-auto bg-white rounded shadow">
          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">
            Student Application
          </div>

          <form name="student_application" id="student_application" action="">
            <div className="py-4 px-8">
              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Student ID:
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-grey-darker"
                  type="text"
                  name="student_id"
                  id="student_id"
                  value=""
                  placeholder="Enter Your ID"
                />
              </div>

              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Student Name
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-grey-darker"
                  type="text"
                  name="student_name"
                  id="student_name"
                  value=""
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Course Name:
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-grey-darker"
                  type="text"
                  name="course_name"
                  id="course_name"
                  value=""
                  placeholder="Enter Your Course Name"
                />
                <p id="error_creater_id"></p>
              </div>

              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Addmission Date:
                </label>
                <input
                  className=" border rounded w-full py-2 px-3 text-grey-darker"
                  type="datetime-local"
                  name="addmission_date"
                  id="addmission_date"
                  value=""
                />
                <p id="error_intake_year"></p>
              </div>
              <div className="mb-4">
                <button className="mb-2 mx-16 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 ">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimalRegister;