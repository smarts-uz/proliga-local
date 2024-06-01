// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: QI5VjKINDG8A
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicInjuredClub.module.css"; // plasmic-import: QI5VjKINDG8A/css

createPlasmicElementProxy;

export const PlasmicInjuredClub__VariantProps = new Array(
  "variant1",
  "variant2",
  "variant3"
);

export const PlasmicInjuredClub__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInjuredClub__RenderFunc(props) {
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
        path: "variant1",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.variant1
      },
      {
        path: "variant2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.variant2
      },
      {
        path: "variant3",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.variant3
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
        sty.root,
        {
          [sty.rootvariant1]: hasVariant($state, "variant1", "variant1"),
          [sty.rootvariant2]: hasVariant($state, "variant2", "variant2"),
          [sty.rootvariant3]: hasVariant($state, "variant3", "variant3")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__ffKbh, {
            [sty.imgvariant1__ffKbhIieCc]: hasVariant(
              $state,
              "variant1",
              "variant1"
            ),
            [sty.imgvariant2__ffKbh9Ipsf]: hasVariant(
              $state,
              "variant2",
              "variant2"
            ),
            [sty.imgvariant3__ffKbhwN6Vt]: hasVariant(
              $state,
              "variant3",
              "variant3"
            )
          })}
          displayHeight={"32px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"32px"}
          loading={"lazy"}
          src={
            hasVariant($state, "variant3", "variant3")
              ? {
                  src: "/plasmic/proliga/images/realMadridpng.png",
                  fullWidth: 80,
                  fullHeight: 104,
                  aspectRatio: undefined
                }
              : hasVariant($state, "variant2", "variant2")
              ? {
                  src: "/plasmic/proliga/images/fcBarcelonapng.png",
                  fullWidth: 96,
                  fullHeight: 100,
                  aspectRatio: undefined
                }
              : hasVariant($state, "variant1", "variant1")
              ? {
                  src: "/plasmic/proliga/images/osasunapng.png",
                  fullWidth: 120,
                  fullHeight: 120,
                  aspectRatio: undefined
                }
              : {
                  src: "/plasmic/proliga/images/alavespng.png",
                  fullWidth: 120,
                  fullHeight: 120,
                  aspectRatio: undefined
                }
          }
        />

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.textvariant1]: hasVariant($state, "variant1", "variant1"),
              [sty.textvariant3]: hasVariant($state, "variant3", "variant3")
            }
          )}
        >
          {hasVariant($state, "variant1", "variant1")
            ? "Deportiva Alaves"
            : "Deportiva Alaves"}
        </div>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__q60Jf)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"32px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/proliga/images/_1200PxWarningsvgpng.png",
            fullWidth: 1200,
            fullHeight: 1108,
            aspectRatio: undefined
          }}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicInjuredClub__ArgProps,
          internalVariantPropNames: PlasmicInjuredClub__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInjuredClub__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInjuredClub";
  } else {
    func.displayName = `PlasmicInjuredClub.${nodeName}`;
  }
  return func;
}

export const PlasmicInjuredClub = Object.assign(
  // Top-level PlasmicInjuredClub renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicInjuredClub
    internalVariantProps: PlasmicInjuredClub__VariantProps,
    internalArgProps: PlasmicInjuredClub__ArgProps
  }
);

export default PlasmicInjuredClub;
/* prettier-ignore-end */
