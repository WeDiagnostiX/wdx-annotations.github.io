"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[372],{94372:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});const n=JSON.parse('{"u2":"@ohif/extension-tmtv"}').u2,o={viewportOptions:{viewportId:"ctAXIAL",viewportType:"volume",orientation:"axial",toolGroupId:"ctToolGroup",initialImageOptions:{preset:"first"},syncGroups:[{type:"cameraPosition",id:"axialSync",source:!0,target:!0},{type:"voi",id:"ctWLSync",source:!0,target:!0,options:{syncColormap:!0}}]},displaySets:[{id:"ctDisplaySet"}]},i={viewportOptions:{viewportId:"ctSAGITTAL",viewportType:"volume",orientation:"sagittal",toolGroupId:"ctToolGroup",syncGroups:[{type:"cameraPosition",id:"sagittalSync",source:!0,target:!0},{type:"voi",id:"ctWLSync",source:!0,target:!0,options:{syncColormap:!0}}]},displaySets:[{id:"ctDisplaySet"}]},r={viewportOptions:{viewportId:"ctCORONAL",viewportType:"volume",orientation:"coronal",toolGroupId:"ctToolGroup",syncGroups:[{type:"cameraPosition",id:"coronalSync",source:!0,target:!0},{type:"voi",id:"ctWLSync",source:!0,target:!0,options:{syncColormap:!0}}]},displaySets:[{id:"ctDisplaySet"}]},s={viewportOptions:{viewportId:"ptAXIAL",viewportType:"volume",background:[1,1,1],orientation:"axial",toolGroupId:"ptToolGroup",initialImageOptions:{preset:"first"},syncGroups:[{type:"cameraPosition",id:"axialSync",source:!0,target:!0},{type:"voi",id:"ptWLSync",source:!0,target:!0,options:{syncColormap:!0}},{type:"voi",id:"ptFusionWLSync",source:!0,target:!1,options:{syncColormap:!1}}]},displaySets:[{options:{voi:{custom:"getPTVOIRange"},voiInverted:!0},id:"ptDisplaySet"}]},l={viewportOptions:{viewportId:"ptSAGITTAL",viewportType:"volume",orientation:"sagittal",background:[1,1,1],toolGroupId:"ptToolGroup",syncGroups:[{type:"cameraPosition",id:"sagittalSync",source:!0,target:!0},{type:"voi",id:"ptWLSync",source:!0,target:!0,options:{syncColormap:!0}},{type:"voi",id:"ptFusionWLSync",source:!0,target:!1,options:{syncColormap:!1}}]},displaySets:[{options:{voi:{custom:"getPTVOIRange"},voiInverted:!0},id:"ptDisplaySet"}]},c={viewportOptions:{viewportId:"ptCORONAL",viewportType:"volume",orientation:"coronal",background:[1,1,1],toolGroupId:"ptToolGroup",syncGroups:[{type:"cameraPosition",id:"coronalSync",source:!0,target:!0},{type:"voi",id:"ptWLSync",source:!0,target:!0,options:{syncColormap:!0}},{type:"voi",id:"ptFusionWLSync",source:!0,target:!1,options:{syncColormap:!1}}]},displaySets:[{options:{voi:{custom:"getPTVOIRange"},voiInverted:!0},id:"ptDisplaySet"}]},m={viewportOptions:{viewportId:"fusionAXIAL",viewportType:"volume",orientation:"axial",toolGroupId:"fusionToolGroup",initialImageOptions:{preset:"first"},syncGroups:[{type:"cameraPosition",id:"axialSync",source:!0,target:!0},{type:"voi",id:"ctWLSync",source:!1,target:!0},{type:"voi",id:"fusionWLSync",source:!0,target:!0,options:{syncColormap:!0}},{type:"voi",id:"ptFusionWLSync",source:!1,target:!0,options:{syncColormap:!1}}]},displaySets:[{id:"ctDisplaySet"},{id:"ptDisplaySet",options:{colormap:{name:"hsv",opacity:[{value:0,opacity:0},{value:.1,opacity:.9},{value:1,opacity:.95}]},voi:{custom:"getPTVOIRange"}}}]},p={viewportOptions:{viewportId:"fusionSAGITTAL",viewportType:"volume",orientation:"sagittal",toolGroupId:"fusionToolGroup",syncGroups:[{type:"cameraPosition",id:"sagittalSync",source:!0,target:!0},{type:"voi",id:"ctWLSync",source:!1,target:!0},{type:"voi",id:"fusionWLSync",source:!0,target:!0,options:{syncColormap:!0}},{type:"voi",id:"ptFusionWLSync",source:!1,target:!0,options:{syncColormap:!1}}]},displaySets:[{id:"ctDisplaySet"},{id:"ptDisplaySet",options:{colormap:{name:"hsv",opacity:[{value:0,opacity:0},{value:.1,opacity:.9},{value:1,opacity:.95}]},voi:{custom:"getPTVOIRange"}}}]},u={viewportOptions:{viewportId:"fusionCoronal",viewportType:"volume",orientation:"coronal",toolGroupId:"fusionToolGroup",syncGroups:[{type:"cameraPosition",id:"coronalSync",source:!0,target:!0},{type:"voi",id:"ctWLSync",source:!1,target:!0},{type:"voi",id:"fusionWLSync",source:!0,target:!0,options:{syncColormap:!0}},{type:"voi",id:"ptFusionWLSync",source:!1,target:!0,options:{syncColormap:!1}}]},displaySets:[{id:"ctDisplaySet"},{id:"ptDisplaySet",options:{colormap:{name:"hsv",opacity:[{value:0,opacity:0},{value:.1,opacity:.9},{value:1,opacity:.95}]},voi:{custom:"getPTVOIRange"}}}]},d={viewportOptions:{viewportId:"mipSagittal",viewportType:"volume",orientation:"sagittal",background:[1,1,1],toolGroupId:"mipToolGroup",syncGroups:[{type:"voi",id:"ptWLSync",source:!0,target:!0,options:{syncColormap:!0}},{type:"voi",id:"ptFusionWLSync",source:!0,target:!1,options:{syncColormap:!1}}],customViewportProps:{hideOverlays:!0}},displaySets:[{options:{blendMode:"MIP",slabThickness:"fullVolume",voi:{custom:"getPTVOIRange"},voiInverted:!0},id:"ptDisplaySet"}]},g={id:"@ohif/extension-tmtv.hangingProtocolModule.ptCT",locked:!0,name:"Default",createdDate:"2021-02-23T19:22:08.894Z",modifiedDate:"2022-10-04T19:22:08.894Z",availableTo:{},editableBy:{},imageLoadStrategy:"interleaveTopToBottom",protocolMatchingRules:[{attribute:"ModalitiesInStudy",constraint:{contains:["CT","PT"]}},{attribute:"StudyDescription",constraint:{contains:"PETCT"}},{attribute:"StudyDescription",constraint:{contains:"PET/CT"}}],displaySetSelectors:{ctDisplaySet:{seriesMatchingRules:[{attribute:"Modality",constraint:{equals:{value:"CT"}},required:!0},{attribute:"isReconstructable",constraint:{equals:{value:!0}},required:!0},{attribute:"SeriesDescription",constraint:{contains:"CT"}},{attribute:"SeriesDescription",constraint:{contains:"CT WB"}}]},ptDisplaySet:{seriesMatchingRules:[{attribute:"Modality",constraint:{equals:"PT"},required:!0},{attribute:"isReconstructable",constraint:{equals:{value:!0}},required:!0},{attribute:"SeriesDescription",constraint:{contains:"Corrected"}},{weight:2,attribute:"SeriesDescription",constraint:{doesNotContain:{value:"Uncorrected"}}}]}},stages:[{name:"default",viewportStructure:{layoutType:"grid",properties:{rows:3,columns:4,layoutOptions:[{x:0,y:0,width:1/4,height:1/3},{x:1/4,y:0,width:1/4,height:1/3},{x:.5,y:0,width:1/4,height:1/3},{x:0,y:1/3,width:1/4,height:1/3},{x:1/4,y:1/3,width:1/4,height:1/3},{x:.5,y:1/3,width:1/4,height:1/3},{x:0,y:2/3,width:1/4,height:1/3},{x:1/4,y:2/3,width:1/4,height:1/3},{x:.5,y:2/3,width:1/4,height:1/3},{x:3/4,y:0,width:1/4,height:1}]}},viewports:[o,i,r,s,l,c,m,p,u,d],createdDate:"2021-02-23T18:32:42.850Z"},{name:"Fusion 2x2",viewportStructure:{layoutType:"grid",properties:{rows:2,columns:2}},viewports:[o,m,s,d]},{name:"2x3-layout",viewportStructure:{layoutType:"grid",properties:{rows:2,columns:3}},viewports:[o,i,r,s,l,c]},{name:"2x4-layout",viewportStructure:{layoutType:"grid",properties:{rows:2,columns:4,layoutOptions:[{x:0,y:0,width:1/4,height:.5},{x:1/4,y:0,width:1/4,height:.5},{x:.5,y:0,width:1/4,height:.5},{x:3/4,y:0,width:1/4,height:1},{x:0,y:.5,width:1/4,height:.5},{x:1/4,y:.5,width:1/4,height:.5},{x:.5,y:.5,width:1/4,height:.5}]}},viewports:[c,l,s,d,u,p,m]}],numberOfPriorsReferenced:-1};const y=function(){return[{name:g.id,protocol:g}]};var h=a(43001),S=a(3827),v=a.n(S),f=a(47316),T=a(84793),I=a(69190);const b={PatientWeight:null,PatientSex:null,SeriesTime:null,RadiopharmaceuticalInformationSequence:{RadionuclideTotalDose:null,RadionuclideHalfLife:null,RadiopharmaceuticalStartTime:null}};function x({servicesManager:e,commandsManager:t}){const{t:a}=(0,I.$G)("PanelSUV"),{displaySetService:n,toolGroupService:o,toolbarService:i,hangingProtocolService:r}=e.services,[s,l]=(0,h.useState)(b),[c,m]=(0,h.useState)(null),p=e=>{l((t=>{const a={...t};return Object.keys(e).forEach((n=>{"object"==typeof e[n]?a[n]={...t[n],...e[n]}:a[n]=e[n]})),a}))},u=e=>{const a=t.runCommand("getMatchingPTDisplaySet",{viewportMatchDetails:e});if(!a)return;return{ptDisplaySet:a,metadata:t.runCommand("getPTMetadata",{ptDisplaySet:a})}};return(0,h.useEffect)((()=>{const e=n.getActiveDisplaySets(),{viewportMatchDetails:t}=r.getMatchDetails();if(!e.length)return;const a=u(t);if(!a)return;const{ptDisplaySet:o,metadata:i}=a;m(o),l(i)}),[]),(0,h.useEffect)((()=>{const{unsubscribe:e}=r.subscribe(r.EVENTS.PROTOCOL_CHANGED,(({viewportMatchDetails:e})=>{const t=u(e);if(!t)return;const{ptDisplaySet:a,metadata:n}=t;m(a),l(n)}));return()=>{e()}}),[]),h.createElement("div",{className:"ohif-scrollbar flex min-h-0 flex-auto select-none flex-col justify-between overflow-auto"},h.createElement("div",{className:"flex min-h-0 flex-1 flex-col bg-black text-[13px] font-[300]"},h.createElement(f.cw,{title:a("Patient Information")},h.createElement("div",{className:"flex flex-col"},h.createElement("div",{className:"bg-primary-dark flex flex-col gap-4 p-2"},h.createElement(f.II,{containerClassName:"!flex-row !justify-between items-center",label:a("Patient Sex"),labelClassName:"text-[13px] font-inter text-white",className:"!m-0 !h-[26px] !w-[117px]",value:s.PatientSex||"",onChange:e=>{p({PatientSex:e.target.value})}}),h.createElement(f.II,{containerClassName:"!flex-row !justify-between items-center",label:a("Weight"),labelChildren:h.createElement("span",{className:"text-aqua-pale"}," kg"),labelClassName:"text-[13px] font-inter text-white",className:"!m-0 !h-[26px] !w-[117px]",value:s.PatientWeight||"",onChange:e=>{p({PatientWeight:e.target.value})},id:"weight-input"}),h.createElement(f.II,{containerClassName:"!flex-row !justify-between items-center",label:a("Total Dose"),labelChildren:h.createElement("span",{className:"text-aqua-pale"}," bq"),labelClassName:"text-[13px] font-inter text-white",className:"!m-0 !h-[26px] !w-[117px]",value:s.RadiopharmaceuticalInformationSequence.RadionuclideTotalDose||"",onChange:e=>{p({RadiopharmaceuticalInformationSequence:{RadionuclideTotalDose:e.target.value}})}}),h.createElement(f.II,{containerClassName:"!flex-row !justify-between items-center",label:a("Half Life"),labelChildren:h.createElement("span",{className:"text-aqua-pale"}," s"),labelClassName:"text-[13px] font-inter text-white",className:"!m-0 !h-[26px] !w-[117px]",value:s.RadiopharmaceuticalInformationSequence.RadionuclideHalfLife||"",onChange:e=>{p({RadiopharmaceuticalInformationSequence:{RadionuclideHalfLife:e.target.value}})}}),h.createElement(f.II,{containerClassName:"!flex-row !justify-between items-center",label:a("Injection Time"),labelChildren:h.createElement("span",{className:"text-aqua-pale"}," s"),labelClassName:"text-[13px] font-inter text-white",className:"!m-0 !h-[26px] !w-[117px]",value:s.RadiopharmaceuticalInformationSequence.RadiopharmaceuticalStartTime||"",onChange:e=>{p({RadiopharmaceuticalInformationSequence:{RadiopharmaceuticalStartTime:e.target.value}})}}),h.createElement(f.II,{containerClassName:"!flex-row !justify-between items-center",label:a("Acquisition Time"),labelChildren:h.createElement("span",{className:"text-aqua-pale"}," s"),labelClassName:"text-[13px] font-inter text-white",className:"!m-0 !h-[26px] !w-[117px]",value:s.SeriesTime||"",onChange:()=>{}}),h.createElement(f.zx,{className:"!h-[26px] !w-[115px] self-end !p-0",onClick:function(){if(!c)throw new Error("No ptDisplaySet found");T.DicomMetadataStore.updateMetadataForSeries(c.StudyInstanceUID,c.SeriesInstanceUID,s),n.setDisplaySetMetadataInvalidated(c.displaySetInstanceUID),setTimeout((()=>{t.runCommand("resetCrosshairs")}),0)}},"Reload Data"))))))}x.propTypes={servicesManager:v().shape({services:v().shape({measurementService:v().shape({getMeasurements:v().func.isRequired,subscribe:v().func.isRequired,EVENTS:v().object.isRequired,VALUE_TYPES:v().object.isRequired}).isRequired}).isRequired}).isRequired};var w=a(62709),E=a(93725);function R({servicesManager:e,commandsManager:t}){const{segmentationService:a,uiNotificationService:n}=e.services,{t:o}=(0,I.$G)("PanelSUVExport"),[i,r]=(0,h.useState)((()=>a.getSegmentations())),[s,l]=(0,h.useState)(null);if((0,h.useEffect)((()=>{const e=a.EVENTS.SEGMENTATION_ADDED,t=a.EVENTS.SEGMENTATION_UPDATED,n=a.EVENTS.SEGMENTATION_REMOVED,o=[];return[e,t,n].forEach((e=>{const{unsubscribe:t}=a.subscribe(e,(()=>{const e=a.getSegmentations();r(e);const t=e.filter((e=>e.isActive));l(t[0])}));o.push(t)})),()=>{o.forEach((e=>{e()}))}}),[]),(0,h.useEffect)((()=>{const e=async e=>{const{detail:o}=e,{segmentationId:i}=o;if(!i)return;await(async({segmentationId:e,commandsManager:t,segmentationService:a,config:n={}})=>{const o=a.getSegmentation(e),i={};o.segments=await Promise.all(o.segments.map((async a=>{if(!a||!a.segmentIndex)return a;const n=w.cache.getVolume(e),o=a.segmentIndex,r=t.run("getLesionStats",{labelmap:n,segmentIndex:o}),s=await t.run("calculateSuvPeak",{labelmap:n,segmentIndex:o}),l={lesionStats:r,suvPeak:s,lesionGlyoclysisStats:r.volume*r.meanValue};return a.cachedStats=l,a.displayText=[`SUV Peak: ${s.suvPeak.toFixed(2)}`,`Volume: ${r.volume.toFixed(2)} mm3`],i[o]=l,a})));const r=a.getSegmentations(),s=t.run("calculateTMTV",{segmentations:r});o.cachedStats=Object.assign(o.cachedStats,i,{tmtv:{value:s.toFixed(3),config:{...n}}}),a.addOrUpdateSegmentation({...o},!1,!0)})({segmentationId:i,commandsManager:t,segmentationService:a});const r=a.getSegmentation(i),{cachedStats:s}=r;if(!s)return;const l=s?.[1]?.suvPeak?.suvPeak;Number.isNaN(l)&&n.show({title:"SUV Peak",message:"Segmented volume does not allow SUV Peak calculation",type:"warning"})};return w.eventTarget.addEventListenerDebounced(E.Enums.Events.SEGMENTATION_DATA_MODIFIED,e,250),()=>{w.eventTarget.removeEventListenerDebounced(E.Enums.Events.SEGMENTATION_DATA_MODIFIED,e)}}),[]),!s)return null;const c=s.cachedStats?.tmtv?.value||null,m=s.cachedStats?.tmtv?.config||{},p=[{label:"Export CSV",onClick:()=>{t.runCommand("exportTMTVReportCSV",{segmentations:i,tmtv:c,config:m})},disabled:null===c},{label:"Export RT Report",onClick:()=>{t.runCommand("createTMTVRTReport")},disabled:null===c}];return h.createElement(h.Fragment,null,h.createElement("div",{className:"mt-2 mb-10 flex flex-col"},h.createElement("div",{className:"invisible-scrollbar overflow-y-auto overflow-x-hidden"},null!==c?h.createElement("div",{className:"bg-secondary-dark flex items-baseline justify-between px-2 py-1"},h.createElement("span",{className:"text-base font-bold uppercase tracking-widest text-white"},"TMTV:"),h.createElement("div",{className:"text-white"},`${c} mL`)):null,h.createElement("div",{className:"mt-2 flex justify-center"},h.createElement(f.EY,{actions:p,t:o})))),h.createElement("div",{className:"absolute bottom-1 left-[50px] flex cursor-pointer items-center justify-center text-blue-400 opacity-50 hover:opacity-80",onClick:()=>{window.open("https://github.com/OHIF/Viewers/blob/master/modes/tmtv/README.md","_blank")}},h.createElement(f.JO,{width:"15px",height:"15px",name:"info",className:"text-primary-active ml-4 mr-3"}),h.createElement("span",null,"User Guide")))}R.propTypes={commandsManager:v().shape({runCommand:v().func.isRequired}),servicesManager:v().shape({services:v().shape({segmentationService:v().shape({getSegmentation:v().func.isRequired,getSegmentations:v().func.isRequired,toggleSegmentationVisibility:v().func.isRequired,subscribe:v().func.isRequired,EVENTS:v().object.isRequired}).isRequired}).isRequired}).isRequired};const D=R;const M=function({commandsManager:e,extensionManager:t,servicesManager:a}){return[{name:"petSUV",iconName:"tab-patient-info",iconLabel:"Patient Info",label:"Patient Info",component:()=>h.createElement(x,{commandsManager:e,servicesManager:a})},{name:"tmtvBox",iconName:"tab-segmentation",iconLabel:"Segmentation",label:"Segmentation Toolbox",component:()=>h.createElement(h.Fragment,null,h.createElement(f.vb,{commandsManager:e,servicesManager:a,extensionManager:t,buttonSectionId:"ROIThresholdToolbox",title:"Threshold Tools"}))},{name:"tmtvExport",iconName:"tab-segmentation",iconLabel:"Segmentation",label:"Segmentation Export",component:()=>h.createElement(h.Fragment,null,h.createElement(D,{commandsManager:e,servicesManager:a}))}]},N=["RectangleROIStartEndThreshold"];function C(e){if(e)return function(e){const t=w.metaData.get("instance",e);return{SOPInstanceUID:t.SOPInstanceUID,SeriesInstanceUID:t.SeriesInstanceUID,StudyInstanceUID:t.StudyInstanceUID,frameNumber:t.frameNumber||1}}(e)}const P={toAnnotation:(e,t)=>{},toMeasurement:(e,t,a)=>{const{annotation:n,viewportId:o}=e,{metadata:i,data:r,annotationUID:s}=n;if(!i||!r)return console.warn("Length tool: Missing metadata or data"),null;const{toolName:l,referencedImageId:c,FrameOfReferenceUID:m}=i;if(!N.includes(l))throw new Error("Tool not supported");const{SOPInstanceUID:p,SeriesInstanceUID:u,StudyInstanceUID:d}=C(c);let g;return g=p?t.getDisplaySetForSOPInstanceUID(p,u):t.getDisplaySetsForSeries(u),{uid:s,SOPInstanceUID:p,FrameOfReferenceUID:m,metadata:i,referenceSeriesUID:u,referenceStudyUID:d,toolName:i.toolName,displaySetInstanceUID:g.displaySetInstanceUID,label:i.label,data:r.cachedStats,type:"RectangleROIStartEndThreshold"}}},L=(e,t,a)=>({RectangleROIStartEndThreshold:{toAnnotation:P.toAnnotation,toMeasurement:e=>P.toMeasurement(e,t,a),matchingCriteria:[{valueType:e.VALUE_TYPES.ROI_THRESHOLD_MANUAL}]}});var O=a(72076);function V(e,t){const{imageData:a}=e,n=a.getPointData().getScalars().getData(),{fn:o,baseValue:i}=function(){const e=-1/0,t=(e,t)=>(e>t&&(t=e),t);return{fn:t,baseValue:e}}();let r=i;const s=E.utilities.rectangleROITool.getBoundsIJKFromRectangleAnnotations(t,e),[[l,c],[m,p],[u,d]]=s;for(let e=l;e<=c;e++)for(let t=m;t<=p;t++)for(let i=u;i<=d;i++){r=o(n[a.computeOffsetIndex([e,t,i])],r)}return r}const U=function(e,t,a){if("range"===a.strategy)return{ptLower:Number(a.ptLower),ptUpper:Number(a.ptUpper),ctLower:Number(a.ctLower),ctUpper:Number(a.ctUpper)};const{weight:n}=a,o=e.map((e=>E.annotation.state.getAnnotation(e)));return{ctLower:-1/0,ctUpper:1/0,ptLower:n*V(t[0],o),ptUpper:1/0}};const k=function(e,t=1){const a=E.utilities.segmentation.createMergedLabelmapForIndex(e,t,"mergedLabelmap"),{imageData:n,spacing:o}=a;return.001*n.getPointData().getScalars().getData().reduce(((e,t)=>t>0?e+1:e),0)*o[0]*o[1]*o[2]};var F=a(67540),A=a(91202);const{datasetToBlob:G}=F.default.data,q=T.classes.MetadataProvider;const j=function(e){const t=A.adaptersRT.Cornerstone3D.RTSS.generateRTSSFromAnnotations(e,q,T.DicomMetadataStore),a=G(t);var n=URL.createObjectURL(a);window.location.assign(n)},W=T.classes.MetadataProvider,_=["RectangleROIStartEndThreshold","RectangleROIThreshold"],$=E.Enums.SegmentationRepresentations.Labelmap,H=(0,w.getWebWorkerManager)(),B={maxWorkerInstances:1,autoTerminateOnIdle:{enabled:!0,idleTimeThreshold:3e3}},z=()=>new Worker(new URL(a.p+a.u(607),a.b),{name:"suv-peak-worker"}),J=({servicesManager:e,commandsManager:t,extensionManager:a})=>{const{viewportGridService:n,uiNotificationService:o,displaySetService:i,hangingProtocolService:r,toolGroupService:s,cornerstoneViewportService:l,segmentationService:c}=e.services,m=a.getModuleEntry("@ohif/extension-cornerstone.utilityModule.common"),{getEnabledElement:p}=m.exports;function u(){const{activeViewportId:e}=n.getState(),{element:t}=p(e)||{};return w.getEnabledElement(t)}function d(){const{viewportMatchDetails:e}=r.getMatchDetails(),t=[];return e.forEach((e=>{const{viewportOptions:a}=e,{toolGroupId:n}=a;-1===t.indexOf(n)&&t.push(n)})),t}function g(e){return e.reduce(((e,t)=>{const a=E.annotation.selection.getAnnotationsSelectedByToolName(t);return e.concat(a)}),[])}const y={getMatchingPTDisplaySet:({viewportMatchDetails:e})=>{let t=null;for(const[a,n]of e){const{displaySetsInfo:e}=n,a=e.map((({displaySetInstanceUID:e})=>i.getDisplaySetByUID(e)));if(a&&0!==a.length&&(t=a.find((e=>"PT"===e.Modality)),t))break}return t},getPTMetadata:({ptDisplaySet:e})=>{const t=a.getDataSources()[0].getImageIdsForDisplaySet(e)[0],n=W.get("instance",t);if("PT"!==n.Modality)return;return{SeriesTime:n.SeriesTime,Modality:n.Modality,PatientSex:n.PatientSex,PatientWeight:n.PatientWeight,RadiopharmaceuticalInformationSequence:{RadionuclideTotalDose:n.RadiopharmaceuticalInformationSequence[0].RadionuclideTotalDose,RadionuclideHalfLife:n.RadiopharmaceuticalInformationSequence[0].RadionuclideHalfLife,RadiopharmaceuticalStartTime:n.RadiopharmaceuticalInformationSequence[0].RadiopharmaceuticalStartTime,RadiopharmaceuticalStartDateTime:n.RadiopharmaceuticalInformationSequence[0].RadiopharmaceuticalStartDateTime}}},createNewLabelmapFromPT:async({label:e})=>{const{viewportMatchDetails:t}=r.getMatchDetails(),a=y.getMatchingPTDisplaySet({viewportMatchDetails:t});if(!a)return void o.error("No matching PT display set found");const n=c.getSegmentations(),i=await c.createSegmentationForDisplaySet(a.displaySetInstanceUID,{label:`Segmentation ${n.length+1}`}),s=d(),l=$;for(const e of s){const t=!0;await c.addSegmentationRepresentationToToolGroup(e,i,t,l),c.setActiveSegmentationForToolGroup(i,e)}return c.addSegment(i,{segmentIndex:1,properties:{label:"Segment 1"}}),i},setSegmentationActiveForToolGroups:({segmentationId:e})=>{d().forEach((t=>{c.setActiveSegmentationForToolGroup(e,t)}))},thresholdSegmentationByRectangleROITool:({segmentationId:e,config:t,segmentIndex:a})=>{const i=E.segmentation.state.getSegmentation(e),{representationData:s}=i,{displaySetMatchDetails:l}=r.getMatchDetails(),c=`cornerstoneStreamingImageVolume:${l.get("ctDisplaySet").displaySetInstanceUID}`,{volumeId:m}=s[$],{referencedVolumeId:p}=w.cache.getVolume(m),u=g(_);if(0===u.length)return void o.show({title:"Commands Module",message:"No ROIThreshold Tool is Selected",type:"error"});const d=w.cache.getVolume(e);let y=w.cache.getVolume(p);const h=w.cache.getVolume(c);if(!y)throw new Error("No Reference volume found");if(!d)throw new Error("No Reference labelmap found");const S=E.annotation.state.getAnnotation(u[0]),{metadata:{enabledElement:{viewport:v}}}=S;if(!v.hasVolumeId(p)){n.getDisplaySetsUIDsForViewport(v.id).forEach((e=>{const t=w.cache.getVolumes().find((t=>t.volumeId.includes(e)));w.utilities.isEqual(t.dimensions,d.dimensions)&&w.utilities.isEqual(t.spacing,d.spacing)&&(y=t)}))}const{ptLower:f,ptUpper:T,ctLower:I,ctUpper:b}=U(u,[y,h],t);return E.utilities.segmentation.rectangleROIThresholdVolumeByRange(u,d,[{volume:y,lower:f,upper:T},{volume:h,lower:I,upper:b}],{overwrite:!0,segmentIndex:a})},calculateSuvPeak:async({labelmap:e,segmentIndex:t})=>{H.registerWorker("suv-peak-worker",z,B);const{referencedVolumeId:a}=e,n=w.cache.getVolume(a),o=g(_).map((e=>E.annotation.state.getAnnotation(e))),i={dimensions:e.dimensions,origin:e.origin,direction:e.direction,spacing:e.spacing,scalarData:e.scalarData,metadata:e.metadata},r={dimensions:n.dimensions,origin:n.origin,direction:n.direction,spacing:n.spacing,scalarData:n.scalarData,metadata:n.metadata},s=o.map((e=>({...e,metadata:{...e.metadata,enabledElement:{...e.metadata.enabledElement,viewport:null,renderingEngine:null,element:null}}}))),l=await H.executeTask("suv-peak-worker","calculateSuvPeak",{labelmapProps:i,referenceVolumeProps:r,annotations:s,segmentIndex:t});return{suvPeak:l.mean,suvMax:l.max,suvMaxIJK:l.maxIJK,suvMaxLPS:l.maxLPS}},getLesionStats:({labelmap:e,segmentIndex:t=1})=>{const{scalarData:a,spacing:n}=e,o=w.cache.getVolume(e.referencedVolumeId).getScalarData();let i=-1/0,r=1/0;const s=[];let l=0;for(let e=0;e<a.length;e++)if(a[e]===t){const t=o[e];s.push(t),t>i&&(i=t),t<r&&(r=t),l++}const c=s.reduce(((e,t)=>e+t),0)/l;return{minValue:r,maxValue:i,meanValue:c,stdValue:Math.sqrt(s.map((e=>(e-c)**2)).reduce(((e,t)=>e+t),0)/l),volume:l*n[0]*n[1]*n[2]*.001}},calculateLesionGlycolysis:({lesionStats:e})=>{const{meanValue:t,volume:a}=e;return{lesionGlyoclysisStats:a*t}},calculateTMTV:({segmentations:e})=>{const t=e.map((e=>c.getLabelmapVolume(e.id)));if(t.length)return k(t)},exportTMTVReportCSV:({segmentations:e,tmtv:a,config:n,options:o})=>{const i=t.runCommand("getSegmentationCSVReport",{segmentations:e}),r=[{key:"Total Lesion Glycolysis",value:{tlg:y.getTotalLesionGlycolysis({segmentations:e}).toFixed(4)}},{key:"Threshold Configuration",value:{...n}}];void 0!==a&&r.unshift({key:"Total Metabolic Tumor Volume",value:{tmtv:a}}),function(e,t,a={}){const n=e[Object.keys(e)[0]],o=Object.keys(n),i=[o.join(",")];Object.values(e).forEach((e=>{const t=[];o.forEach((a=>{t.push(Array.isArray(e[a])?e[a].join(" "):e[a])})),i.push(t.join(","))})),i.push(""),i.push(""),i.push(""),i.push(`Patient ID,${n.PatientID}`),i.push(`Study Date,${n.StudyDate}`),i.push(""),t.forEach((({key:e,value:t})=>{const a=[];a.push(`${e}`),Object.keys(t).forEach((e=>{a.push(`${e}`),a.push(`${t[e]}`)})),i.push(a.join(","))}));const r=new Blob([i.join("\n")],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(r),l=document.createElement("a");l.href=s,l.download=a.filename??`${n.PatientID}_tmtv.csv`,l.click()}(i,r,o)},getTotalLesionGlycolysis:({segmentations:e})=>{const t=e.map((e=>c.getLabelmapVolume(e.id)));let a;try{a=E.utilities.segmentation.createMergedLabelmapForIndex(t)}catch(e){return void console.error("commandsModule::getTotalLesionGlycolysis",e)}const{referencedVolumeId:n,spacing:o}=t[0];n||console.error("commandsModule::getTotalLesionGlycolysis:No referencedVolumeId found");const i=w.cache.getVolume(n),r=a.getScalarData();r.length!==i.getScalarData().length&&console.error("commandsModule::getTotalLesionGlycolysis:Labelmap and ptVolume are not the same size");let s=0,l=0;for(let e=0;e<r.length;e++)0!==r[e]&&(s+=i.getScalarData()[e],l+=1);return s/l*l*o[0]*o[1]*o[2]*.001},setStartSliceForROIThresholdTool:()=>{const{viewport:e}=u(),{focalPoint:t,viewPlaneNormal:a}=e.getCamera(),n=g(_)[0],o=E.annotation.state.getAnnotation(n),{handles:i}=o.data,{points:r}=i,s=e.getCurrentImageIdIndex();o.data.startSlice=s;const l=r.map((e=>{const n=O.R3.create();O.R3.subtract(n,t,e);const o=O.R3.dot(n,a),i=O.R3.create();return O.R3.scaleAndAdd(i,e,a,o),i}));i.points=l,o.invalidated=!0,e.render()},setEndSliceForROIThresholdTool:()=>{const{viewport:e}=u(),t=g(_)[0],a=E.annotation.state.getAnnotation(t),n=e.getCurrentImageIdIndex();a.data.endSlice=n,a.invalidated=!0,e.render()},createTMTVRTReport:()=>{const e=E.annotation.state.getAnnotationManager(),a=[];Object.keys(e.annotations).forEach((t=>{const n=e.annotations[t],o=_.reduce(((e,t)=>[...e,...n[t]??[]]),[]);a.push(...o)})),t.runCommand("exportRTReportForAnnotations",{annotations:a})},getSegmentationCSVReport:({segmentations:e})=>{e&&e.length||(e=c.getSegmentations());const t={};for(const a of e){const{id:e,label:n,cachedStats:o}=a,i={id:e,label:n};if(!o){t[e]=i;continue}Object.keys(o).forEach((e=>{"object"!=typeof o[e]?i[e]=o[e]:Object.keys(o[e]).forEach((t=>{i[`${e}_${t}`]=o[e][t]}))}));const r=c.getLabelmapVolume(e);if(!r){t[e]=i;continue}const s=r.referencedVolumeId;i.referencedVolumeId=s;const l=c.getLabelmapVolume(s);if(!l){t[e]=i;continue}if(!l.imageIds||!l.imageIds.length){t[e]=i;continue}const m=l.imageIds[0],p=T.default.classes.MetadataProvider.get("instance",m);p?t[e]={...i,PatientID:p.PatientID??"000000",PatientName:p.PatientName.Alphabetic,StudyInstanceUID:p.StudyInstanceUID,SeriesInstanceUID:p.SeriesInstanceUID,StudyDate:p.StudyDate}:t[e]=i}return t},exportRTReportForAnnotations:({annotations:e})=>{j(e)},setFusionPTColormap:({toolGroupId:e,colormap:a})=>{const n=s.getToolGroup(e),{viewportMatchDetails:o}=r.getMatchDetails(),i=y.getMatchingPTDisplaySet({viewportMatchDetails:o});if(!i)return;const c=n.getViewportIds(),m=[];c.forEach((e=>{t.runCommand("setViewportColormap",{viewportId:e,displaySetInstanceUID:i.displaySetInstanceUID,colormap:{name:a}}),m.push(l.getCornerstoneViewport(e))})),m.forEach((e=>{e.render()}))}},h={setEndSliceForROIThresholdTool:{commandFn:y.setEndSliceForROIThresholdTool},setStartSliceForROIThresholdTool:{commandFn:y.setStartSliceForROIThresholdTool},getMatchingPTDisplaySet:{commandFn:y.getMatchingPTDisplaySet},getPTMetadata:{commandFn:y.getPTMetadata},createNewLabelmapFromPT:{commandFn:y.createNewLabelmapFromPT},setSegmentationActiveForToolGroups:{commandFn:y.setSegmentationActiveForToolGroups},thresholdSegmentationByRectangleROITool:{commandFn:y.thresholdSegmentationByRectangleROITool},getTotalLesionGlycolysis:{commandFn:y.getTotalLesionGlycolysis},calculateSuvPeak:{commandFn:y.calculateSuvPeak},getLesionStats:{commandFn:y.getLesionStats},calculateTMTV:{commandFn:y.calculateTMTV},exportTMTVReportCSV:{commandFn:y.exportTMTVReportCSV},createTMTVRTReport:{commandFn:y.createTMTVRTReport},getSegmentationCSVReport:{commandFn:y.getSegmentationCSVReport},exportRTReportForAnnotations:{commandFn:y.exportRTReportForAnnotations},setFusionPTColormap:{commandFn:y.setFusionPTColormap}};return{actions:y,definitions:h,defaultContext:"TMTV:CORNERSTONE"}},K="roi_stat",X=[{value:K,label:"Max",placeHolder:"Max"},{value:"range",label:"Range",placeHolder:"Range"}];const Y=function({config:e,dispatch:t,runCommand:a}){const{t:n}=(0,I.$G)("ROIThresholdConfiguration");return h.createElement("div",{className:"bg-primary-dark flex flex-col space-y-4"},h.createElement("div",{className:"flex items-end space-x-2"},h.createElement("div",{className:"flex w-1/2 flex-col"},h.createElement(f.Ph,{label:n("Strategy"),closeMenuOnSelect:!0,className:"border-primary-main mr-2 bg-black text-white ",options:X,placeholder:X.find((t=>t.value===e.strategy)).placeHolder,value:e.strategy,onChange:({value:e})=>{t({type:"setStrategy",payload:{strategy:e}})}})),h.createElement("div",{className:"w-1/2"},h.createElement(f.HO,null,h.createElement(f.mN,{size:"initial",className:"px-2 py-2 text-base text-white",color:"primaryLight",variant:"outlined",onClick:()=>a("setStartSliceForROIThresholdTool")},n("Start")),h.createElement(f.mN,{size:"initial",color:"primaryLight",variant:"outlined",className:"px-2 py-2 text-base text-white",onClick:()=>a("setEndSliceForROIThresholdTool")},n("End"))))),e.strategy===K&&h.createElement(f.II,{label:n("Percentage of Max SUV"),labelClassName:"text-[13px] font-inter text-white",className:"border-primary-main bg-black",type:"text",containerClassName:"mr-2",value:e.weight,onChange:e=>{t({type:"setWeight",payload:{weight:e.target.value}})}}),e.strategy!==K&&h.createElement("div",{className:"mr-2 text-sm"},h.createElement("table",null,h.createElement("tbody",null,h.createElement("tr",{className:"mt-2"},h.createElement("td",{className:"pr-4",colSpan:"3"},h.createElement(f.__,{className:"font-inter text-[13px] text-white",text:"Lower & Upper Ranges"}))),h.createElement("tr",{className:"mt-2"},h.createElement("td",{className:"pr-4 pt-2 text-center"},h.createElement(f.__,{className:"text-white",text:"CT"})),h.createElement("td",null,h.createElement("div",{className:"flex justify-between"},h.createElement(f.II,{label:n(""),labelClassName:"text-white",className:"border-primary-main mt-2 bg-black",type:"text",containerClassName:"mr-2",value:e.ctLower,onChange:e=>{t({type:"setThreshold",payload:{ctLower:e.target.value}})}}),h.createElement(f.II,{label:n(""),labelClassName:"text-white",className:"border-primary-main mt-2 bg-black",type:"text",containerClassName:"mr-2",value:e.ctUpper,onChange:e=>{t({type:"setThreshold",payload:{ctUpper:e.target.value}})}})))),h.createElement("tr",null,h.createElement("td",{className:"pr-4 pt-2 text-center"},h.createElement(f.__,{className:"text-white",text:"PT"})),h.createElement("td",null,h.createElement("div",{className:"flex justify-between"},h.createElement(f.II,{label:n(""),labelClassName:"text-white",className:"border-primary-main mt-2 bg-black",type:"text",containerClassName:"mr-2",value:e.ptLower,onChange:e=>{t({type:"setThreshold",payload:{ptLower:e.target.value}})}}),h.createElement(f.II,{label:n(""),labelClassName:"text-white",className:"border-primary-main mt-2 bg-black",type:"text",containerClassName:"mr-2",value:e.ptUpper,onChange:e=>{t({type:"setThreshold",payload:{ptUpper:e.target.value}})}}))))))))},Z=K;function Q(e,t){const{payload:a}=t,{strategy:n,ctLower:o,ctUpper:i,ptLower:r,ptUpper:s,weight:l}=a;switch(t.type){case"setStrategy":return{...e,strategy:n};case"setThreshold":return{...e,ctLower:o||e.ctLower,ctUpper:i||e.ctUpper,ptLower:r||e.ptLower,ptUpper:s||e.ptUpper};case"setWeight":return{...e,weight:l};default:return e}}const ee=function({servicesManager:e,commandsManager:t}){const{segmentationService:a}=e.services,[n,o]=(0,h.useState)(null),i=(0,h.useCallback)(((e,a={})=>t.runCommand(e,a)),[t]),[r,s]=(0,h.useReducer)(Q,{strategy:Z,ctLower:-1024,ctUpper:1024,ptLower:2.5,ptUpper:100,weight:.41}),l=(0,h.useCallback)((()=>{const e=n,t=E.segmentation.segmentIndex.getActiveSegmentIndex(e);i("thresholdSegmentationByRectangleROITool",{segmentationId:e,config:r,segmentIndex:t})}),[n,r]);return(0,h.useEffect)((()=>{const e=a.getSegmentations();if(!e.length)return;const t=e.find((e=>e.isActive));o(t.id)}),[]),(0,h.useEffect)((()=>{const e=a.EVENTS.SEGMENTATION_ADDED,t=a.EVENTS.SEGMENTATION_UPDATED,n=[];return[e,t].forEach((e=>{const{unsubscribe:t}=a.subscribe(e,(()=>{const e=a.getSegmentations();if(!e.length)return;const t=e.find((e=>e.isActive));o(t.id)}));n.push(t)})),()=>{n.forEach((e=>{e()}))}}),[]),h.createElement("div",{className:"invisible-scrollbar mb-2 flex flex-col overflow-y-auto overflow-x-hidden"},h.createElement(Y,{config:r,dispatch:s,runCommand:i}),null!==n&&h.createElement(f.zx,{className:"mt-2 !h-[26px] !w-[75px]",onClick:l},"Run"))};const te={id:n,preRegistration({servicesManager:e,commandsManager:t,extensionManager:a,configuration:n={}}){!function({servicesManager:e}){const{measurementService:t,displaySetService:a,cornerstoneViewportService:n}=e.services;(0,E.addTool)(E.RectangleROIStartEndThresholdTool);const{RectangleROIStartEndThreshold:o}=L(t,a,n),i=t.getSource("Cornerstone3DTools","0.1");t.addMapping(i,"RectangleROIStartEndThreshold",o.matchingCriteria,o.toAnnotation,o.toMeasurement)}({servicesManager:e,commandsManager:t,extensionManager:a,configuration:n})},getToolbarModule:function({commandsManager:e,servicesManager:t}){return[{name:"tmtv.RectangleROIThresholdOptions",defaultComponent:()=>ee({commandsManager:e,servicesManager:t})}]},getPanelModule:M,getHangingProtocolModule:y,getCommandsModule:({servicesManager:e,commandsManager:t,extensionManager:a})=>J({servicesManager:e,commandsManager:t,extensionManager:a})},ae=te}}]);
//# sourceMappingURL=372.bundle.a6af69c98d473dc03e11.js.map