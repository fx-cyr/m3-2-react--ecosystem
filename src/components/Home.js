import React from "react";
import styled from "styled-components";
import { items } from "../data";
import ListingGrid from "./ListingGrid";

let HomePage = styled.div`
  margin: 65px;
`;
let FoodSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Home = (props) => {
  console.log(props);
  return (
    <>
      <HomePage>
        <p>
          Fruit emporium sells the finest fruits from this world and beyond.
        </p>
        <p>
          <b>Browse items:</b>
        </p>
        <FoodSection>
          {Object.values(items).map((item) => {
            return <ListingGrid itemList={item} />;
          })}
        </FoodSection>
      </HomePage>
    </>
  );
};

export default Home;
