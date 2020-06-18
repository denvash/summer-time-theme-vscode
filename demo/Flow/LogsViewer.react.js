// @flow
import { Scrollbar } from "@atoms";
import { COLORS, mixins } from "@styles";
import { toUpperCaseFirstLetter } from "@utils";
import React from "react";
import { ifProp, prop } from "styled-tools";
import tw, { styled } from "twin.macro";

type MessageProp = {
  timestamp: number,
  level: string,
  message: string,
};

type LogsProps = {
  className?: string,
  logs: Array<MessageProp>,
};

const styledKeys = {
  areLogsValid: `areLogsValid`,
  color: `color`,
};

/* eslint-disable no-unused-vars */
const LogsViewer = ({ className, logs = [] }: LogsProps) => (
  <LogsScroll areLogsValid={logs?.length > 0}>
    <Scrollbar>
      <Container className={className}>
        {logs?.map(({ timestamp, level, message }, index) => (
          // Remove ↵ from end of line
          <Message key={index}>
            <div>{toUpperCaseFirstLetter(message.replace(/\u21b5/g, ``))}</div>
            <Level color={COLORS.logs.level[level]} />
          </Message>
        ))}
      </Container>
    </Scrollbar>
  </LogsScroll>
);

const Level = styled.div`
  ${tw`w-3 h-3`}
  ${tw`bg-blue-500 rounded-full`}
  ${prop(styledKeys.color)}
`;

const Container = styled.div`
  ${tw`text-left p-1 pr-4`}
`;

const Message = styled.div`
  ${mixins.flexBetween}
  ${tw`w-full`}
`;

const LogsScroll = styled.div`
  ${mixins.fillContainer}
  ${tw`bg-black text-white font-mono rounded-sm bg-opacity-75 p-1`}
  ${ifProp(styledKeys.areLogsValid, tw`h-40`, tw`hidden`)}
  ${Scrollbar.Thumb.className} {
    ${tw`bg-white`}
  }
`;

LogsViewer.Scrollbar = Scrollbar;
export default LogsViewer;
