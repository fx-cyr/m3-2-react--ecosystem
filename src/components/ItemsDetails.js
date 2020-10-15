import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const FruitContainer = styled.div`
  margin: 65px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const FruitImage = styled.img`
  width: 250px;
  border-radius: 20px;
`;

const FruitInfo = styled.div`
  display: block;
  padding-left: 35px;
`;

const FruitName = styled.h1``;

const FruitLatinName = styled.p`
  border: 0px;
  color: grey;
  font-style: italic;
`;

const FruitDescription = styled.p``;

const FruitOrigin = styled.p`
  font-style: italic;
`;

const PurchaseButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: white;
  width: 170px;
  height: 40px;
  background: blue;
  border: 0px solid;
  border-radius: 10px;
`;

const SellerInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const SellerImage = styled.img`
  width: 40px;
  border-radius: 50px;
`;

const StoreName = styled.p`
  padding-left: 15px;
`;

const ItemsDetails = () => {
  const { itemID } = useParams();
  const item = items[itemID];
  const seller = sellers[item.sellerId];
  console.log(itemID);
  return (
    <>
      <FruitContainer>
        <FruitImage img src={item.imageSrc}></FruitImage>
        <FruitInfo>
          <FruitName>{item.name}</FruitName>
          <FruitLatinName>{item.latinName}</FruitLatinName>
          <FruitDescription>{item.description}</FruitDescription>
          <FruitOrigin>
            Product of <b>{item.countryOfOrigin}</b>{" "}
          </FruitOrigin>
          {item.quantity > 0 && (
            <PurchaseButton>${item.price} - Buy now</PurchaseButton>
          )}

          {item.quantity === 0 && <PurchaseButton>Out of Stock</PurchaseButton>}
          <SellerInfo>
            <SellerImage img src={seller.avatarSrc}></SellerImage>
            <StoreName>
              Sold by: <b>{seller.storeName}</b>
            </StoreName>
          </SellerInfo>
        </FruitInfo>
      </FruitContainer>
    </>
  );
};

export default ItemsDetails;
