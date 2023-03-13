import React from "react";
import CardMaker from "../utility/Cards";
import styled from "styled-components";


const Category = ({title, movies}) => {
  return (
    <Wrapper className="category">
      <h1>{title}</h1>
      <div className="row">
        {movies.map((item) => CardMaker(item))}
      </div>
    </Wrapper>
  );
}

export default Category;


const Wrapper = styled.div`
  margin-bottom: 2rem;
  margin-left: 4rem;
  height: 350px;
  .row {
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    transform: translateX(0);
    }
`;
