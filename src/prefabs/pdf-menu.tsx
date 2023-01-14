/** @jsx createElementEntity */
import { ArrayVec3, Attrs, createElementEntity, createRef } from "../utils/jsx-entity";
import { Button3D, BUTTON_TYPES } from "./button3D";

const buttonHeight = 0.2;
const buttonScale: ArrayVec3 = [0.4, 0.4, 0.4];
const buttonWidth = 0.3;
/* const smallButtonScale: ArrayVec3 = [0.2, 0.2, 0.2]; */
const uiZ = 0.001;

function PreviousPageButton(props: Attrs) {
  return (
    <Button3D
      name="Previous Page Button"
      scale={buttonScale}
      width={buttonWidth}
      height={buttonHeight}
      type={BUTTON_TYPES.ACTION}
      text={"<"}
      {...props}
    />
  );
}

function NextPageButton(props: Attrs) {
  return (
    <Button3D
      name="Next Page Button"
      scale={buttonScale}
      width={buttonWidth}
      height={buttonHeight}
      type={BUTTON_TYPES.ACTION}
      text={">"}
      {...props}
    />
  );
}

// prettier-ignore
const position = {
  prev: [-0.45, -0.49, uiZ] as ArrayVec3,
  next: [ 0.45, -0.49, uiZ] as ArrayVec3,
};

export function PDFMenuPrefab() {
  const refs = {
    prev: createRef(),
    next: createRef()
  };

  return (
    <entity
      name="PDF Menu"
      pdfMenu={{
        prevButtonRef: refs.prev,
        nextButtonRef: refs.next
      }}
    >
      <PreviousPageButton ref={refs.prev} position={position.prev} />
      <NextPageButton ref={refs.next} position={position.next} />
    </entity>
  );
}
