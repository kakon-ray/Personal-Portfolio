import React from "react";

import SkillDetails from "./SkillDetails";

const Skill = () => {
  var sectionStyle = {
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundImage: `url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80")`,
  };
  return (
    <div className="" id="skill" style={sectionStyle}>
      <div className="bg-black-background">
        <div className="grid grid-cols1 md:grid-cols-2 content-center text-white mx-4 lg:mx-12">
          <div>
            <h3 class="text-4xl text-pink-600-700 text-center font-bold mb-6 lg:ml-24 py-8 uppercase">
              Certificate
            </h3>

            <div className="flex items-center flex-col">
              <ol class="border-l-2 border-pink-600 mx-auto">
                <li>
                  <SkillDetails
                    title="BSC in Computer Science & Engineering"
                    education=" Northern University Business & Technology / 2020 -
                          2023"
                    detials=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque scelerisque diam non nisi semper, et elementum
                        lorem ornare. Maecenas placerat facilisis mollis. Duis
                        sagittis ligula in sodales vehicula."
                  />
                </li>
                <li>
                  <SkillDetails
                    title=" Web Development"
                    education="Khulna University of Engineering & Technology / 2021 -
                          2022"
                    detials="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque scelerisque diam non nisi semper, et elementum
                        lorem ornare. Maecenas placerat facilisis mollis. Duis
                        sagittis ligula in sodales vehicula."
                  />
                </li>

                <li>
                  <SkillDetails
                    title="Full Stack Web Development"
                    education="Programming Hero / 2022(January) - 2022(Jun)"
                    detials="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque scelerisque diam non nisi semper, et elementum
                        lorem ornare. Maecenas placerat facilisis mollis. Duis
                        sagittis ligula in sodales vehicula."
                  />
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h3 class="text-4xl text-pink-600-700 font-bold mb-6 text-center lg:ml-24 py-8 uppercase">
              Experience
            </h3>

            <div className="flex items-center flex-col">
              <ol class="border-l-2 border-pink-600 mx-auto">
                <li>
                  <SkillDetails
                    title="Front End Development"
                    education=" JavaScript, React.js, HTML5, CSS3, React-Bootstrap,
                          Tailwind CSS, Firebase, Firebase Auth,"
                    detials="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque scelerisque diam non nisi semper, et elementum
                        lorem ornare. Maecenas placerat facilisis mollis. Duis
                        sagittis ligula in sodales vehicula."
                  />
                </li>
                <li>
                  <SkillDetails
                    title="Back End Developmentt"
                    education="Node.js, Express.js, MongoDB"
                    detials="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque scelerisque diam non nisi semper, et elementum
                        lorem ornare. Maecenas placerat facilisis mollis. Duis
                        sagittis ligula in sodales vehicula."
                  />
                </li>

                <li>
                  {" "}
                  <SkillDetails
                    title="Full Stack Development"
                    education=" Responsive Design, Frontend development, Backend
                          development"
                    detials="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque scelerisque diam non nisi semper, et elementum
                        lorem ornare. Maecenas placerat facilisis mollis. Duis
                        sagittis ligula in sodales vehicula."
                  />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
