import styled from "styled-components";
import { grid, flexbox } from "styled-system";
import Box from "./Box";
import { ListProps } from "./types";

const List = styled(Box)<ListProps>`
  display: block;
  ${flexbox}
  ${grid}
`;

export default List;
