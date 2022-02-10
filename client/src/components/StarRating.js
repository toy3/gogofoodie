import { FaStar } from "react-icons/fa";
import styled, { css } from "styled-components";

const StarWrap = styled.div`
  padding: 5px;
  margin-right: 18px;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      opacity: 0.2;
    `}
`;

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "#ff4444" : "#dee2e6"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({
  totalStars = 5,
  done,
  selectedStars,
  onRate = (f) => f,
}) {
  return (
    <StarWrap done={done}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
    </StarWrap>
  );
}
