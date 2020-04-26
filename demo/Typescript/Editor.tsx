import { IconPaths } from "components/Icons";
import Icon from "components/Icons/Icon";
import useCanvasListeners from "hooks/useCanvasListeners";
import { CursorType } from "interfaces/enums/CursorType";
import { LabelType } from "interfaces/enums/LabelType";
import { ISize } from "interfaces/ISize";
import { isEqual } from "lodash";
import React, { useCallback, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { EditorModel } from "staticModels/EditorModel";
import { AnnotationData, LabelsData } from "store/labels/types";
import styled from "styled-components";
import { ifProp } from "styled-tools";
import tw from "twin.macro";

interface IProps {
  annotationType: LabelType;
  customCursorStyle: CursorType;
  imageData: AnnotationData;
  imageDragMode: boolean;
  size: ISize;
  onRectChange?: (labelsData: LabelsData) => void;
}

const DEFAULT: ISize = {
  width: 0,
  height: 0,
};

const Editor: React.FC<IProps> = ({
  annotationType,
  customCursorStyle,
  imageData,
  imageDragMode,
  size,
  onRectChange: onLabelsDataChange,
}) => {
  const [viewPortSize, setViewPortSize] = useState<ISize>(DEFAULT);

  useCanvasListeners({
    imageData,
    annotationType,
    imageDragMode,
    size,
    onLabelsDataChange,
  });

  const onUpdate = useCallback(
    (scrollbarContent) => {
      const newViewPortContentSize: ISize = {
        width: scrollbarContent.scrollWidth,
        height: scrollbarContent.scrollHeight,
      };
      if (!isEqual(newViewPortContentSize, viewPortSize)) {
        setViewPortSize(newViewPortContentSize);
      }
    },
    [viewPortSize]
  );

  return (
    <Container ref={(ref) => (EditorModel.editor = ref)} draggable={false}>
      <Scrollbars
        ref={(ref) => (EditorModel.viewPortScrollbars = ref)}
        renderTrackHorizontal={(props) => <NoCursorTrack {...props} />}
        renderTrackVertical={(props) => <NoCursorTrack {...props} />}
        onUpdate={onUpdate}
        draggable={false}
      >
        <Canvas
          ref={(ref) => (EditorModel.canvas = ref)}
          draggable={false}
          onContextMenu={(event: React.MouseEvent<HTMLCanvasElement>) =>
            event.preventDefault()
          }
        />
      </Scrollbars>
      <MouseIndicator
        ref={(ref) => (EditorModel.mousePositionIndicator = ref)}
        draggable={false}
      />
      <Cursor
        isTransform={customCursorStyle !== CursorType.DEFAULT}
        ref={(ref) => (EditorModel.cursor = ref)}
        draggable={false}
      >
        <Icon d={IconPaths[customCursorStyle]} />
      </Cursor>
    </Container>
  );
};

const Canvas = styled.canvas`
  ${tw`absolute cursor-none`}
`;

const MouseIndicator = styled.div`
  ${tw`select-none pointer-events-none`}
  ${tw`absolute text-white opacity-75 p-1`}
  ${tw`bg-gray-700 z-50`}
`;

interface ICursor {
  readonly isTransform: boolean;
}

const Cursor = styled.div<ICursor>`
  ${tw`absolute w-2 h-2 text-white fill-current left-calc50 bottom-calc50`}
  ${tw`pointer-events-none z-40`}
  ${tw`border-white bg-white rounded-full`}
  ${tw`transition-transform ease-in-out duration-300`}
  ${ifProp(`isTransform`, tw`transform border bg-transparent scale-350`)}
`;

const Container = styled.div`
  ${tw`flex-grow relative`}
`;

const NoCursorTrack = styled.div`
  ${tw`pointer-events-none`}
  cursor: none;
`;

export default Editor;
