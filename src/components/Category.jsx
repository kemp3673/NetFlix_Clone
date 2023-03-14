import React, { useRef, useEffect, useState } from "react";
import CardMaker from "../utility/Cards";
import styled from "styled-components";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Category = ({ title, movies }) => {
  const [showSlider, setShowSlider] = useState(false);
  const [slideValue, setSlideValue] = useState(0);
  const rowRef = useRef(null);
  const screenWidth = window.innerWidth;

  const handleScroll = (direction) => {
    // Reference to row of cards
    const row = rowRef.current;
    // Width of row of cards
    let rowWidth = row.getBoundingClientRect().width;

    if (direction === "left" && slideValue > 0) {
      // If remaining cards are greater than screen width, scroll by screen width
      if ((slideValue - screenWidth) > 0) {
        // Set slide value to current slide value minus screen width
        setSlideValue(slideValue-screenWidth);
      } else {
        // If remaining cards are less than screen width, scroll by remaining cards
        setSlideValue(0);
      }
    } else if (direction === "right" && slideValue <= (rowWidth-screenWidth)) {
      // If remaining cards are greater than screen width, scroll by screen width
      if ((slideValue + screenWidth) < (rowWidth - screenWidth)) {
        setSlideValue((slideValue + screenWidth) - 164);
      } else {
        // If remaining cards are less than screen width, scroll by remaining cards
        // 124px is width of right arrow (60px) + 4rem padding-left (64px)
        setSlideValue(rowWidth - (screenWidth - 124));
      }
    }
  };

  useEffect(() => {
    const row = rowRef.current;
    row.style.transform = `translateX(-${slideValue}px)`;
  }, [slideValue]);

  return (
    <Wrapper
    className="category"
    onMouseEnter={() => setShowSlider(true)}
    onMouseLeave={() => setShowSlider(false)}
    >
      {showSlider && (
        <LeftArrow className="leftArrow" onClick={() => handleScroll('left')}>
          <HiOutlineChevronLeft />
        </LeftArrow>
      )}
      <h1>{title}</h1>
      <div
        className="row"
        ref={rowRef}
      >
        {movies.map((item) => CardMaker(item))}
      </div>
      {showSlider && (
        <RightArrow onClick={() => handleScroll('right')}>
          <HiOutlineChevronRight />
        </RightArrow>
      )}
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 4rem;
  height: 350px;
  /* overflow-x: scroll; */
  .row {
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    transition: transform 1s ease-in-out;
    transform: translateX(0px);
  }
`;

const LeftArrow = styled.button`
  position: absolute;
  border: none;
  top: 68px;
  left: 0px;
  width: 60px;
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

const RightArrow = styled.button`
  position: absolute;
  border: none;
  top: 68px;
  right: 0;
  width: 60px;
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
