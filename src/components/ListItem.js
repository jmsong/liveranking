import React, { useState } from "react";
import styled from "styled-components";
import { CountUp } from "./";
import { usePrevious, animate } from "../utils";

const StyledListItem = styled.div`
  width: 320px;
  height: 48px;
  position: absolute;
  left: 50%;
  margin-left: -160px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  div.list-item-index {
    width: 24px;
    text-align: center;
  }

  div.list-item-avatar {
    width: 36px;
    height: 36px;
    background-size: 100%;
    border-radius: 18px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(255, 255, 255);
    border-image: initial;
  }

  div.list-item-score {
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: right;
  }
`;

export function ListItem(props) {
  const newTop = (props.index - 1) * 48;
  const [top, setTop] = useState(newTop);
  const prevTopValue = usePrevious(newTop);
  if (newTop !== prevTopValue) {
    animate({
      start: prevTopValue,
      end: newTop,
      duration: 300,
      doAction: value => {
        setTop(value);
      }
    });
  }

  return (
    <StyledListItem style={{ top: `${top}px` }}>
      <div className="list-item-index">
        <CountUp endValue={props.index} duration={300} />
      </div>
      <div
        className="list-item-avatar"
        style={{ backgroundImage: `url(${props.avatar_url})` }}
      />
      <div className="list-item-name">{props.name}</div>
      <div className="list-item-score">
        <CountUp endValue={props.score} duration={300} />
        &nbsp;pt
      </div>
    </StyledListItem>
  );
}

export default ListItem;
