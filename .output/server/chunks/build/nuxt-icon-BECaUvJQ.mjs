import { defineComponent, ref, withAsyncContext, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nuxt-icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    filled: { type: Boolean, default: false }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const icon = ref("");
    let hasStroke = false;
    async function getIcon() {
      try {
        const iconsImport = /* @__PURE__ */ Object.assign({
          "/assets/icons/AI.svg": () => import('./AI-zAMw8A_A.mjs').then((m) => m["default"]),
          "/assets/icons/Add.svg": () => import('./Add-BQRQTnDQ.mjs').then((m) => m["default"]),
          "/assets/icons/AddDashElement.svg": () => import('./AddDashElement-cARqLYcd.mjs').then((m) => m["default"]),
          "/assets/icons/Analytics.svg": () => import('./Analytics-sHVPJpl6.mjs').then((m) => m["default"]),
          "/assets/icons/ArrowUp.svg": () => import('./ArrowUp-DD9re66B.mjs').then((m) => m["default"]),
          "/assets/icons/Audience.svg": () => import('./Audience-BmgMovvy.mjs').then((m) => m["default"]),
          "/assets/icons/Automations.svg": () => import('./Automations-DgS47vle.mjs').then((m) => m["default"]),
          "/assets/icons/Bolt.svg": () => import('./Bolt-DSFxyySd.mjs').then((m) => m["default"]),
          "/assets/icons/Bookmark.svg": () => import('./Bookmark-CCAtoXzt.mjs').then((m) => m["default"]),
          "/assets/icons/BrandedEmails.svg": () => import('./BrandedEmails-VTRFoLYz.mjs').then((m) => m["default"]),
          "/assets/icons/CMS.svg": () => import('./CMS-DJpvPLVi.mjs').then((m) => m["default"]),
          "/assets/icons/CSS.svg": () => import('./CSS-Bt8EbTuV.mjs').then((m) => m["default"]),
          "/assets/icons/Calendar.svg": () => import('./Calendar-BkrVTpNb.mjs').then((m) => m["default"]),
          "/assets/icons/Campaign.svg": () => import('./Campaign-qbvJ8G4v.mjs').then((m) => m["default"]),
          "/assets/icons/Chat.svg": () => import('./Chat-C6AmyMOJ.mjs').then((m) => m["default"]),
          "/assets/icons/Check.svg": () => import('./Check-DHV4FLUi.mjs').then((m) => m["default"]),
          "/assets/icons/ChevronLeft.svg": () => import('./ChevronLeft-BtbzrD-X.mjs').then((m) => m["default"]),
          "/assets/icons/Close.svg": () => import('./Close-DwzypA71.mjs').then((m) => m["default"]),
          "/assets/icons/Compose.svg": () => import('./Compose-CrRdOemd.mjs').then((m) => m["default"]),
          "/assets/icons/Content.svg": () => import('./Content-Cdj9zkCn.mjs').then((m) => m["default"]),
          "/assets/icons/Dashboard.svg": () => import('./Dashboard-BVNn_Nl4.mjs').then((m) => m["default"]),
          "/assets/icons/Diagnostics.svg": () => import('./Diagnostics-DPOd41Tt.mjs').then((m) => m["default"]),
          "/assets/icons/Discord.svg": () => import('./Discord-srDM-8oS.mjs').then((m) => m["default"]),
          "/assets/icons/Dns.svg": () => import('./Dns-DmrA6kGR.mjs').then((m) => m["default"]),
          "/assets/icons/Documentation.svg": () => import('./Documentation-BGF4IS6V.mjs').then((m) => m["default"]),
          "/assets/icons/Dribbble.svg": () => import('./Dribbble-CNvgAE84.mjs').then((m) => m["default"]),
          "/assets/icons/Email.svg": () => import('./Email-CTMXE5Jl.mjs').then((m) => m["default"]),
          "/assets/icons/Facebook.svg": () => import('./Facebook-JfnHuJ-P.mjs').then((m) => m["default"]),
          "/assets/icons/FileManager.svg": () => import('./FileManager-BFyhJuhJ.mjs').then((m) => m["default"]),
          "/assets/icons/Fingerprint.svg": () => import('./Fingerprint-BsMv3HR7.mjs').then((m) => m["default"]),
          "/assets/icons/Gant.svg": () => import('./Gant-DLBqCbgl.mjs').then((m) => m["default"]),
          "/assets/icons/Germany.svg": () => import('./Germany-DZVRXrX6.mjs').then((m) => m["default"]),
          "/assets/icons/Gmail.svg": () => import('./Gmail-UTdXQ-MP.mjs').then((m) => m["default"]),
          "/assets/icons/Google.svg": () => import('./Google-CV78LCcC.mjs').then((m) => m["default"]),
          "/assets/icons/GoogleAds.svg": () => import('./GoogleAds-BL7DaBOv.mjs').then((m) => m["default"]),
          "/assets/icons/Grid.svg": () => import('./Grid-Cs-wxe48.mjs').then((m) => m["default"]),
          "/assets/icons/HTML.svg": () => import('./HTML-BnvGBxR_.mjs').then((m) => m["default"]),
          "/assets/icons/Heart.svg": () => import('./Heart-CKPmcOid.mjs').then((m) => m["default"]),
          "/assets/icons/Help.svg": () => import('./Help-D3iBZJ67.mjs').then((m) => m["default"]),
          "/assets/icons/Inbox.svg": () => import('./Inbox-CdYu_7Bz.mjs').then((m) => m["default"]),
          "/assets/icons/Info.svg": () => import('./Info-DuzMEEeO.mjs').then((m) => m["default"]),
          "/assets/icons/Instagram.svg": () => import('./Instagram-C0P2sBH2.mjs').then((m) => m["default"]),
          "/assets/icons/JS.svg": () => import('./JS-Cj376T2s.mjs').then((m) => m["default"]),
          "/assets/icons/Knowledge.svg": () => import('./Knowledge-DtBEY1Ep.mjs').then((m) => m["default"]),
          "/assets/icons/Language.svg": () => import('./Language-CrNPl_eH.mjs').then((m) => m["default"]),
          "/assets/icons/Meta.svg": () => import('./Meta-CVE_JQcw.mjs').then((m) => m["default"]),
          "/assets/icons/Nav.svg": () => import('./Nav-EpBiOdMY.mjs').then((m) => m["default"]),
          "/assets/icons/Netherlands.svg": () => import('./Netherlands-BRx9k4Q4.mjs').then((m) => m["default"]),
          "/assets/icons/Nextjs.svg": () => import('./Nextjs-DYT6JuRG.mjs').then((m) => m["default"]),
          "/assets/icons/Nodejs.svg": () => import('./Nodejs-Ce_TQVhg.mjs').then((m) => m["default"]),
          "/assets/icons/Notifications.svg": () => import('./Notifications-BAv7VpRP.mjs').then((m) => m["default"]),
          "/assets/icons/Nuxt.svg": () => import('./Nuxt-Cd79KDpY.mjs').then((m) => m["default"]),
          "/assets/icons/Options.svg": () => import('./Options-D6TtZofa.mjs').then((m) => m["default"]),
          "/assets/icons/Organization.svg": () => import('./Organization-B21nOiqZ.mjs').then((m) => m["default"]),
          "/assets/icons/PWA.svg": () => import('./PWA-BI5raSqm.mjs').then((m) => m["default"]),
          "/assets/icons/Paperplane.svg": () => import('./Paperplane-Q5Q8Yq85.mjs').then((m) => m["default"]),
          "/assets/icons/Pinterest.svg": () => import('./Pinterest-DQj2omhT.mjs').then((m) => m["default"]),
          "/assets/icons/Python.svg": () => import('./Python-B1peAS21.mjs').then((m) => m["default"]),
          "/assets/icons/React.svg": () => import('./React-B-oIS_5S.mjs').then((m) => m["default"]),
          "/assets/icons/Reddit.svg": () => import('./Reddit-H4AY2zS7.mjs').then((m) => m["default"]),
          "/assets/icons/Revenue.svg": () => import('./Revenue-CPTdV3Z5.mjs').then((m) => m["default"]),
          "/assets/icons/Ruby.svg": () => import('./Ruby-BplGHUcQ.mjs').then((m) => m["default"]),
          "/assets/icons/SSL.svg": () => import('./SSL-BxY8vspM.mjs').then((m) => m["default"]),
          "/assets/icons/Search.svg": () => import('./Search-Cu5rRPc8.mjs').then((m) => m["default"]),
          "/assets/icons/SendGrid.svg": () => import('./SendGrid-DwQ28aYL.mjs').then((m) => m["default"]),
          "/assets/icons/ServerBolt.svg": () => import('./ServerBolt-JlFm-6Wg.mjs').then((m) => m["default"]),
          "/assets/icons/Slack.svg": () => import('./Slack-CB5faWQf.mjs').then((m) => m["default"]),
          "/assets/icons/Store.svg": () => import('./Store-CRTQwMEm.mjs').then((m) => m["default"]),
          "/assets/icons/Svelte.svg": () => import('./Svelte-DE1fVZDV.mjs').then((m) => m["default"]),
          "/assets/icons/Threads.svg": () => import('./Threads-Bg46y7KD.mjs').then((m) => m["default"]),
          "/assets/icons/TikTok.svg": () => import('./TikTok-DvMLtrc3.mjs').then((m) => m["default"]),
          "/assets/icons/Twitter.svg": () => import('./Twitter-CDYaYJju.mjs').then((m) => m["default"]),
          "/assets/icons/UniCode.svg": () => import('./UniCode-BWD3gizl.mjs').then((m) => m["default"]),
          "/assets/icons/UnitedStates.svg": () => import('./UnitedStates-RxMpkPeP.mjs').then((m) => m["default"]),
          "/assets/icons/Unitedkingdom.svg": () => import('./Unitedkingdom-DOown-oO.mjs').then((m) => m["default"]),
          "/assets/icons/Universal.svg": () => import('./Universal-D9BY4Huz.mjs').then((m) => m["default"]),
          "/assets/icons/User.svg": () => import('./User-BsFvJB0G.mjs').then((m) => m["default"]),
          "/assets/icons/Users.svg": () => import('./Users-TJQpTsuY.mjs').then((m) => m["default"]),
          "/assets/icons/ViewSidebar.svg": () => import('./ViewSidebar-D2so19Y_.mjs').then((m) => m["default"]),
          "/assets/icons/Vue.svg": () => import('./Vue-CFyik3DB.mjs').then((m) => m["default"]),
          "/assets/icons/Warning.svg": () => import('./Warning-B66xOzA4.mjs').then((m) => m["default"]),
          "/assets/icons/Wordpress.svg": () => import('./Wordpress-_GuucSwj.mjs').then((m) => m["default"]),
          "/assets/icons/YouTube.svg": () => import('./YouTube-CcILx9vD.mjs').then((m) => m["default"]),
          "/assets/icons/cmd.svg": () => import('./cmd-73Hh4UxS.mjs').then((m) => m["default"]),
          "/assets/icons/dark.svg": () => import('./dark-DNgI6Yan.mjs').then((m) => m["default"]),
          "/assets/icons/light.svg": () => import('./light-Dwop6McR.mjs').then((m) => m["default"]),
          "/assets/icons/linkedin.svg": () => import('./linkedin-COk-cVzn.mjs').then((m) => m["default"]),
          "/assets/icons/subdomain.svg": () => import('./subdomain-Cye4yBsx.mjs').then((m) => m["default"]),
          "/assets/icons/system.svg": () => import('./system-DGH9OYY6.mjs').then((m) => m["default"]),
          "/assets/icons/www.svg": () => import('./www-DCw3pPyy.mjs').then((m) => m["default"])
        });
        const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
        if (rawIcon.includes("stroke")) {
          hasStroke = true;
        }
        icon.value = rawIcon;
      } catch {
        console.error(
          `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
        );
      }
    }
    [__temp, __restore] = withAsyncContext(() => getIcon()), await __temp, __restore();
    watchEffect(getIcon);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["nuxt-icon", { "nuxt-icon--fill": !_ctx.filled, "nuxt-icon--stroke": unref(hasStroke) && !_ctx.filled }]
      }, _attrs))}>${(_a = unref(icon)) != null ? _a : ""}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon-BECaUvJQ.mjs.map
