// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: 3gwy3SExAp_J
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { SimpleChart } from "@plasmicpkgs/react-chartjs-2";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicInfoPlayerChart.module.css"; // plasmic-import: 3gwy3SExAp_J/css

createPlasmicElementProxy;

export const PlasmicInfoPlayerChart__VariantProps = new Array();

export const PlasmicInfoPlayerChart__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInfoPlayerChart__RenderFunc(props) {
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
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__gJki
        )}
      >
        {"Value record"}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__kknfd)}>
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"14px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"14px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/proliga/images/pngtreeEuroSymbolCurrencyPngImage3974231Png2.png",
            fullWidth: 512,
            fullHeight: 512,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__eL9TM
          )}
        >
          {"Market value"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__kNw2
          )}
        >
          {"32,15,236"}
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rt1Ng)}
      >
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__uSj9C
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          onClick={async event => {
            const $steps = {};
            $steps["updateStateVariable"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    undefined;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateStateVariable"] != null &&
              typeof $steps["updateStateVariable"] === "object" &&
              typeof $steps["updateStateVariable"].then === "function"
            ) {
              $steps["updateStateVariable"] = await $steps[
                "updateStateVariable"
              ];
            }
          }}
          platform={"nextjs"}
          target={"_blank"}
          title={undefined}
        >
          {"Season"}
        </PlasmicLink__>
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__aJj7
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          platform={"nextjs"}
        >
          {"10 Days"}
        </PlasmicLink__>
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link___6Na79
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          platform={"nextjs"}
        >
          {"5 Days"}
        </PlasmicLink__>
      </Stack__>
      <SimpleChart
        data-plasmic-name={"chart"}
        data-plasmic-override={overrides.chart}
        className={classNames("__wab_instance", sty.chart)}
        data={[
          { region: "Season", Player: 3294, Money: 2675 },
          { region: "5 Days", revenue: 3245, spend: 3895 },
          { region: "10 Days", revenue: 2165, spend: 3498 },
          { region: "1 Month", revenue: 3215, spend: 1656 }
        ]}
        direction={"horizontal"}
        labelField={"region"}
        type={"line"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "chart"],
  img: ["img"],
  chart: ["chart"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicInfoPlayerChart__ArgProps,
          internalVariantPropNames: PlasmicInfoPlayerChart__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInfoPlayerChart__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInfoPlayerChart";
  } else {
    func.displayName = `PlasmicInfoPlayerChart.${nodeName}`;
  }
  return func;
}

export const PlasmicInfoPlayerChart = Object.assign(
  // Top-level PlasmicInfoPlayerChart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    chart: makeNodeComponent("chart"),
    // Metadata about props expected for PlasmicInfoPlayerChart
    internalVariantProps: PlasmicInfoPlayerChart__VariantProps,
    internalArgProps: PlasmicInfoPlayerChart__ArgProps
  }
);

export default PlasmicInfoPlayerChart;
/* prettier-ignore-end */
