import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

let SingleItem = styled.div`
  margin: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 230px;
  padding: 20px 0;
  box-shadow: 0px 0px 45px 2px rgba(0, 0, 0, 0.22);
`;
let ItemImage = styled.img`
  margin: 5px;
  margin-top: -30px;
  width: 120px;
  border-radius: 30px;
`;

let ItemName = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 5px;
`;

let Divider = styled.div`
  margin: 5px;
  width: 50px;
  height: 5px;
  background: #f0f0f0;
`;

let LatinName = styled.div`
  color: grey;
  font-style: italic;
  margin: 5px;
`;

const ListingGrid = ({ itemList }) => {
  const { imageSrc, name, latinName, id } = itemList;
  console.log(itemList);
  return (
    <SingleItem>
      <Link to={`/items/${id}`}>
        <ItemImage src={imageSrc} alt="fruit-img" />
      </Link>
      <ItemName>{name}</ItemName>
      <Divider />
      <LatinName>{latinName}</LatinName>
    </SingleItem>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;
