import React from "react";
import { Timeline, Text } from "@mantine/core";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section
      style={{ backgroundColor: "#1f3140" }}
      className="container-fluid about-background"
    >
      <div className="about-section" id="about">
        <div className="container">
          <div className="row">
            {/* <h4 className="numbered-heading">About Me</h4> */}
            <h2 className="about-header">A bit about myself</h2>
          </div>
          <div className="row about-content">
            <div className="about-text col-sm-7">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-sm-5">
              <Timeline active={1} bulletSize={24} lineWidth={2}>
                <Timeline.Item
                  bullet={<i class="fa-solid fa-school"></i>}
                  title="Ontario Tech University - Undergraduate"
                >
                  <Text color="dimmed" size="sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </Text>
                  <Text size="xs" mt={4}>
                    September, 2019
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  bullet={<i class="fa-solid fa-briefcase"></i>}
                  title="Celestica - Software Engineer Intern"
                >
                  <Text color="dimmed" size="sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </Text>
                  <Text size="xs" mt={4}>
                    May, 2022
                  </Text>
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
