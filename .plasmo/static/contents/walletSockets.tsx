import { createAnchorObserver, createRender } from "@plasmo-static-common/csui"
import {
  InlineCSUIContainer,
  OverlayCSUIContainer
} from "@plasmo-static-common/csui-container-react"
import React from "react"
import { createRoot } from "react-dom/client"

// prettier-sort-ignore
// @ts-ignore
import * as RawMount from "~contents/walletSockets"

import type { PlasmoCSUI, PlasmoCSUIAnchor } from "~type"

// Escape parcel's static analyzer
const Mount = RawMount as PlasmoCSUI

const observer = createAnchorObserver(Mount)

const render = createRender(
  Mount,
  [InlineCSUIContainer, OverlayCSUIContainer],
  observer?.mountState,
  async (anchor, rootContainer) => {
    const root = createRoot(rootContainer)
    switch (anchor.type) {
      case "inline": {
        root.render(
          <InlineCSUIContainer anchor={anchor}>
            <RawMount.default anchor={anchor} />
          </InlineCSUIContainer>
        )
        break
      }
      case "overlay": {
        const targetList = observer?.mountState.overlayTargetList || [
          anchor.element
        ]

        root.render(
          <>
            {targetList.map((target, i) => {
              const id = `plasmo-overlay-${i}`
              const innerAnchor: PlasmoCSUIAnchor = {
                element: target,
                type: "overlay"
              }
              return (
                <OverlayCSUIContainer
                  id={id}
                  key={id}
                  anchor={innerAnchor}
                  watchOverlayAnchor={Mount.watchOverlayAnchor}>
                  <RawMount.default anchor={innerAnchor} />
                </OverlayCSUIContainer>
              )
            })}
          </>
        )
        break
      }
    }
  }
)

if (!!observer) {
  observer.start(render)
} else {
  render({
    element: document.documentElement,
    type: "overlay"
  })
}
