import styled from "styled-components";
import { Colors } from "../../../resources/Colors";

export const Form = styled.form`
  text-align: center;
`;

export const Container = styled.div`
  color: ${Colors.blue};
  margin: 0 auto;
  border-radius: 2rem;
  margin-top: 10rem;
  width: 300px;
  border: 1px solid ${Colors.white};
  background-color: ${Colors.white};
`;

export const H3 = styled.h3`
  color: ${Colors.red};
  margin: 2rem auto;
`;

export const InputSearch = styled.input`
  background-color: ${Colors.mediumGray};
  color: ${Colors.blue};
  border: 1px solid ${Colors.blue};
  height: 3rem;
  width: 25rem;
  font-size: 2rem;
  padding: 2rem;
  margin-top: 2rem;
`;

export const InputButton = styled.input`
  width: 100px;
  background-color: ${Colors.blue};
  margin: 2rem 2rem;
  padding: 1rem;
  border: 2px solid ${Colors.blue};
  border-radius: 2rem;
  color: ${Colors.white};
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Span = styled.span`
  display: inline-block;
  font-size: 2rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.5rem;
  justify-content: center;
`;

export const Label = styled.label`
  margin: 1rem;
`;
