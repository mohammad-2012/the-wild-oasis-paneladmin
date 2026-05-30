import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.75rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }

      @media (max-width: 480px) {
        font-size: 1.35rem;
      }
    `}
    
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }

      @media (max-width: 480px) {
        font-size: 1.35rem;
      }
    `}
    
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.75rem;
      }
    `}
    
  line-height: 1.4;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
`;

export default Heading;
