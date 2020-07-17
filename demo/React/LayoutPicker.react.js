/* @flow */
import { ColorBlock } from "@atoms";
import { LAYOUT } from "@enums";
import { RECOIL_STATE } from "@state";
import { mixins } from "@styles";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import tw from "twin.macro";

type LayoutPickerProps = {
  className?: string,
};

const layoutColorSelector = RECOIL_STATE.layoutTheme.selectors.layoutColor;

const LayoutPicker = ({ className }: LayoutPickerProps) => {
  const [colors, setLayoutColor] = useRecoilState(layoutColorSelector);

  const getOnClick = useCallback((target) => () => setLayoutColor(target), [
    setLayoutColor,
  ]);

  return (
    <Container {...{ className }}>
      <SubGrid>
        <Main color={colors.main} onClick={getOnClick(LAYOUT.MAIN)}>
          <span>Main</span>
        </Main>
        <Panel color={colors.panel} onClick={getOnClick(LAYOUT.PANEL)}>
          <span>Panel</span>
        </Panel>
      </SubGrid>
      <Sidebar color={colors.sidebar} onClick={getOnClick(LAYOUT.SIDEBAR)}>
        <span>Sidebar</span>
      </Sidebar>
      <ActivityBar
        color={colors.activityBar}
        onClick={getOnClick(LAYOUT.ACTIVITY_BAR)}
      >
        <span>Activity Bar</span>
      </ActivityBar>
    </Container>
  );
};

const SubGrid = styled.div`
  ${tw`row-span-6 col-span-9`}
  ${tw`grid grid-rows-6`}
`;
const Main = styled(ColorBlock)`
  ${tw`row-span-4 col-span-4`}
`;
const Panel = styled(ColorBlock)`
  ${tw`row-span-2 col-span-4`}
`;
const ActivityBar = styled(ColorBlock)`
  ${tw`row-span-6 col-span-1`}
`;
const Sidebar = styled(ColorBlock)`
  ${tw`row-span-6 col-span-2`}
`;

const Container = styled.div`
  ${mixins.fillContainer}
  ${tw`grid grid-rows-6 grid-cols-12 font-light`}
`;

LayoutPicker.className = Container;

export { LayoutPicker };
