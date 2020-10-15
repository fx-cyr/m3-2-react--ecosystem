import React from "react";
import styled from "styled-components";

let IntroAbout = styled.div`
  margin: 65px;
`;

const About = () => {
  return (
    <IntroAbout>
      <p>
        Fruit emporium is founded on a very simple principle:{" "}
        <b>Fruit is good</b>.
      </p>
      <p>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </p>
    </IntroAbout>
  );
};

export default About;
