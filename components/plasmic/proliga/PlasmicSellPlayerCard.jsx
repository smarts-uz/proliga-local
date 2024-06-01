// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: ViX-reU4QKrx
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicSellPlayerCard.module.css"; // plasmic-import: ViX-reU4QKrx/css

createPlasmicElementProxy;

export const PlasmicSellPlayerCard__VariantProps = new Array(
  "courtua",
  "gimenez",
  "traore",
  "ardaGuler",
  "ayozePerez",
  "budimir",
  "ceballos",
  "davidGarcia",
  "deGalarreta",
  "deJong",
  "deLeon",
  "franGarcia",
  "isaac"
);

export const PlasmicSellPlayerCard__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSellPlayerCard__RenderFunc(props) {
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
  let [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "courtua",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.courtua
      },
      {
        path: "gimenez",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.gimenez
      },
      {
        path: "traore",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.traore
      },
      {
        path: "ardaGuler",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.ardaGuler
      },
      {
        path: "ayozePerez",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.ayozePerez
      },
      {
        path: "budimir",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.budimir
      },
      {
        path: "ceballos",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.ceballos
      },
      {
        path: "davidGarcia",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.davidGarcia
      },
      {
        path: "deGalarreta",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.deGalarreta
      },
      {
        path: "deJong",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.deJong
      },
      {
        path: "deLeon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.deLeon
      },
      {
        path: "franGarcia",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.franGarcia
      },
      {
        path: "isaac",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isaac
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const new$Queries = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "22bad793-23fb-4697-9e46-0b36c07c0aee",
        userArgs: {},
        cacheKey: `plasmic.$.22bad793-23fb-4697-9e46-0b36c07c0aee.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
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
          [sty.rootdeJong]: hasVariant($state, "deJong", "deJong"),
          [sty.rootisaac]: hasVariant($state, "isaac", "isaac")
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__gu2Dy)}>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__y6Jdw, {
            [sty.imgardaGuler__y6JdwdKiW]: hasVariant(
              $state,
              "ardaGuler",
              "ardaGuler"
            ),
            [sty.imgayozePerez__y6JdWmXqic]: hasVariant(
              $state,
              "ayozePerez",
              "ayozePerez"
            ),
            [sty.imgbudimir__y6JdwLn7A]: hasVariant(
              $state,
              "budimir",
              "budimir"
            ),
            [sty.imgceballos__y6JdwVMfx]: hasVariant(
              $state,
              "ceballos",
              "ceballos"
            ),
            [sty.imgcourtua__y6JdwVjJvt]: hasVariant(
              $state,
              "courtua",
              "courtua"
            ),
            [sty.imgdavidGarcia__y6JdwrVdQg]: hasVariant(
              $state,
              "davidGarcia",
              "davidGarcia"
            ),
            [sty.imgdeGalarreta__y6Jdw8VFDj]: hasVariant(
              $state,
              "deGalarreta",
              "deGalarreta"
            ),
            [sty.imgdeJong__y6Jdwz3Rnj]: hasVariant($state, "deJong", "deJong"),
            [sty.imgdeLeon__y6JdwGmII]: hasVariant($state, "deLeon", "deLeon"),
            [sty.imgdeLeon_franGarcia__y6JdwGmIITf9WN]:
              hasVariant($state, "franGarcia", "franGarcia") &&
              hasVariant($state, "deLeon", "deLeon"),
            [sty.imgfranGarcia__y6JdwTf9WN]: hasVariant(
              $state,
              "franGarcia",
              "franGarcia"
            ),
            [sty.imggimenez__y6Jdwuw8Bw]: hasVariant(
              $state,
              "gimenez",
              "gimenez"
            ),
            [sty.imgisaac__y6Jdww1CVf]: hasVariant($state, "isaac", "isaac"),
            [sty.imgtraore__y6JdwIjN]: hasVariant($state, "traore", "traore")
          })}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"214px"}
          loading={"lazy"}
          src={
            hasVariant($state, "isaac", "isaac")
              ? {
                  src: "/plasmic/proliga/images/isaacpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "franGarcia", "franGarcia")
              ? {
                  src: "/plasmic/proliga/images/franGarciapng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "deLeon", "deLeon")
              ? {
                  src: "/plasmic/proliga/images/deLeonpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "deJong", "deJong")
              ? {
                  src: "/plasmic/proliga/images/deJongpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "deGalarreta", "deGalarreta")
              ? {
                  src: "/plasmic/proliga/images/deGalarretapng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "davidGarcia", "davidGarcia")
              ? {
                  src: "/plasmic/proliga/images/davidGarciapng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "ceballos", "ceballos")
              ? {
                  src: "/plasmic/proliga/images/ceballospng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "budimir", "budimir")
              ? {
                  src: "/plasmic/proliga/images/budimirpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "ayozePerez", "ayozePerez")
              ? {
                  src: "/plasmic/proliga/images/ayozePerezpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "ardaGuler", "ardaGuler")
              ? {
                  src: "/plasmic/proliga/images/ardaGulerpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "traore", "traore")
              ? {
                  src: "/plasmic/proliga/images/traorepng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "gimenez", "gimenez")
              ? {
                  src: "/plasmic/proliga/images/gimenezpng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : hasVariant($state, "courtua", "courtua")
              ? {
                  src: "/plasmic/proliga/images/courtuapng.png",
                  fullWidth: 256,
                  fullHeight: 256,
                  aspectRatio: undefined
                }
              : undefined
          }
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___5Ynj4)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__olBqi
          )}
        >
          {"Position"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__z5EP1,
            {
              [sty.textgimenez__z5EP1Uw8Bw]: hasVariant(
                $state,
                "gimenez",
                "gimenez"
              )
            }
          )}
        >
          {"FSYP"}
        </div>
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__u2GXy, {
          [sty.freeBoxcourtua__u2GXyVjJvt]: hasVariant(
            $state,
            "courtua",
            "courtua"
          ),
          [sty.freeBoxdeLeon__u2GXyGmII]: hasVariant(
            $state,
            "deLeon",
            "deLeon"
          ),
          [sty.freeBoxtraore__u2GXyIjN]: hasVariant($state, "traore", "traore")
        })}
      >
        <PlasmicLink__
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          platform={"nextjs"}
        >
          {"STR"}
        </PlasmicLink__>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___6CaFk,
            {
              [sty.textardaGuler___6CaFkDKiW]: hasVariant(
                $state,
                "ardaGuler",
                "ardaGuler"
              ),
              [sty.textayozePerez___6CaFkmXqic]: hasVariant(
                $state,
                "ayozePerez",
                "ayozePerez"
              ),
              [sty.textbudimir___6CaFkLn7A]: hasVariant(
                $state,
                "budimir",
                "budimir"
              ),
              [sty.textceballos___6CaFkVMfx]: hasVariant(
                $state,
                "ceballos",
                "ceballos"
              ),
              [sty.textcourtua___6CaFkVjJvt]: hasVariant(
                $state,
                "courtua",
                "courtua"
              ),
              [sty.textdavidGarcia___6CaFkRVdQg]: hasVariant(
                $state,
                "davidGarcia",
                "davidGarcia"
              ),
              [sty.textdeGalarreta___6CaFk8VFDj]: hasVariant(
                $state,
                "deGalarreta",
                "deGalarreta"
              ),
              [sty.textdeJong___6CaFkZ3Rnj]: hasVariant(
                $state,
                "deJong",
                "deJong"
              ),
              [sty.textdeLeon___6CaFkGmII]: hasVariant(
                $state,
                "deLeon",
                "deLeon"
              ),
              [sty.textfranGarcia___6CaFkTf9WN]: hasVariant(
                $state,
                "franGarcia",
                "franGarcia"
              ),
              [sty.textgimenez___6CaFkUw8Bw]: hasVariant(
                $state,
                "gimenez",
                "gimenez"
              ),
              [sty.textisaac___6CaFkW1CVf]: hasVariant(
                $state,
                "isaac",
                "isaac"
              ),
              [sty.texttraore___6CaFkIjN]: hasVariant(
                $state,
                "traore",
                "traore"
              )
            }
          )}
        >
          {hasVariant($state, "isaac", "isaac") ? (
            "Isaac"
          ) : hasVariant($state, "franGarcia", "franGarcia") ? (
            "Fran Garc\u00eda"
          ) : hasVariant($state, "deLeon", "deLeon") ? (
            "De Leon"
          ) : hasVariant($state, "deJong", "deJong") ? (
            "De Jong"
          ) : hasVariant($state, "deGalarreta", "deGalarreta") ? (
            "De Galarreta"
          ) : hasVariant($state, "davidGarcia", "davidGarcia") ? (
            "David Garc\u00eda"
          ) : hasVariant($state, "ceballos", "ceballos") ? (
            "Ceballos"
          ) : hasVariant($state, "budimir", "budimir") ? (
            "Budimir"
          ) : hasVariant($state, "ayozePerez", "ayozePerez") ? (
            "Ayoze P\u00e9rez"
          ) : hasVariant($state, "ardaGuler", "ardaGuler") ? (
            "Arda G\u00fcler"
          ) : hasVariant($state, "traore", "traore") ? (
            "Traor\u00e9"
          ) : hasVariant($state, "gimenez", "gimenez") ? (
            "Gim\u00e9nez"
          ) : hasVariant($state, "courtua", "courtua") ? (
            "Courtua"
          ) : (
            <React.Fragment>
              {(() => {
                try {
                  return $queries.query.data[0].player_name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Borja Mayoral";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          )}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__afClW,
            {
              [sty.textardaGuler__afClWdKiW]: hasVariant(
                $state,
                "ardaGuler",
                "ardaGuler"
              ),
              [sty.textayozePerez__afClWmXqic]: hasVariant(
                $state,
                "ayozePerez",
                "ayozePerez"
              ),
              [sty.textbudimir__afClWLn7A]: hasVariant(
                $state,
                "budimir",
                "budimir"
              ),
              [sty.textceballos__afClWVMfx]: hasVariant(
                $state,
                "ceballos",
                "ceballos"
              ),
              [sty.textcourtua__afClWVjJvt]: hasVariant(
                $state,
                "courtua",
                "courtua"
              ),
              [sty.textdavidGarcia__afClWrVdQg]: hasVariant(
                $state,
                "davidGarcia",
                "davidGarcia"
              ),
              [sty.textdeGalarreta__afClW8VFDj]: hasVariant(
                $state,
                "deGalarreta",
                "deGalarreta"
              ),
              [sty.textdeJong__afClWz3Rnj]: hasVariant(
                $state,
                "deJong",
                "deJong"
              ),
              [sty.textdeLeon__afClWGmII]: hasVariant(
                $state,
                "deLeon",
                "deLeon"
              ),
              [sty.textfranGarcia__afClWTf9WN]: hasVariant(
                $state,
                "franGarcia",
                "franGarcia"
              ),
              [sty.textgimenez__afClWuw8Bw]: hasVariant(
                $state,
                "gimenez",
                "gimenez"
              ),
              [sty.textisaac__afClWw1CVf]: hasVariant($state, "isaac", "isaac")
            }
          )}
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
        >
          {hasVariant($state, "isaac", "isaac")
            ? "174"
            : hasVariant($state, "franGarcia", "franGarcia")
            ? "172"
            : hasVariant($state, "deLeon", "deLeon")
            ? "171"
            : hasVariant($state, "deJong", "deJong")
            ? "185"
            : hasVariant($state, "deGalarreta", "deGalarreta")
            ? "175"
            : hasVariant($state, "davidGarcia", "davidGarcia")
            ? "177"
            : hasVariant($state, "budimir", "budimir")
            ? "169"
            : hasVariant($state, "ayozePerez", "ayozePerez")
            ? "175"
            : hasVariant($state, "gimenez", "gimenez")
            ? "9"
            : hasVariant($state, "courtua", "courtua")
            ? "11"
            : "166"}
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__ydGff)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__xasCf
          )}
        >
          {"Value"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__whJGx
          )}
        >
          {"Average:"}
        </div>
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__zUx5U, {
          [sty.freeBoxayozePerez__zUx5UmXqic]: hasVariant(
            $state,
            "ayozePerez",
            "ayozePerez"
          ),
          [sty.freeBoxdeGalarreta__zUx5U8VFDj]: hasVariant(
            $state,
            "deGalarreta",
            "deGalarreta"
          ),
          [sty.freeBoxgimenez__zUx5UUw8Bw]: hasVariant(
            $state,
            "gimenez",
            "gimenez"
          ),
          [sty.freeBoxtraore__zUx5UIjN]: hasVariant($state, "traore", "traore")
        })}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__dKc)}
          displayHeight={"auto"}
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
            sty.text__cSzAq
          )}
        >
          {"8.175.716"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___4Z1Fw,
            {
              [sty.textardaGuler___4Z1FwDKiW]: hasVariant(
                $state,
                "ardaGuler",
                "ardaGuler"
              ),
              [sty.textayozePerez___4Z1FwmXqic]: hasVariant(
                $state,
                "ayozePerez",
                "ayozePerez"
              ),
              [sty.textbudimir___4Z1FwLn7A]: hasVariant(
                $state,
                "budimir",
                "budimir"
              ),
              [sty.textceballos___4Z1FwVMfx]: hasVariant(
                $state,
                "ceballos",
                "ceballos"
              ),
              [sty.textcourtua___4Z1FwVjJvt]: hasVariant(
                $state,
                "courtua",
                "courtua"
              ),
              [sty.textdavidGarcia___4Z1FwRVdQg]: hasVariant(
                $state,
                "davidGarcia",
                "davidGarcia"
              ),
              [sty.textdeGalarreta___4Z1Fw8VFDj]: hasVariant(
                $state,
                "deGalarreta",
                "deGalarreta"
              ),
              [sty.textdeJong___4Z1FwZ3Rnj]: hasVariant(
                $state,
                "deJong",
                "deJong"
              ),
              [sty.textdeLeon___4Z1FwGmII]: hasVariant(
                $state,
                "deLeon",
                "deLeon"
              ),
              [sty.textfranGarcia___4Z1FwTf9WN]: hasVariant(
                $state,
                "franGarcia",
                "franGarcia"
              ),
              [sty.textgimenez___4Z1FwUw8Bw]: hasVariant(
                $state,
                "gimenez",
                "gimenez"
              ),
              [sty.textisaac___4Z1FwW1CVf]: hasVariant(
                $state,
                "isaac",
                "isaac"
              ),
              [sty.texttraore___4Z1FwIjN]: hasVariant(
                $state,
                "traore",
                "traore"
              )
            }
          )}
        >
          {hasVariant($state, "isaac", "isaac")
            ? "8,54"
            : hasVariant($state, "franGarcia", "franGarcia")
            ? "5,59"
            : hasVariant($state, "deLeon", "deLeon")
            ? "9,58"
            : hasVariant($state, "deJong", "deJong")
            ? "5,58"
            : hasVariant($state, "deGalarreta", "deGalarreta")
            ? "6,32"
            : hasVariant($state, "davidGarcia", "davidGarcia")
            ? "7,52"
            : hasVariant($state, "ceballos", "ceballos")
            ? "8,5"
            : hasVariant($state, "budimir", "budimir")
            ? "7,15"
            : hasVariant($state, "ayozePerez", "ayozePerez")
            ? "7.58"
            : hasVariant($state, "ardaGuler", "ardaGuler")
            ? "5.68"
            : hasVariant($state, "gimenez", "gimenez")
            ? "12"
            : hasVariant($state, "courtua", "courtua")
            ? "11"
            : "6,15"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSellPlayerCard__ArgProps,
          internalVariantPropNames: PlasmicSellPlayerCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSellPlayerCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSellPlayerCard";
  } else {
    func.displayName = `PlasmicSellPlayerCard.${nodeName}`;
  }
  return func;
}

export const PlasmicSellPlayerCard = Object.assign(
  // Top-level PlasmicSellPlayerCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicSellPlayerCard
    internalVariantProps: PlasmicSellPlayerCard__VariantProps,
    internalArgProps: PlasmicSellPlayerCard__ArgProps
  }
);

export default PlasmicSellPlayerCard;
/* prettier-ignore-end */
