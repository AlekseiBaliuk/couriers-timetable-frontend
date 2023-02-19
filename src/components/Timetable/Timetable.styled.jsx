import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid black;
  margin-left: 30px;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid black;
  /* margin-left: 30px; */
  padding: 10px;
`;

export const Td = styled.td`
  border: 1px solid black;
  padding: 10px;
`;

export const Span = styled.span`
  color: ${({ status }) => (status === "no" ? "red" : "green")};
`;

export const Input = styled.input`
  width: 158px;
  height: 2rem;
  padding: 0 1.75rem;
  margin-left: 10px;
  background-color: transparent;
  border: 1px solid #69f0ae;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const FilterWrapper = styled.div`
  gap: 15px;
  display: grid;
  margin-top: 60px;
`;

export const Button = styled.button`
  width: 216px;
  height: 2rem;
  /* margin: 0 auto; */

  padding: 0.5rem 1.75rem;
  margin-bottom: 2rem;
  background-color: #fff;

  border: 1px solid #69f0ae;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #69f0ae;
  }
`;
