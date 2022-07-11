/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='https://raw.githubusercontent.com/DeathBarmaglot/water/master/images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'MOUNT2',
                type: 'image',
                rect: ['0px', '-17px','300px','198px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MOUNT2.jpg",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['135px', '39px','173px','104px','auto', 'auto'],
                clip: ['rect(-36.800048828125px 173px 124px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'a1',
                type: 'image',
                rect: ['-921px', '-114px','2140px','270px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-656px', '48px','1610px','230px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't1',
                type: 'image',
                rect: ['-957px', '33px','2220px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-932px', '-1px','2170px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'bottle',
                type: 'image',
                rect: ['238px', '12px','49px','159px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bottle.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'b22',
                type: 'image',
                rect: ['-1160px', '16px','2560px','230px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b22.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'b32',
                type: 'image',
                rect: ['-1026px', '24px','2270px','270px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b32.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'b11',
                type: 'image',
                rect: ['-624px', '-59px','1470px','230px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b11.svg",'0px','0px'],
                transform: [[],[],[],['0.13','0.13']]
            },
            {
                id: 'b14',
                type: 'image',
                rect: ['-517px', '-39px','1230px','270px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b1.svg",'0px','0px'],
                transform: [[],[],[],['0.13','0.13']]
            },
            {
                id: 'c22',
                type: 'image',
                rect: ['-1029px', '-320px','2320px','880px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"c2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'c12',
                type: 'image',
                rect: ['-837px', '-375px','1890px','980px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"c1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['3px', '59px','244px','143px','auto', 'auto'],
                text: "Виробництво <br>та розлив",
                align: "center",
                text-transform: "capitalize",
                font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1.00)", "900", "none", "normal"],
                transform: [[],[],[],['0.8']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b2}": [
                ["style", "left", '-1255px'],
                ["style", "top", '-42px']
            ],
            "${_c12}": [
                ["style", "top", '-375px'],
                ["style", "opacity", '0'],
                ["style", "left", '-837px']
            ],
            "${_b3}": [
                ["style", "left", '-1124px'],
                ["style", "top", '-60px']
            ],
            "${_b1}": [
                ["style", "left", '-1412px'],
                ["style", "top", '-60px']
            ],
            "${_c1}": [
                ["style", "left", '-455px'],
                ["style", "top", '-362px']
            ],
            "${_b32}": [
                ["style", "top", '24px'],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-1026px']
            ],
            "${_a2}": [
                ["style", "top", '48px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-656px']
            ],
            "${_logo}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '63px'],
                ["style", "width", '173px'],
                ["style", "top", '38px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '104px'],
                ["style", "background-position", [0,106.80004882813], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [-36.800048828125,173,124,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '3px'],
                ["style", "font-size", '30px'],
                ["style", "top", '59px'],
                ["style", "text-align", 'left'],
                ["transform", "scaleX", '0.8'],
                ["style", "width", '244px'],
                ["style", "opacity", '0']
            ],
            "${_bottle}": [
                ["style", "top", '12px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "height", '159px'],
                ["style", "opacity", '0'],
                ["style", "left", '238px'],
                ["style", "width", '49px']
            ],
            "${_MOUNT2}": [
                ["style", "top", '-17px'],
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '198px']
            ],
            "${_a1}": [
                ["style", "top", '-114px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-921px']
            ],
            "${_t2}": [
                ["style", "top", '-1px'],
                ["style", "opacity", '0'],
                ["style", "left", '-932px']
            ],
            "${_t1}": [
                ["style", "top", '33px'],
                ["style", "opacity", '0'],
                ["style", "left", '-957px']
            ],
            "${_b22}": [
                ["style", "top", '16px'],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-1160px']
            ],
            "${_c22}": [
                ["style", "top", '-320px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1029px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(23,61,97,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_b14}": [
                ["style", "top", '-39px'],
                ["transform", "scaleY", '0.13'],
                ["transform", "scaleX", '0.13'],
                ["style", "opacity", '0'],
                ["style", "left", '-517px']
            ],
            "${_b11}": [
                ["style", "top", '-59px'],
                ["transform", "scaleY", '0.13'],
                ["transform", "scaleX", '0.13'],
                ["style", "opacity", '0'],
                ["style", "left", '-624px']
            ],
            "${_c2}": [
                ["style", "left", '-649px'],
                ["style", "top", '-317px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20026,
            autoPlay: true,
            timeline: [
                { id: "eid44", tween: [ "style", "${_b3}", "left", '-1124px', { fromValue: '-1124px'}], position: 1450, duration: 0, easing: "easeInQuad" },
                { id: "eid85", tween: [ "style", "${_c12}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 500, easing: "easeInQuad" },
                { id: "eid87", tween: [ "style", "${_c12}", "opacity", '0', { fromValue: '1'}], position: 12513, duration: 617, easing: "easeInQuad" },
                { id: "eid51", tween: [ "style", "${_b11}", "opacity", '1', { fromValue: '0'}], position: 2958, duration: 617, easing: "easeInQuad" },
                { id: "eid57", tween: [ "style", "${_b11}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 237, easing: "easeInQuad" },
                { id: "eid36", tween: [ "style", "${_t1}", "opacity", '1', { fromValue: '0'}], position: 16412, duration: 617, easing: "easeInQuad" },
                { id: "eid98", tween: [ "style", "${_t1}", "opacity", '0', { fromValue: '1'}], position: 19526, duration: 500, easing: "easeInQuad" },
                { id: "eid69", tween: [ "style", "${_c1}", "left", '395px', { fromValue: '-455px'}], position: 2775, duration: 385, easing: "easeInQuad" },
                { id: "eid23", tween: [ "transform", "${_a1}", "scaleY", '0.1', { fromValue: '0'}], position: 0, duration: 502, easing: "easeInQuad" },
                { id: "eid35", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 16232, duration: 617, easing: "easeInQuad" },
                { id: "eid100", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 19526, duration: 500, easing: "easeInQuad" },
                { id: "eid49", tween: [ "style", "${_b32}", "opacity", '1', { fromValue: '0'}], position: 4292, duration: 617, easing: "easeInQuad" },
                { id: "eid58", tween: [ "style", "${_b32}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 237, easing: "easeInQuad" },
                { id: "eid84", tween: [ "style", "${_c22}", "opacity", '1', { fromValue: '0'}], position: 13026, duration: 617, easing: "easeInQuad" },
                { id: "eid88", tween: [ "style", "${_c22}", "opacity", '0', { fromValue: '1'}], position: 15354, duration: 617, easing: "easeInQuad" },
                { id: "eid40", tween: [ "style", "${_b1}", "left", '-1412px', { fromValue: '-1412px'}], position: 1450, duration: 0, easing: "easeInQuad" },
                { id: "eid106", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 500, easing: "easeInQuad" },
                { id: "eid108", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 9750, duration: 500, easing: "easeInQuad" },
                { id: "eid45", tween: [ "style", "${_b3}", "top", '-60px', { fromValue: '-60px'}], position: 1450, duration: 0, easing: "easeInQuad" },
                { id: "eid32", tween: [ "style", "${_logo}", "top", '27px', { fromValue: '38px'}], position: 2599, duration: 617, easing: "easeInQuad" },
                { id: "eid92", tween: [ "style", "${_logo}", "top", '-1px', { fromValue: '-12px'}], position: 13000, duration: 458, easing: "easeInQuad" },
                { id: "eid114", tween: [ "style", "${_logo}", "top", '2px', { fromValue: '-1px'}], position: 15971, duration: 261, easing: "easeInQuad" },
                { id: "eid28", tween: [ "transform", "${_logo}", "scaleX", '0', { fromValue: '1'}], position: 2599, duration: 617, easing: "easeInQuad" },
                { id: "eid97", tween: [ "transform", "${_logo}", "scaleX", '0.6', { fromValue: '0'}], position: 13000, duration: 458, easing: "easeInQuad" },
                { id: "eid109", tween: [ "transform", "${_logo}", "scaleX", '0.9', { fromValue: '0.6'}], position: 15631, duration: 619, easing: "easeInQuad" },
                { id: "eid17", tween: [ "transform", "${_a2}", "scaleX", '0.1', { fromValue: '0'}], position: 66, duration: 502, easing: "easeInQuad" },
                { id: "eid4", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 716, easing: "easeInQuad" },
                { id: "eid54", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 2847, duration: 168, easing: "easeInQuad" },
                { id: "eid91", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 13302, duration: 248, easing: "easeInQuad" },
                { id: "eid99", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 19526, duration: 500, easing: "easeInQuad" },
                { id: "eid50", tween: [ "style", "${_b14}", "opacity", '1', { fromValue: '0'}], position: 3282, duration: 617, easing: "easeInQuad" },
                { id: "eid56", tween: [ "style", "${_b14}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 237, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_a1}", "opacity", '1', { fromValue: '0'}], position: 201, duration: 515, easing: "easeInQuad" },
                { id: "eid27", tween: [ "style", "${_a1}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 515, easing: "easeInQuad" },
                { id: "eid116", tween: [ "style", "${_logo}", "left", '143px', { fromValue: '63px'}], position: 12250, duration: 750, easing: "easeInQuad" },
                { id: "eid117", tween: [ "style", "${_logo}", "left", '63px', { fromValue: '143px'}], position: 15631, duration: 642, easing: "easeInQuad" },
                { id: "eid43", tween: [ "style", "${_b2}", "top", '-42px', { fromValue: '-42px'}], position: 1450, duration: 0, easing: "easeInQuad" },
                { id: "eid11", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 515, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 515, easing: "easeInQuad" },
                { id: "eid41", tween: [ "style", "${_b1}", "top", '-60px', { fromValue: '-60px'}], position: 1450, duration: 0, easing: "easeInQuad" },
                { id: "eid29", tween: [ "transform", "${_logo}", "scaleY", '0', { fromValue: '1'}], position: 2599, duration: 617, easing: "easeInQuad" },
                { id: "eid96", tween: [ "transform", "${_logo}", "scaleY", '0.6', { fromValue: '0'}], position: 13000, duration: 458, easing: "easeInQuad" },
                { id: "eid111", tween: [ "transform", "${_logo}", "scaleY", '0.9', { fromValue: '0.6'}], position: 15631, duration: 619, easing: "easeInQuad" },
                { id: "eid19", tween: [ "transform", "${_a2}", "scaleY", '0.1', { fromValue: '0'}], position: 66, duration: 502, easing: "easeInQuad" },
                { id: "eid38", tween: [ "style", "${_bottle}", "opacity", '1', { fromValue: '0'}], position: 3015, duration: 438, easing: "easeInQuad" },
                { id: "eid55", tween: [ "style", "${_bottle}", "opacity", '0', { fromValue: '1'}], position: 12896, duration: 237, easing: "easeInQuad" },
                { id: "eid21", tween: [ "transform", "${_a1}", "scaleX", '0.1', { fromValue: '0'}], position: 0, duration: 502, easing: "easeInQuad" },
                { id: "eid42", tween: [ "style", "${_b2}", "left", '-1255px', { fromValue: '-1255px'}], position: 1450, duration: 0, easing: "easeInQuad" },
                { id: "eid65", tween: [ "style", "${_c2}", "left", '395px', { fromValue: '-649px'}], position: 2775, duration: 385, easing: "easeInQuad" },
                { id: "eid48", tween: [ "style", "${_b22}", "opacity", '1', { fromValue: '0'}], position: 3899, duration: 617, easing: "easeInQuad" },
                { id: "eid59", tween: [ "style", "${_b22}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 237, easing: "easeInQuad" },
                { id: "eid67", tween: [ "style", "${_c2}", "top", '79px', { fromValue: '-317px'}], position: 2775, duration: 385, easing: "easeInQuad" },
                { id: "eid63", tween: [ "style", "${_MOUNT2}", "opacity", '0.8', { fromValue: '0'}], position: 2599, duration: 974, easing: "easeInQuad" },
                { id: "eid89", tween: [ "style", "${_MOUNT2}", "opacity", '0', { fromValue: '0.8'}], position: 19526, duration: 500, easing: "easeInQuad" },
                { id: "eid71", tween: [ "style", "${_c1}", "top", '79px', { fromValue: '-362px'}], position: 2775, duration: 385, easing: "easeInQuad" },
                { id: "eid2", tween: [ "style", "${_logo}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,106.80004882813]}], position: 0, duration: 718, easing: "easeOutBack" },
                { id: "eid90", tween: [ "style", "${_logo}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,106.80004882813]}], position: 13211, duration: 248, easing: "easeOutBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-161637");
