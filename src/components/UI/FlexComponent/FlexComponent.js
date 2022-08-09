import styled from "styled-components";

export const FlexComponent = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : "row"};
  flex-wrap: ${props => props.wrap ? props.wrap : "no-wrap"};
  align-items: ${props => props.align ? props.align : "center"};
  justify-content: ${props => props.justify ? props.justify : "flex-start"};
  margin: ${props => props.margin ? props.margin : "0"};
  gap: ${props => props.gap ? props.gap : "0"};
  padding: ${props => props.padding ? props.padding : "0"};
`