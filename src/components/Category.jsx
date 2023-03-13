import React, { useRef, useEffect, useState } from "react";
import CardMaker from "../utility/Cards";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Category = ({ title, movies }) => {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <Wrapper
    className="category"
    onMouseEnter={() => setShowSlider(true)}
    onMouseLeave={() => setShowSlider(false)}
    >
      {showSlider && (
        <LeftArrow>
          <FaChevronLeft />
        </LeftArrow>
      )}
      <h1>{title}</h1>
      <div className="row">{movies.map((item) => CardMaker(item))}</div>
      {showSlider && (
        <RightArrow>
          <FaChevronRight />
        </RightArrow>
      )}
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  margin-left: 4rem;
  height: 350px;
  .row {
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    transform: translateX(0px);
  }
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 68px;
  left: -80px;
  width: 80px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #5e5e5e;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    color: #8f8f8f;
  }
`;

const RightArrow = styled.div`
  position: absolute;
  top: 68px;
  right: 0;
  width: 80px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #5e5e5e;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    color: #8f8f8f;
  }
`;
