// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: KNRpEkS9bXP0
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { AntdAvatar } from "@plasmicpkgs/antd5/skinny/registerAvatar";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicMessageCard.module.css"; // plasmic-import: KNRpEkS9bXP0/css

createPlasmicElementProxy;

export const PlasmicMessageCard__VariantProps = new Array();

export const PlasmicMessageCard__ArgProps = new Array("heading", "textInfo");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMessageCard__RenderFunc(props) {
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
        sty.root,
        "glass-effect"
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__f40Z)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__i9Fsy
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.heading;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "RULES";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__vAwU)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___4Ebg
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.textInfo;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Bir o'yinda bitta komandadan faqat 2 ta o'yinchi olsak bo'ladi. Qolgan o'yinchilar uchun to'lov qilinadi.";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__oFp4A)}>
        <AntdAvatar
          data-plasmic-name={"modirator"}
          data-plasmic-override={overrides.modirator}
          className={classNames("__wab_instance", sty.modirator)}
          letters={``}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "modirator"],
  modirator: ["modirator"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMessageCard__ArgProps,
          internalVariantPropNames: PlasmicMessageCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMessageCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMessageCard";
  } else {
    func.displayName = `PlasmicMessageCard.${nodeName}`;
  }
  return func;
}

export const PlasmicMessageCard = Object.assign(
  // Top-level PlasmicMessageCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    modirator: makeNodeComponent("modirator"),
    // Metadata about props expected for PlasmicMessageCard
    internalVariantProps: PlasmicMessageCard__VariantProps,
    internalArgProps: PlasmicMessageCard__ArgProps
  }
);

export default PlasmicMessageCard;
/* prettier-ignore-end */
