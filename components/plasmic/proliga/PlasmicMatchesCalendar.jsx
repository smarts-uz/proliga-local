// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: kLkBCj52Hj5c
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import { CmsRowField } from "@plasmicpkgs/plasmic-cms";
import { useScreenVariants as useScreenVariants_8Rmrqs5Mzp6I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8Rmrqs5Mzp6I/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicMatchesCalendar.module.css"; // plasmic-import: kLkBCj52Hj5c/css

createPlasmicElementProxy;

export const PlasmicMatchesCalendar__VariantProps = new Array();

export const PlasmicMatchesCalendar__ArgProps = new Array("clubsLogo");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMatchesCalendar__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8Rmrqs5Mzp6I()
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <div className={classNames(projectcss.all, sty.freeBox__fIvlw)}>
        <CmsQueryRepeater
          data-plasmic-name={"cmsDataFetcher"}
          data-plasmic-override={overrides.cmsDataFetcher}
          className={classNames("__wab_instance", sty.cmsDataFetcher)}
          desc={false}
          emptyMessage={
            <DataCtxReader__>
              {$ctx => (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qZ7Cv
                  )}
                >
                  {"No matching published entries found."}
                </div>
              )}
            </DataCtxReader__>
          }
          fields={["clubsLogo", "clubName"]}
          filterField={"clubName"}
          filterValue={(() => {
            try {
              return undefined;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          forceEmptyState={false}
          forceLoadingState={false}
          limit={10}
          loadingMessage={
            <DataCtxReader__>
              {$ctx => (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bBpJ
                  )}
                >
                  {"Loading..."}
                </div>
              )}
            </DataCtxReader__>
          }
          mode={"rows"}
          noAutoRepeat={false}
          noLayout={false}
          offset={(() => {
            try {
              return undefined;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          table={"clubs"}
          useDraft={false}
        >
          <DataCtxReader__>
            {$ctx => (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__n7B7K)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__yfXrG)}>
                  <CmsRowField
                    className={classNames(
                      "__wab_instance",
                      sty.cmsEntryField__yVcT
                    )}
                    themeResetClassName={classNames(
                      projectcss.root_reset,
                      projectcss.root_reset_tags,
                      projectcss.plasmic_default_styles,
                      projectcss.plasmic_mixins,
                      projectcss.plasmic_tokens,
                      plasmic_antd_5_hostless_css.plasmic_tokens,
                      plasmic_plasmic_rich_components_css.plasmic_tokens
                    )}
                  />
                </div>
                <CmsRowField
                  className={classNames(
                    "__wab_instance",
                    sty.cmsEntryField__do5RN
                  )}
                  field={"clubsLogo"}
                  themeResetClassName={classNames(
                    projectcss.root_reset,
                    projectcss.root_reset_tags,
                    projectcss.plasmic_default_styles,
                    projectcss.plasmic_mixins,
                    projectcss.plasmic_tokens,
                    plasmic_antd_5_hostless_css.plasmic_tokens,
                    plasmic_plasmic_rich_components_css.plasmic_tokens
                  )}
                />

                <div className={classNames(projectcss.all, sty.freeBox__u5DiE)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__x71A7
                    )}
                  >
                    {"-"}
                  </div>
                </div>
                <CmsRowField
                  className={classNames(
                    "__wab_instance",
                    sty.cmsEntryField__u9DB4
                  )}
                  field={"clubsLogo"}
                  themeResetClassName={classNames(
                    projectcss.root_reset,
                    projectcss.root_reset_tags,
                    projectcss.plasmic_default_styles,
                    projectcss.plasmic_mixins,
                    projectcss.plasmic_tokens,
                    plasmic_antd_5_hostless_css.plasmic_tokens,
                    plasmic_plasmic_rich_components_css.plasmic_tokens
                  )}
                  usePlasmicTheme={false}
                />

                <div className={classNames(projectcss.all, sty.freeBox__eSdDu)}>
                  <CmsRowField
                    className={classNames(
                      "__wab_instance",
                      sty.cmsEntryField__zyX1
                    )}
                    field={(() => {
                      try {
                        return undefined;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    themeResetClassName={classNames(
                      projectcss.root_reset,
                      projectcss.root_reset_tags,
                      projectcss.plasmic_default_styles,
                      projectcss.plasmic_mixins,
                      projectcss.plasmic_tokens,
                      plasmic_antd_5_hostless_css.plasmic_tokens,
                      plasmic_plasmic_rich_components_css.plasmic_tokens
                    )}
                  />
                </div>
              </Stack__>
            )}
          </DataCtxReader__>
        </CmsQueryRepeater>
      </div>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "cmsDataFetcher"],
  cmsDataFetcher: ["cmsDataFetcher"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMatchesCalendar__ArgProps,
          internalVariantPropNames: PlasmicMatchesCalendar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMatchesCalendar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMatchesCalendar";
  } else {
    func.displayName = `PlasmicMatchesCalendar.${nodeName}`;
  }
  return func;
}

export const PlasmicMatchesCalendar = Object.assign(
  // Top-level PlasmicMatchesCalendar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    // Metadata about props expected for PlasmicMatchesCalendar
    internalVariantProps: PlasmicMatchesCalendar__VariantProps,
    internalArgProps: PlasmicMatchesCalendar__ArgProps
  }
);

export default PlasmicMatchesCalendar;
/* prettier-ignore-end */
