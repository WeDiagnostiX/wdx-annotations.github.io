"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[376],{57376:(e,o,a)=>{a.r(o),a.d(o,{default:()=>C});var t=a(84793);const i=JSON.parse('{"u2":"@ohif/mode-segmentation"}').u2,{createButton:l}=t.ToolbarService,r=[{commandName:"setSourceViewportForReferenceLinesTool",context:"CORNERSTONE"}],n={commandName:"setToolActiveToolbar",commandOptions:{toolGroupIds:["default","mpr","SRToolGroup","volume3d"]}},s=[{id:"Zoom",uiType:"ohif.radioGroup",props:{icon:"tool-zoom",label:"Zoom",commands:n,evaluate:"evaluate.cornerstoneTool"}},{id:"WindowLevel",uiType:"ohif.radioGroup",props:{icon:"tool-window-level",label:"Window Level",commands:n,evaluate:"evaluate.cornerstoneTool"}},{id:"Pan",uiType:"ohif.radioGroup",props:{icon:"tool-move",label:"Pan",commands:n,evaluate:"evaluate.cornerstoneTool"}},{id:"TrackballRotate",uiType:"ohif.radioGroup",props:{type:"tool",icon:"tool-3d-rotate",label:"3D Rotate",commands:n,evaluate:{name:"evaluate.cornerstoneTool",disabledText:"Select a 3D viewport to enable this tool"}}},{id:"Capture",uiType:"ohif.radioGroup",props:{icon:"tool-capture",label:"Capture",commands:"showDownloadViewportModal",evaluate:"evaluate.action"}},{id:"Layout",uiType:"ohif.layoutSelector",props:{rows:3,columns:4,evaluate:"evaluate.action",commands:"setViewportGridLayout"}},{id:"Crosshairs",uiType:"ohif.radioGroup",props:{icon:"tool-crosshair",label:"Crosshairs",commands:{commandName:"setToolActiveToolbar",commandOptions:{toolGroupIds:["mpr"]}},evaluate:{name:"evaluate.cornerstoneTool",disabledText:"Select an MPR viewport to enable this tool"}}},{id:"MoreTools",uiType:"ohif.splitButton",props:{groupId:"MoreTools",evaluate:"evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList",primary:l({id:"Reset",icon:"tool-reset",tooltip:"Reset View",label:"Reset",commands:"resetViewport",evaluate:"evaluate.action"}),secondary:{icon:"chevron-down",label:"",tooltip:"More Tools"},items:[l({id:"Reset",icon:"tool-reset",label:"Reset View",tooltip:"Reset View",commands:"resetViewport",evaluate:"evaluate.action"}),l({id:"rotate-right",icon:"tool-rotate-right",label:"Rotate Right",tooltip:"Rotate +90",commands:"rotateViewportCW",evaluate:"evaluate.action"}),l({id:"flipHorizontal",icon:"tool-flip-horizontal",label:"Flip Horizontal",tooltip:"Flip Horizontally",commands:"flipViewportHorizontal",evaluate:["evaluate.viewportProperties.toggle","evaluate.not3D"]}),l({id:"ReferenceLines",icon:"tool-referenceLines",label:"Reference Lines",tooltip:"Show Reference Lines",commands:"toggleEnabledDisabledToolbar",listeners:{[t.pK.EVENTS.ACTIVE_VIEWPORT_ID_CHANGED]:r,[t.pK.EVENTS.VIEWPORTS_READY]:r},evaluate:"evaluate.cornerstoneTool.toggle"}),l({id:"ImageOverlayViewer",icon:"toggle-dicom-overlay",label:"Image Overlay",tooltip:"Toggle Image Overlay",commands:"toggleEnabledDisabledToolbar",evaluate:"evaluate.cornerstoneTool.toggle"}),l({id:"StackScroll",icon:"tool-stack-scroll",label:"Stack Scroll",tooltip:"Stack Scroll",commands:n,evaluate:"evaluate.cornerstoneTool"}),l({id:"invert",icon:"tool-invert",label:"Invert",tooltip:"Invert Colors",commands:"invertViewport",evaluate:"evaluate.viewportProperties.toggle"}),l({id:"Probe",icon:"tool-probe",label:"Probe",tooltip:"Probe",commands:n,evaluate:"evaluate.cornerstoneTool"}),l({id:"Cine",icon:"tool-cine",label:"Cine",tooltip:"Cine",commands:"toggleCine",evaluate:["evaluate.cine","evaluate.not3D"]}),l({id:"Angle",icon:"tool-angle",label:"Angle",tooltip:"Angle",commands:n,evaluate:"evaluate.cornerstoneTool"}),l({id:"Magnify",icon:"tool-magnify",label:"Zoom-in",tooltip:"Zoom-in",commands:n,evaluate:"evaluate.cornerstoneTool"}),l({id:"RectangleROI",icon:"tool-rectangle",label:"Rectangle",tooltip:"Rectangle",commands:n,evaluate:"evaluate.cornerstoneTool"}),l({id:"CalibrationLine",icon:"tool-calibration",label:"Calibration",tooltip:"Calibration Line",commands:n,evaluate:"evaluate.cornerstoneTool"}),l({id:"TagBrowser",icon:"dicom-tag-browser",label:"Dicom Tag Browser",tooltip:"Dicom Tag Browser",commands:"openDICOMTagViewer"}),l({id:"AdvancedMagnify",icon:"icon-tool-loupe",label:"Magnify Probe",tooltip:"Magnify Probe",commands:"toggleActiveDisabledToolbar",evaluate:"evaluate.cornerstoneTool.toggle.ifStrictlyDisabled"}),l({id:"UltrasoundDirectionalTool",icon:"icon-tool-ultrasound-bidirectional",label:"Ultrasound Directional",tooltip:"Ultrasound Directional",commands:n,evaluate:["evaluate.cornerstoneTool","evaluate.isUS"]}),l({id:"WindowLevelRegion",icon:"icon-tool-window-region",label:"Window Level Region",tooltip:"Window Level Region",commands:n,evaluate:"evaluate.cornerstoneTool"})]}}],c=[{id:"BrushTools",uiType:"ohif.buttonGroup",props:{groupId:"BrushTools",items:[{id:"Brush",icon:"icon-tool-brush",label:"Brush",evaluate:{name:"evaluate.cornerstone.segmentation",toolNames:["CircularBrush","SphereBrush"],disabledText:"Create new segmentation to enable this tool."},options:[{name:"Radius (mm)",id:"brush-radius",type:"range",min:.5,max:99.5,step:.5,value:25,commands:{commandName:"setBrushSize",commandOptions:{toolNames:["CircularBrush","SphereBrush"]}}},{name:"Shape",type:"radio",id:"brush-mode",value:"CircularBrush",values:[{value:"CircularBrush",label:"Circle"},{value:"SphereBrush",label:"Sphere"}],commands:"setToolActiveToolbar"}]},{id:"Eraser",icon:"icon-tool-eraser",label:"Eraser",evaluate:{name:"evaluate.cornerstone.segmentation",toolNames:["CircularEraser","SphereEraser"]},options:[{name:"Radius (mm)",id:"eraser-radius",type:"range",min:.5,max:99.5,step:.5,value:25,commands:{commandName:"setBrushSize",commandOptions:{toolNames:["CircularEraser","SphereEraser"]}}},{name:"Shape",type:"radio",id:"eraser-mode",value:"CircularEraser",values:[{value:"CircularEraser",label:"Circle"},{value:"SphereEraser",label:"Sphere"}],commands:"setToolActiveToolbar"}]},{id:"Threshold",icon:"icon-tool-threshold",label:"Threshold Tool",evaluate:{name:"evaluate.cornerstone.segmentation",toolNames:["ThresholdCircularBrush","ThresholdSphereBrush"]},options:[{name:"Radius (mm)",id:"threshold-radius",type:"range",min:.5,max:99.5,step:.5,value:25,commands:{commandName:"setBrushSize",commandOptions:{toolNames:["ThresholdCircularBrush","ThresholdSphereBrush","ThresholdCircularBrushDynamic"]}}},{name:"Threshold",type:"radio",id:"dynamic-mode",value:"ThresholdRange",values:[{value:"ThresholdDynamic",label:"Dynamic"},{value:"ThresholdRange",label:"Range"}],commands:({value:e,commandsManager:o,options:a})=>{if("ThresholdDynamic"===e)return void o.run("setToolActive",{toolName:"ThresholdCircularBrushDynamic"});const t=a.find((e=>"threshold-shape"===e.id));o.run("setToolActiveToolbar",{toolName:t.value})}},{name:"Shape",type:"radio",id:"threshold-shape",value:"ThresholdCircularBrush",values:[{value:"ThresholdCircularBrush",label:"Circle"},{value:"ThresholdSphereBrush",label:"Sphere"}],condition:({options:e})=>"ThresholdRange"===e.find((e=>"dynamic-mode"===e.id)).value,commands:"setToolActiveToolbar"},{name:"ThresholdRange",type:"double-range",id:"threshold-range",min:-1e3,max:1e3,step:1,value:[100,600],condition:({options:e})=>"ThresholdRange"===e.find((e=>"dynamic-mode"===e.id)).value,commands:{commandName:"setThresholdRange",commandOptions:{toolNames:["ThresholdCircularBrush","ThresholdSphereBrush"]}}}]}]}},{id:"Shapes",uiType:"ohif.radioGroup",props:{label:"Shapes",evaluate:{name:"evaluate.cornerstone.segmentation",toolNames:["CircleScissor","SphereScissor","RectangleScissor"]},icon:"icon-tool-shape",options:[{name:"Shape",type:"radio",value:"CircleScissor",id:"shape-mode",values:[{value:"CircleScissor",label:"Circle"},{value:"SphereScissor",label:"Sphere"},{value:"RectangleScissor",label:"Rectangle"}],commands:"setToolActiveToolbar"}]}}],d={"viewport-0":"rgb(200, 0, 0)","viewport-1":"rgb(200, 200, 0)","viewport-2":"rgb(0, 200, 0)"},u={axial:"rgb(200, 0, 0)",sagittal:"rgb(200, 200, 0)",coronal:"rgb(0, 200, 0)"};function m(e){const{toolNames:o,Enums:a}=e.exports;return{active:[{toolName:o.WindowLevel,bindings:[{mouseButton:a.MouseBindings.Primary}]},{toolName:o.Pan,bindings:[{mouseButton:a.MouseBindings.Auxiliary}]},{toolName:o.Zoom,bindings:[{mouseButton:a.MouseBindings.Secondary}]},{toolName:o.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:"CircularBrush",parentTool:"Brush",configuration:{activeStrategy:"FILL_INSIDE_CIRCLE"}},{toolName:"CircularEraser",parentTool:"Brush",configuration:{activeStrategy:"ERASE_INSIDE_CIRCLE"}},{toolName:"SphereBrush",parentTool:"Brush",configuration:{activeStrategy:"FILL_INSIDE_SPHERE"}},{toolName:"SphereEraser",parentTool:"Brush",configuration:{activeStrategy:"ERASE_INSIDE_SPHERE"}},{toolName:"ThresholdCircularBrush",parentTool:"Brush",configuration:{activeStrategy:"THRESHOLD_INSIDE_CIRCLE"}},{toolName:"ThresholdSphereBrush",parentTool:"Brush",configuration:{activeStrategy:"THRESHOLD_INSIDE_SPHERE"}},{toolName:"ThresholdCircularBrushDynamic",parentTool:"Brush",configuration:{activeStrategy:"THRESHOLD_INSIDE_CIRCLE",strategySpecificConfiguration:{THRESHOLD:{isDynamic:!0,dynamicRadius:3}}}},{toolName:o.CircleScissors},{toolName:o.RectangleScissors},{toolName:o.SphereScissors},{toolName:o.StackScroll},{toolName:o.Magnify},{toolName:o.SegmentationDisplay},{toolName:o.WindowLevelRegion},{toolName:o.UltrasoundDirectional}],disabled:[{toolName:o.ReferenceLines},{toolName:o.AdvancedMagnify}]}}const p=function(e,o,a){!function(e,o,a,t){const i=m(e.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"));o.createToolGroupAndAddTools(t,i)}(e,o,0,"default"),function(e,o){const a=e.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),t=e._servicesManager,{cornerstoneViewportService:i}=t.services,l=m(a);l.disabled.push({toolName:a.exports.toolNames.Crosshairs,configuration:{viewportIndicators:!0,viewportIndicatorsConfig:{circleRadius:5,xOffset:.95,yOffset:.05},disableOnPassive:!0,autoPan:{enabled:!1,panSize:10},getReferenceLineColor:e=>{const o=i.getViewportInfo(e),a=o?.viewportOptions;return a?d[a.id]||u[a.orientation]||"#0c0":(console.warn("missing viewport?",e),"#0c0")}}},{toolName:a.exports.toolNames.ReferenceLines}),o.createToolGroupAndAddTools("mpr",l)}(e,o),function(e,o){const a=e.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:t,Enums:i}=a.exports,l={active:[{toolName:t.TrackballRotateTool,bindings:[{mouseButton:i.MouseBindings.Primary}]},{toolName:t.Zoom,bindings:[{mouseButton:i.MouseBindings.Secondary}]},{toolName:t.Pan,bindings:[{mouseButton:i.MouseBindings.Auxiliary}]}]};o.createToolGroupAndAddTools("volume3d",l)}(e,o)},h="@ohif/extension-default.layoutTemplateModule.viewerLayout",v="@ohif/extension-default.sopClassHandlerModule.stack",g="@ohif/extension-default.panelModule.seriesList",T="@ohif/extension-cornerstone.viewportModule.cornerstone",S="@ohif/extension-cornerstone-dicom-seg.panelModule.panelSegmentationWithTools",b="@ohif/extension-cornerstone-dicom-seg.sopClassHandlerModule.dicom-seg",y="@ohif/extension-cornerstone-dicom-seg.viewportModule.dicom-seg",f={"@ohif/extension-default":"^3.0.0","@ohif/extension-cornerstone":"^3.0.0","@ohif/extension-cornerstone-dicom-seg":"^3.0.0"};const C={id:i,modeFactory:function({modeConfiguration:e}){return{id:i,routeName:"segmentation",displayName:"Segmentation",onModeEnter:({servicesManager:e,extensionManager:o,commandsManager:a})=>{const{measurementService:t,toolbarService:i,toolGroupService:l}=e.services;t.clearMeasurements(),p(o,l,a),i.addButtons(s),i.addButtons(c),i.createButtonSection("primary",["WindowLevel","Pan","Zoom","TrackballRotate","Capture","Layout","Crosshairs","MoreTools"]),i.createButtonSection("segmentationToolbox",["BrushTools","Shapes"])},onModeExit:({servicesManager:e})=>{const{toolGroupService:o,syncGroupService:a,toolbarService:t,segmentationService:i,cornerstoneViewportService:l,uiDialogService:r,uiModalService:n}=e.services;r.dismissAll(),n.hide(),o.destroy(),a.destroy(),i.destroy(),l.destroy()},validationTags:{study:[],series:[]},isValidMode:({modalities:e})=>{const o=e.split("\\");return{valid:1!==o.length||!["SM","US","MG","OT","DOC","CR"].includes(o[0]),description:"The mode does not support studies that ONLY include the following modalities: SM, US, MG, OT, DOC, CR"}},routes:[{path:"template",layoutTemplate:({location:e,servicesManager:o})=>({id:h,props:{leftPanels:[g],rightPanels:[S],viewports:[{namespace:T,displaySetsToDisplay:[v]},{namespace:y,displaySetsToDisplay:[b]}]}})}],extensions:f,sopClassHandlers:[v,b],hotkeys:[...t.dD.defaults.hotkeyBindings]}},extensionDependencies:f}}}]);
//# sourceMappingURL=376.bundle.d9257ae5d58fbba2b2ca.js.map