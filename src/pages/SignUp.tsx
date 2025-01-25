// import { Link } from "react-router-dom";

// const SignUp = () => {
//   return (

//     <div>
//       <section>
//         <div className=" h-[80px] border border-[black] flex lg:px-[120px] md:px-[32px] px-[16px] justify-between items-center ">
// <Link to="/">
//   <svg
//     width="83"
//     height="20"
//     viewBox="0 0 83 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="_NavBar_logo_sxaj7_21"
//   >
//     <path
//       d="M0.00635804 9.74208H9.12617L7.17425 11.694H0.00635804V14.6036H4.26465L0 18.8682L0.914763 19.7822L5.17862 15.5176V19.7759H8.08822V12.608L10.0282 10.6688V19.7759H13.9074V5.86288H0.00635804V9.74208Z"
//       fill="#0BCE5A"
//     ></path>
//     <path
//       d="M59.1178 15.8657L61.6316 14.8039C62.1085 16.3139 63.1957 17.5697 65.1508 17.5697C66.6036 17.5697 67.5812 16.7312 67.5812 15.7258C67.5812 12.6811 59.7321 14.664 59.7321 9.32964C59.7321 7.12261 61.6594 5.47429 64.7033 5.47429C67.357 5.47429 69.5919 6.87147 70.2062 8.93783L67.6932 9.99962C67.33 8.60324 66.0171 7.8212 64.732 7.8212C63.3912 7.8212 62.5527 8.3513 62.5527 9.27401C62.5527 11.9833 70.4582 9.91617 70.4582 15.698C70.4582 18.1284 68.3354 20 65.1508 20C61.7151 20 59.76 17.8772 59.1178 15.8657Z"
//       fill="#060809"
//     ></path>
//     <path
//       d="M71.4856 15.8657L73.9994 14.8039C74.4763 16.3139 75.5635 17.5697 77.5194 17.5697C78.9714 17.5697 79.9489 16.7312 79.9489 15.7258C79.9489 12.6811 72.0999 14.664 72.0999 9.32964C72.0999 7.12261 74.0272 5.47429 77.0719 5.47429C79.7256 5.47429 81.9596 6.87147 82.5748 8.93783L80.061 9.99962C79.6978 8.60324 78.3848 7.8212 77.0997 7.8212C75.7598 7.8212 74.9213 8.3513 74.9213 9.27401C74.9213 11.9833 82.8259 9.91617 82.8259 15.698C82.8259 18.1284 80.7031 20 77.5186 20C74.0836 20 72.1278 17.8772 71.4856 15.8657Z"
//       fill="#060809"
//     ></path>
//     <path
//       d="M57.506 11.0058V19.7767H54.5201V17.6261C53.7103 19.0503 51.9769 20.0001 50.1068 20.0001C47.3133 20.0001 45.386 18.2405 45.386 15.8387C45.386 13.073 47.5366 11.5923 51.8664 11.1497L54.5201 10.8667V10.6704C54.5201 8.93865 53.3192 7.87766 51.4754 7.87766C49.7714 7.87766 48.5706 8.88302 48.3759 10.5592L45.6387 10.0561C46.0854 7.29113 48.4879 5.47511 51.4762 5.47511C55.0478 5.47511 57.506 7.48584 57.506 11.0058ZM54.5201 13.7143V13.1278L51.8386 13.4354C49.5481 13.6865 48.3751 14.525 48.3751 15.7537C48.3751 16.8711 49.297 17.6531 50.7212 17.6531C53.0895 17.6531 54.4891 16.0056 54.5201 13.7143Z"
//       fill="#060809"
//     ></path>
//     <path
//       d="M42.8193 8.32431C40.7529 8.32431 38.9369 10.1673 38.9369 14.5234V19.7751H35.8922V5.69844H38.9369V8.37994C39.6911 6.7038 41.535 5.47511 43.2389 5.47511C43.7698 5.47511 44.3842 5.55459 44.803 5.72626L44.6353 8.66287C44.1322 8.43557 43.4615 8.32431 42.8193 8.32431Z"
//       fill="#060809"
//     ></path>
//     <path
//       d="M22.8142 17.9885V19.7767H19.7695V0H22.8142V7.45798C23.6519 6.28492 25.3002 5.47109 27.1154 5.47109C31.361 5.47109 33.7914 8.49116 33.7914 12.7336C33.7914 16.976 31.361 19.996 27.059 19.996C25.1882 20 23.4842 19.1615 22.8142 17.9885ZM30.7467 12.7375C30.7467 9.94397 29.1262 8.12796 26.668 8.12796C24.2098 8.12796 22.5901 9.94318 22.5901 12.7375C22.5901 15.5025 24.2106 17.3471 26.668 17.3471C29.1254 17.3471 30.7467 15.5033 30.7467 12.7375Z"
//       fill="#060809"
//     ></path>
//   </svg>
// </Link>
//           <Link to="/Login" className="_NavBar_link_sxaj7_26">
//             Log in
//           </Link>
//         </div>

//         <div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    country: "Nigeria",
    businessType: "Partnership",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="signup-container">
      {/* Navbar Section */}
      <section>
        <div className="h-[80px]  flex lg:px-[120px] md:px-[32px] px-[16px] justify-between items-center">
          <Link to="/">
            <svg
              width="83"
              height="20"
              viewBox="0 0 83 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="_NavBar_logo_sxaj7_21"
            >
              <path
                d="M0.00635804 9.74208H9.12617L7.17425 11.694H0.00635804V14.6036H4.26465L0 18.8682L0.914763 19.7822L5.17862 15.5176V19.7759H8.08822V12.608L10.0282 10.6688V19.7759H13.9074V5.86288H0.00635804V9.74208Z"
                fill="#0BCE5A"
              ></path>
              <path
                d="M59.1178 15.8657L61.6316 14.8039C62.1085 16.3139 63.1957 17.5697 65.1508 17.5697C66.6036 17.5697 67.5812 16.7312 67.5812 15.7258C67.5812 12.6811 59.7321 14.664 59.7321 9.32964C59.7321 7.12261 61.6594 5.47429 64.7033 5.47429C67.357 5.47429 69.5919 6.87147 70.2062 8.93783L67.6932 9.99962C67.33 8.60324 66.0171 7.8212 64.732 7.8212C63.3912 7.8212 62.5527 8.3513 62.5527 9.27401C62.5527 11.9833 70.4582 9.91617 70.4582 15.698C70.4582 18.1284 68.3354 20 65.1508 20C61.7151 20 59.76 17.8772 59.1178 15.8657Z"
                fill="#060809"
              ></path>
              <path
                d="M71.4856 15.8657L73.9994 14.8039C74.4763 16.3139 75.5635 17.5697 77.5194 17.5697C78.9714 17.5697 79.9489 16.7312 79.9489 15.7258C79.9489 12.6811 72.0999 14.664 72.0999 9.32964C72.0999 7.12261 74.0272 5.47429 77.0719 5.47429C79.7256 5.47429 81.9596 6.87147 82.5748 8.93783L80.061 9.99962C79.6978 8.60324 78.3848 7.8212 77.0997 7.8212C75.7598 7.8212 74.9213 8.3513 74.9213 9.27401C74.9213 11.9833 82.8259 9.91617 82.8259 15.698C82.8259 18.1284 80.7031 20 77.5186 20C74.0836 20 72.1278 17.8772 71.4856 15.8657Z"
                fill="#060809"
              ></path>
              <path
                d="M57.506 11.0058V19.7767H54.5201V17.6261C53.7103 19.0503 51.9769 20.0001 50.1068 20.0001C47.3133 20.0001 45.386 18.2405 45.386 15.8387C45.386 13.073 47.5366 11.5923 51.8664 11.1497L54.5201 10.8667V10.6704C54.5201 8.93865 53.3192 7.87766 51.4754 7.87766C49.7714 7.87766 48.5706 8.88302 48.3759 10.5592L45.6387 10.0561C46.0854 7.29113 48.4879 5.47511 51.4762 5.47511C55.0478 5.47511 57.506 7.48584 57.506 11.0058ZM54.5201 13.7143V13.1278L51.8386 13.4354C49.5481 13.6865 48.3751 14.525 48.3751 15.7537C48.3751 16.8711 49.297 17.6531 50.7212 17.6531C53.0895 17.6531 54.4891 16.0056 54.5201 13.7143Z"
                fill="#060809"
              ></path>
              <path
                d="M42.8193 8.32431C40.7529 8.32431 38.9369 10.1673 38.9369 14.5234V19.7751H35.8922V5.69844H38.9369V8.37994C39.6911 6.7038 41.535 5.47511 43.2389 5.47511C43.7698 5.47511 44.3842 5.55459 44.803 5.72626L44.6353 8.66287C44.1322 8.43557 43.4615 8.32431 42.8193 8.32431Z"
                fill="#060809"
              ></path>
              <path
                d="M22.8142 17.9885V19.7767H19.7695V0H22.8142V7.45798C23.6519 6.28492 25.3002 5.47109 27.1154 5.47109C31.361 5.47109 33.7914 8.49116 33.7914 12.7336C33.7914 16.976 31.361 19.996 27.059 19.996C25.1882 20 23.4842 19.1615 22.8142 17.9885ZM30.7467 12.7375C30.7467 9.94397 29.1262 8.12796 26.668 8.12796C24.2098 8.12796 22.5901 9.94318 22.5901 12.7375C22.5901 15.5025 24.2106 17.3471 26.668 17.3471C29.1254 17.3471 30.7467 15.5033 30.7467 12.7375Z"
                fill="#060809"
              ></path>
            </svg>
          </Link>
          <Link to="/Login" className="text-[15px] font-[600] ">
            Log in
          </Link>
        </div>
      </section>

      {/* Signup Form */}
      <div className="pt-[100px] max-w-[345px] mt-0 mx-auto mb-8">
        <form className="signup-form p-[16px]  " onSubmit={handleSubmit}>
          <header className="mb-[32px]">
            <h1 className="text-[28px] font-[600] ">Let’s get started</h1>
          </header>

          <fieldset>
            {/* First and Last Name */}
            <div className="form-row flex justify-between font-[12px]  ">
              <div className="flex flex-col text-[12px] w-[48%] font-[600]">
                <label className="text-[13px] mb-[4px] " htmlFor="firstName">
                  First name
                </label>
                <div>
                  <input
                    className="py-[10px] px-[12px] w-full "
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <p></p>
              </div>

              <div className="input-group text-[13px] w-[48%] font-[600]">
                <label htmlFor="lastName">Last name</label>
                <div>
                  <input
                    className="py-[10px] px-[12px]  w-full "
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <p></p>
                </div>
              </div>
            </div>

            {/* Business Name */}
            <div className="flex flex-col mt-[24px] text-[13px] font-[600] ">
              <label className="mb-[4px]" htmlFor="businessName">
                Business name
              </label>
              <div>
                <input
                  className="py-[10px] px-[12px]  w-full rounded-[4px] "
                  type="text"
                  id="businessName"
                  name="businessName"
                  placeholder="What is your business name?"
                  value={formData.businessName}
                  onChange={handleChange}
                />
                <p></p>
              </div>
            </div>

            {/* Country */}
            <div className=" flex flex-col mt-[24px] text-[13px] ">
              <label className="mb-[4px]" htmlFor="country">
                Country
              </label>
              <select
                className=" px-[10px] py-[12px]"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Nigeria">Nigeria</option>
                {/* Add more country options here */}
              </select>
            </div>

            {/* Business Type */}
            <div className=" flex flex-col mt-[24px]">
              <label className="text-[13px]" htmlFor="businessType">
                Business type
              </label>
              <select
                className="px-[10px] py-[12px] text-[13px]"
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
              >
                <option value="Partnership">Partnership</option>
                <option value="Limited Liability">Limited Liability</option>
                {/* Add more business types here */}
              </select>
            </div>

            {/* Email */}
            <div className="input-group mt-[24px] flex flex-col text-[13px] ">
              <label htmlFor="email">Email</label>
              <input
                className=" px-[10px] py-[12px] "
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="input-group text-[13px] mt-[20px]">
              <label htmlFor="phone">Phone</label>
              <div className="flex justify-between">
                <select
                  id="country-code"
                  className="border px-[10px] py-[12px] w-[30%] focus:ring focus:ring-blue-300"
                >
                  <option value="+234" selected>
                    +234
                  </option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  <option value="+254">+254</option>
                </select>

                <input
                  className=" px-[10px] py-[12px]"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>

          {/* Password */}
          <div className="  flex flex-col mt-[24px] text-[13px]">
            <label className="ml-[15px] gap-1 flex mt-[24px] justify-center items-center  ">
              Password
              <div data-testid="trigger" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7px"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <div
                  className="_brassui-tooltip_popover_v40hr_7 _brassui-tooltip_popover__right_v40hr_117"
                  style={{ width: "270px" }}
                >
                  <span className="_InfoToolTip_info_1tia0_1 hidden">
                    Your password must be at least 8 characters
                  </span>
                </div>
              </div>
            </label>
            <div className="_brassui-text-input_container_18bzg_13">
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password (min. of 8 characters)"
                  name="user.password"
                  autoComplete="new-password"
                  aria-label="text-input"
                  data-testid="input"
                  className=" w-full px-[10px]  py-[12px]"
                  value=""
                />
                <span
                  className="_PasswordInput text-[#0ea84c] absolute top-3 left-[16rem]"
                  role="button"
                  tabIndex={0}
                >
                  Show
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[24px] ">
            <label className=" flex text-[12px] align-top">
              <span>
                <input
                  id="accept-terms"
                  className="mr-[1rem] mt-[5px]"
                  type="checkbox"
                />
              </span>

              <span className="_brassui-checkBox_label_wn13t_21">
                <p className="text-[12px]">
                  I have read, understood and I agree to Brass’
                  <a
                    className="text-[#0ea84c]"
                    target="__blank"
                    href="https://www.trybrass.com/legal/privacy-policy/"
                  >
                    Privacy Policy
                  </a>
                  , and
                  <a
                    className="text-[#0ea84c]"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.trybrass.com/legal/terms-of-service/"
                  >
                    Terms and conditions.
                  </a>
                </p>
              </span>
            </label>

            <div className="mt-[12px]">
              <label className=" flex  text-[12px]">
                <span>
                  <input
                    name="user.opt_in_business_club"
                    id="user.opt_in_business_club"
                    className="mr-[1rem] mt-[5px]"
                    type="checkbox"
                  />
                </span>

                <span className="_brassui-checkBox_label_wn13t_21">
                  <p className="text-[12px]">
                    Join Brass business community for exclusive access to
                    business resources and events to help you grow
                  </p>
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              disabled={true}
              type="submit"
              className="submit-button cursor-pointer rounded-[5px] mt-[32px] mb-[16px] py-[14px] px-[32px] border-green-500 border  w-full text-center"
            >
              Submit
            </button>
          </div>

          <div className=" flex flex-col items-center">
            <div className="text-[12px] px-[14px] py-[24px] bg-[#f9fafa] w-full">
              <span className="text-[12px] font-[600] text-center">
                Having problems opening an account?
              </span>
              <div className="flex mt-[5px]">
                <button
                  type="button"
                  className="_Button_w7pun_1 _Button_text_w7pun_104 _AuthFaq_content_btn_1ul06_32"
                >
                  <span className="text-[#0ea84c]">Chat with us</span>
                </button>
                <span className="px-[4px]">|</span>
                <button
                  type="button"
                  className="_Button_w7pun_1 _Button__disabled_w7pun_175 _Button_text_w7pun_104 undefined _AuthFaq_content_btn_1ul06_32"
                >
                  <span className="_Button_content_w7pun_44">
                    View recommended solutions
                  </span>
                </button>
              </div>
            </div>

            <div className="text-[12px] mb-[50px] mt-[30px] text-[#0ea84c]">
              <a
                className="underline "
                target="_blank"
                href="https://trybrass.com/customers"
                rel="noreferrer"
              >
                Why do thousands of businesses choose brass?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
