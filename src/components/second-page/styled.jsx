import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const SecondPagePart = styled.div`
  div {
    text-align: center;
  }
  h2 {
    font-size: 30px;
  }
`;

const GridDiv = styled(Flexible)`
  div {
    flex-direction: column;
    text-align: center;
    border-right: 2px solid #1e1e1e;
    padding: 4px 20px;
    p {
      font-size: 20px;
      line-height: 12px;
    }
  }
  .uniqueBorder {
    border: 0;
  }
`;
export { SecondPagePart, GridDiv };
