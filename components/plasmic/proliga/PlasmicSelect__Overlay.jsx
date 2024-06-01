// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: lVSiHlW15HI5
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as pp from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicSelect__Overlay.module.css"; // plasmic-import: lVSiHlW15HI5/css
import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: bCMc_ebYmgPo/render

createPlasmicElementProxy;

export const PlasmicSelect__Overlay__VariantProps = new Array(
  "relativePlacement"
);

export const PlasmicSelect__Overlay__ArgProps = new Array("children");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSelect__Overlay__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "relativePlacement",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.relativePlacement
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant($state, "relativePlacement", "bottom") ? true : false) ? (
        <div
          data-plasmic-name={"top"}
          data-plasmic-override={overrides.top}
          className={classNames(projectcss.all, sty.top, {
            [sty.toprelativePlacement_bottom]: hasVariant(
              $state,
              "relativePlacement",
              "bottom"
            )
          })}
        />
      ) : null}
      <div
        data-plasmic-name={"middle"}
        data-plasmic-override={overrides.middle}
        className={classNames(projectcss.all, sty.middle)}
      >
        {(hasVariant($state, "relativePlacement", "right") ? true : false) ? (
          <div
            data-plasmic-name={"left"}
            data-plasmic-override={overrides.left}
            className={classNames(projectcss.all, sty.left, {
              [sty.leftrelativePlacement_right]: hasVariant(
                $state,
                "relativePlacement",
                "right"
              )
            })}
          />
        ) : null}
        <div
          data-plasmic-name={"main"}
          data-plasmic-override={overrides.main}
          className={classNames(projectcss.all, sty.main)}
        >
          {renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>
        {(hasVariant($state, "relativePlacement", "left") ? true : false) ? (
          <div
            data-plasmic-name={"right"}
            data-plasmic-override={overrides.right}
            className={classNames(projectcss.all, sty.right, {
              [sty.rightrelativePlacement_left]: hasVariant(
                $state,
                "relativePlacement",
                "left"
              )
            })}
          />
        ) : null}
      </div>
      {(hasVariant($state, "relativePlacement", "top") ? true : false) ? (
        <div
          data-plasmic-name={"bottom"}
          data-plasmic-override={overrides.bottom}
          className={classNames(projectcss.all, sty.bottom, {
            [sty.bottomrelativePlacement_top]: hasVariant(
              $state,
              "relativePlacement",
              "top"
            )
          })}
        />
      ) : null}
    </div>
  );
}

function useBehavior(props, ref) {
  return pp.useTriggeredOverlay(
    PlasmicSelect__Overlay,
    props,
    {
      isPlacedTopVariant: { group: "relativePlacement", variant: "top" },
      isPlacedBottomVariant: { group: "relativePlacement", variant: "bottom" },
      isPlacedLeftVariant: { group: "relativePlacement", variant: "left" },
      isPlacedRightVariant: { group: "relativePlacement", variant: "right" },
      contentSlot: "children",
      root: "root"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "top", "middle", "left", "main", "right", "bottom"],
  top: ["top"],
  middle: ["middle", "left", "main", "right"],
  left: ["left"],
  main: ["main"],
  right: ["right"],
  bottom: ["bottom"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSelect__Overlay__ArgProps,
          internalVariantPropNames: PlasmicSelect__Overlay__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelect__Overlay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__Overlay";
  } else {
    func.displayName = `PlasmicSelect__Overlay.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__Overlay = Object.assign(
  // Top-level PlasmicSelect__Overlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    top: makeNodeComponent("top"),
    middle: makeNodeComponent("middle"),
    left: makeNodeComponent("left"),
    main: makeNodeComponent("main"),
    right: makeNodeComponent("right"),
    bottom: makeNodeComponent("bottom"),
    // Metadata about props expected for PlasmicSelect__Overlay
    internalVariantProps: PlasmicSelect__Overlay__VariantProps,
    internalArgProps: PlasmicSelect__Overlay__ArgProps,
    useBehavior
  }
);

export default PlasmicSelect__Overlay;
/* prettier-ignore-end */
