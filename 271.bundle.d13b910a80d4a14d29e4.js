"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[271],{60271:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(86326),r=n(97598),a=n.n(r),i=n(53562),o=n(7800);const l=async function({rtDisplaySet:e,viewportIndex:t,servicesManager:n}){const{segmentationService:s,hangingProtocolService:r,viewportGridService:a}=n.services,i=e.referencedDisplaySetInstanceUID;let o=null;o=await s.createSegmentationForRTDisplaySet(e,o,!1),s.hydrateSegmentation(e.displaySetInstanceUID);const{viewports:l}=a.getState(),c=r.getViewportsRequireUpdate(t,i);return a.setDisplaySetsForViewports(c),l.forEach(((n,r)=>{if(r===t)return;s.shouldRenderSegmentation(n.displaySetInstanceUIDs,e.displaySetInstanceUID)&&c.push({viewportIndex:r,displaySetInstanceUIDs:n.displaySetInstanceUIDs,viewportOptions:{initialImageOptions:{preset:"middle"}}})})),a.setDisplaySetsForViewports(c),!0},c={NO_NEVER:-1,CANCEL:0,HYDRATE_SEG:5};const u=function({servicesManager:e,rtDisplaySet:t,viewportIndex:n,toolGroupId:s="default"}){const{uiViewportDialogService:r}=e.services;return new Promise((async function(a,i){const o=await function(e,t){return new Promise((function(n,s){const r="Do you want to open this Segmentation?",a=[{type:"secondary",text:"No",value:c.CANCEL},{type:"primary",text:"Yes",value:c.HYDRATE_SEG}],i=t=>{e.hide(),n(t)};e.show({viewportIndex:t,type:"info",message:r,actions:a,onSubmit:i,onOutsideClick:()=>{e.hide(),n(c.CANCEL)}})}))}(r,n);if(o===c.HYDRATE_SEG){a(await l({rtDisplaySet:t,viewportIndex:n,toolGroupId:s,servicesManager:e}))}}))};var p=n(99993);const d=function(e,t,n){const{tools:s}=t.get("cornerstone.overlayViewportTools")??{};return e.createToolGroupAndAddTools(n,s,{})};function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},m.apply(null,arguments)}const{formatDate:S}=i.utils;function g(e){const{children:t,displaySets:n,viewportOptions:r,viewportIndex:a,viewportLabel:c,servicesManager:g,extensionManager:y}=e,{displaySetService:v,toolGroupService:f,segmentationService:E,uiNotificationService:I,customizationService:w}=g.services,D=`RTToolGroup-${a}`;if(n.length>1)throw new Error("RT viewport should only have a single display set");const h=n[0],[T,b]=(0,o.ih)(),[N,x]=(0,s.useState)(!1),[C,P]=(0,s.useState)(1),[R,A]=(0,s.useState)(h.isHydrated),[M,k]=(0,s.useState)(!h.isLoaded),[O,U]=(0,s.useState)(null),[G,L]=(0,s.useState)({percentComplete:null,totalSegments:null}),V=(0,s.useRef)(null),{viewports:_,activeViewportIndex:F}=T,j=h.getReferenceDisplaySet(),H=function(e){const t=e.images[0],n={PatientID:t.PatientID,PatientName:t.PatientName,PatientSex:t.PatientSex,PatientAge:t.PatientAge,SliceThickness:t.SliceThickness,StudyDate:t.StudyDate,SeriesDescription:t.SeriesDescription,SeriesInstanceUID:t.SeriesInstanceUID,SeriesNumber:t.SeriesNumber,ManufacturerModelName:t.ManufacturerModelName,SpacingBetweenSlices:t.SpacingBetweenSlices};return n}(j);V.current={displaySet:j,metadata:H};const Y=e=>{U(e.detail.element)},B=()=>{U(null)},$=(0,s.useCallback)((()=>{const{component:t}=y.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone"),{displaySet:n}=V.current;return s.createElement(t,m({},e,{displaySets:[n,h],viewportOptions:{viewportType:"volume",toolGroupId:D,orientation:r.orientation,viewportId:r.viewportId},onElementEnabled:Y,onElementDisabled:B}))}),[a,h,D]),q=(0,s.useCallback)((e=>{e="left"===e?-1:1;const t=h.displaySetInstanceUID,n=E.getSegmentation(t),{segments:s}=n,r=Object.keys(s).length;let a=C+e;a>=r-1?a=1:0===a&&(a=r-1),E.jumpToSegmentCenter(t,a,D),P(a)}),[C]);(0,s.useEffect)((()=>{M||u({servicesManager:g,viewportIndex:a,rtDisplaySet:h}).then((e=>{e&&A(!0)}))}),[g,a,h,M]),(0,s.useEffect)((()=>{const{unsubscribe:e}=E.subscribe(E.EVENTS.SEGMENTATION_LOADING_COMPLETE,(e=>{e.rtDisplaySet.displaySetInstanceUID===h.displaySetInstanceUID&&k(!1),e.overlappingSegments&&I.show({title:"Overlapping Segments",message:"Overlapping segments detected which is not currently supported",type:"warning"})}));return()=>{e()}}),[h]),(0,s.useEffect)((()=>{const{unsubscribe:e}=E.subscribe(E.EVENTS.SEGMENT_LOADING_COMPLETE,(({percentComplete:e,numSegments:t})=>{L({percentComplete:e,totalSegments:t})}));return()=>{e()}}),[h]),(0,s.useEffect)((()=>{const e=v.subscribe(v.EVENTS.DISPLAY_SETS_REMOVED,(({displaySetInstanceUIDs:e})=>{const t=_[F];e.includes(t.displaySetInstanceUID)&&b.setDisplaySetsForViewport({viewportIndex:F,displaySetInstanceUIDs:[]})}));return()=>{e.unsubscribe()}}),[]),(0,s.useEffect)((()=>{let e=f.getToolGroup(D);if(!e)return e=d(f,w,D),x(!0),()=>{E.removeSegmentationRepresentationFromToolGroup(D),f.destroyToolGroup(D)}}),[]),(0,s.useEffect)((()=>(A(h.isHydrated),()=>{E.removeSegmentationRepresentationFromToolGroup(D),V.current=null})),[h]);let z=null;if(!V.current||j.displaySetInstanceUID!==V.current.displaySet.displaySetInstanceUID)return null;t&&t.length&&(z=t.map(((e,t)=>e&&s.cloneElement(e,{viewportIndex:a,key:t}))));const{PatientID:J,PatientName:K,PatientSex:Q,PatientAge:W,SliceThickness:X,ManufacturerModelName:Z,StudyDate:ee,SeriesDescription:te,SpacingBetweenSlices:ne,SeriesNumber:se}=V.current.metadata,re=async()=>{const e=await l({rtDisplaySet:h,viewportIndex:a,servicesManager:g});A(e)};return s.createElement(s.Fragment,null,s.createElement(o.cS,{onDoubleClick:e=>{e.stopPropagation(),e.preventDefault()},onArrowsClick:q,getStatusComponent:()=>function({isHydrated:e,onStatusClick:t}){let n=null,r=null;const{t:a}=(0,p.Bd)("Common"),i=a("LOAD");switch(e){case!0:r=()=>s.createElement(o.In,{name:"status-alert"}),n=()=>s.createElement("div",null,"This Segmentation is loaded in the segmentation panel");break;case!1:r=()=>s.createElement(o.In,{name:"status-untracked"}),n=()=>s.createElement("div",null,"Click LOAD to load RTSTRUCT.")}const l=()=>s.createElement("div",{className:"flex h-6 leading-6 cursor-default text-sm text-white"},s.createElement("div",{className:"min-w-[45px] flex items-center p-1 rounded-l-xl rounded-r bg-customgray-100"},s.createElement(r,null),s.createElement("span",{className:"ml-1"},"RTSTRUCT")),!e&&s.createElement("div",{className:"ml-1 px-1.5 rounded cursor-pointer hover:text-black bg-primary-main hover:bg-primary-light",onMouseUp:t},i));return s.createElement(s.Fragment,null,n&&s.createElement(o.m_,{content:s.createElement(n,null),position:"bottom-left"},s.createElement(l,null)),!n&&s.createElement(l,null))}({isHydrated:R,onStatusClick:re}),studyData:{label:c,useAltStyling:!0,studyDate:S(ee),currentSeries:se,seriesDescription:`RT Viewport ${te}`,patientInformation:{patientName:K?i.Ay.utils.formatPN(K.Alphabetic):"",patientSex:Q||"",patientAge:W||"",MRN:J||"",thickness:X?`${X.toFixed(2)}mm`:"",spacing:void 0!==ne?`${ne.toFixed(2)}mm`:"",scanner:Z||""}}}),s.createElement("div",{className:"relative flex flex-row w-full h-full overflow-hidden"},M&&s.createElement(o.pT,{className:"w-full h-full",totalNumbers:G.totalSegments,percentComplete:G.percentComplete,loadingText:"Loading RTSTRUCT..."}),$(),z))}g.propTypes={displaySets:a().arrayOf(a().object),viewportIndex:a().number.isRequired,dataSource:a().object,children:a().node,customProps:a().object},g.defaultProps={customProps:{}};const y=g}}]);
//# sourceMappingURL=271.bundle.d13b910a80d4a14d29e4.js.map