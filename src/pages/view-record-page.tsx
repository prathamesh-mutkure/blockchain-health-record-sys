import DataEvent from "components/view-record/data-event";
import SingleValData from "components/view-record/single-val-data";

const patientData = [
  {
    label: "First Name",
    value: "Jane",
  },
  {
    label: "Last Name",
    value: "Doe",
  },
  {
    label: "Gender",
    value: "Female",
  },
  {
    label: "Contact No.",
    value: "+11 998001001",
  },
  {
    label: "Current Address",
    value: "Pune, India",
  },
  {
    label: "Permananent Address",
    value: "Pune, India",
  },
  {
    label: "Email",
    value: "test@gmail.com",
  },
  {
    label: "DOB",
    value: "Feb 06, 1998",
  },
];

const ViewRecordPage: React.FC = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="w-full text-white bg-main-color">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <a
              href="/"
              className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
            >
              App Name
            </a>

            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>

                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
              </div>

              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                Jane Doe
              </h1>

              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                Owner at Her Company Inc.
              </h3>

              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>

              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>

                <li className="flex items-center py-3">
                  <span>Created At</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>

            <div className="my-4"></div>

            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>Similar Profiles</span>
              </div>

              <div className="grid grid-cols-3">
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    Kojstantin
                  </a>
                </div>

                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    James
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>

              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  {patientData.map(({ label, value }) => (
                    <SingleValData label={label} value={value} />
                  ))}
                </div>
              </div>

              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button>
            </div>

            <div className="my-4"></div>

            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Experience</span>
                  </div>

                  <ul className="list-inside space-y-2">
                    <DataEvent
                      title="Owner at Her Company Inc."
                      date="March 2020 - Now"
                    />

                    <DataEvent
                      title="Owner at Her Company Inc."
                      date="March 2020 - Now"
                    />

                    <DataEvent
                      title="Owner at Her Company Inc."
                      date="March 2020 - Now"
                    />

                    <DataEvent
                      title="Owner at Her Company Inc."
                      date="March 2020 - Now"
                    />

                    <DataEvent
                      title="Owner at Her Company Inc."
                      date="March 2020 - Now"
                    />
                  </ul>
                </div>

                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Education</span>
                  </div>

                  <ul className="list-inside space-y-2">
                    <DataEvent
                      title="Masters Degree in Oxford"
                      date="March 2020 - Now"
                    />

                    <DataEvent
                      title="Bachelors Degreen in LPU"
                      date="March 2020 - Now"
                    />

                    <DataEvent
                      title="Masters Degree in Oxford"
                      date="March 2020 - Now"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecordPage;
