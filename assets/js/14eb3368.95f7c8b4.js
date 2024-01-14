"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9817],{23899:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(87462),r=a(67294),l=a(86010),i=a(23702),s=a(78259),c=a(69003),o=a(83699),m=a(97325),d=a(79524);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h="breadcrumbHomeIcon_YNFT";function b(){const e=(0,d.default)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.default,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h})))}const f="breadcrumbsContainer_Z_bl";function v(e){let{children:t,href:a,isLast:n}=e;const l="breadcrumbs__link";return n?r.createElement("span",{className:l,itemProp:"name"},t):a?r.createElement(o.default,{className:l,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:l},t)}function p(e){let{children:t,active:a,index:i,addMicrodata:s}=e;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.default)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function g(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,l.default)(i.k.docs.docBreadcrumbs,f),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(v,{href:t.href,isLast:n},t.label))})))):null}},80853:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(67294),r=a(79488),l=a(78259),i=a(79524),s=a(86010),c=a(83699),o=a(2735),m=a(97325);const d="cardContainer_fWXF",u="cardTitle_rnsV",h="cardDescription_PWke";function b(e){let{href:t,children:a}=e;return n.createElement(c.default,{href:t,className:(0,s.default)("card padding--lg",d)},a)}function f(e){let{href:t,icon:a,title:r,description:l}=e;return n.createElement(b,{href:t},n.createElement("h2",{className:(0,s.default)("text--truncate",u),title:r},a," ",r),l&&n.createElement("p",{className:(0,s.default)("text--truncate",h),title:l},l))}function v(e){let{item:t}=e;const a=(0,l.Wl)(t);return a?n.createElement(f,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const a=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,l.xz)(t.docId??void 0);return n.createElement(f,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const a=(0,l.jA)();return n.createElement(N,{items:a.items,className:t})}function N(e){const{items:t,className:a}=e;if(!t)return n.createElement(E,e);const r=(0,l.MN)(t);return n.createElement("section",{className:(0,s.default)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}var k=a(49473),L=a(25350),_=a(44617),T=a(23899),x=a(13899);const y="generatedIndexPage_vN6x",Z="list_eTzJ",I="title_kItE";function w(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.default)(t.image)})}function V(e){let{categoryGeneratedIndex:t}=e;const a=(0,l.jA)();return n.createElement("div",{className:y},n.createElement(L.default,null),n.createElement(T.default,null),n.createElement(_.default,null),n.createElement("header",null,n.createElement(x.Z,{as:"h1",className:I},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(N,{items:a.items,className:Z})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(k.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function A(e){return n.createElement(n.Fragment,null,n.createElement(w,e),n.createElement(V,e))}},49473:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),r=a(67294),l=a(97325),i=a(86010),s=a(83699);function c(e){const{permalink:t,title:a,subLabel:n,isNext:l}=e;return r.createElement(s.default,{className:(0,i.default)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44617:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),r=a(86010),l=a(97325),i=a(23702),s=a(58801);function c(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,r.default)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},25350:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(67294),r=a(86010),l=a(39962),i=a(83699),s=a(97325),c=a(30868),o=a(23702),m=a(86409),d=a(58801);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.default,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:i}}=(0,l.default)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:f}=(0,c.Jo)(s),v=u??(p=f).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.default)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:i,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:f.label,to:v.path,onClick:()=>d(f.name)})))}function v(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(f,{className:t,versionMetadata:a}):null}},13899:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),i=a(97325),s=a(20107),c=a(83699);const o="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5";function d(e){let{as:t,id:a,...d}=e;const{navbar:{hideOnScroll:u}}=(0,s.L)();if("h1"===t||!a)return r.createElement(t,(0,n.Z)({},d,{id:void 0}));const h=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:a});return r.createElement(t,(0,n.Z)({},d,{className:(0,l.default)("anchor",u?m:o,d.className),id:a}),d.children,r.createElement(c.default,{className:"hash-link",to:`#${a}`,"aria-label":h,title:h},"\u200b"))}}}]);