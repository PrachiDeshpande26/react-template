(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1037:function(module){module.exports=JSON.parse('{"repo_list":"Repository List","repo_search":"Repository Search","respo_search_default":"Search for a repository by entering it\'s name in the search box","get_repo_details":"Get details of repositories","search_query":"Search query: {repoName}","matching_repos":"Total number of matching repos: {totalCount}","something_went_wrong":"Sorry. Something went wrong! Please try again in sometime.","stories":"Go to Storybook"}')},1038:function(module,exports,__webpack_require__){var map={"./Clickable/stories/Clickable.stories":449,"./Text/stories/Text.stories":445};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1038},190:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(22),__webpack_require__(131),__webpack_require__(23),__webpack_require__(24),__webpack_require__(12),__webpack_require__(17),__webpack_require__(27);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(189),message=__webpack_require__(443),prop_types=__webpack_require__(0),prop_types_default=__webpack_require__.n(prop_types),If=function(props){return props.condition?props.children:props.otherwise};If.propsTypes={condition:prop_types_default.a.bool,otherwise:prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node),prop_types_default.a.node]),children:prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node),prop_types_default.a.node])},If.defaultProps={otherwise:null};var components_If=If;function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var StyledText=styled_components_browser_esm.a.p.withConfig({displayName:"Text__StyledText",componentId:"ap7h6t-0"})(["&&{",";}"],function(props){return props.marginBottom&&"margin-bottom: ".concat(props.marginBottom,"px;")}),Text=function(_ref){var text=_ref.text,id=_ref.id,marginBottom=_ref.marginBottom,values=_ref.values,otherProps=_objectWithoutProperties(_ref,["text","id","marginBottom","values"]);return react_default.a.createElement(StyledText,_extends({"data-testid":"text",marginBottom:marginBottom},otherProps),react_default.a.createElement(components_If,{condition:id,otherwise:text},react_default.a.createElement(message.a,{id:id,values:values})))};Text.displayName="Text",Text.propTypes={id:prop_types.PropTypes.string,marginBottom:prop_types.PropTypes.number,values:prop_types.PropTypes.object,text:prop_types.PropTypes.string},Text.defaultProps={values:{}};var TextComponent=Object(react.memo)(Text);__webpack_exports__.a=TextComponent;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{values:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},marginBottom:{type:{name:"number"},required:!1,description:""},text:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/Text/index.js"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"app/components/Text/index.js"})},191:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return DEFAULT_LOCALE}),__webpack_require__.d(__webpack_exports__,"b",function(){return appLocales}),__webpack_require__.d(__webpack_exports__,"c",function(){return translationMessages});__webpack_require__(89),__webpack_require__(24),__webpack_require__(12),__webpack_require__(395),__webpack_require__(396);var enTranslationMessages=__webpack_require__(1037),DEFAULT_LOCALE="en",appLocales=["en"],formatTranslationMessages=function(locale,messages){var defaultFormattedMessages=locale===DEFAULT_LOCALE?{}:formatTranslationMessages(DEFAULT_LOCALE,enTranslationMessages);return Object.keys(messages).reduce(function flattenFormattedMessages(formattedMessages,key){var formattedMessage=messages[key]||locale===DEFAULT_LOCALE?messages[key]:defaultFormattedMessages[key];return Object.assign(formattedMessages,function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},key,formattedMessage))},{})},translationMessages={en:formatTranslationMessages("en",enTranslationMessages)}},445:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(96),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(190);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Text").add("simple",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.a,{id:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("id","Text")})})},449:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),client=__webpack_require__(59),dist=__webpack_require__(96),prop_types=__webpack_require__(0),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(189),Text=__webpack_require__(190),StyledClickable=styled_components_browser_esm.a.div.withConfig({displayName:"Clickable__StyledClickable",componentId:"sc-19lp5om-0"})(["color:#1890ff;&:hover{cursor:pointer;}"]);function Clickable(_ref){var onClick=_ref.onClick,textId=_ref.textId;return react_default.a.createElement(StyledClickable,{"data-testid":"clickable",onClick:onClick},textId&&react_default.a.createElement(Text.a,{id:textId}))}Clickable.displayName="Clickable",Clickable.propTypes={onClick:prop_types_default.a.func.isRequired,textId:prop_types_default.a.string.isRequired};var components_Clickable=Clickable;Clickable.__docgenInfo={description:"",methods:[],displayName:"Clickable",props:{onClick:{type:{name:"func"},required:!0,description:""},textId:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/Clickable/index.js"]={name:"Clickable",docgenInfo:Clickable.__docgenInfo,path:"app/components/Clickable/index.js"}),Object(client.storiesOf)("Clickable").add("simple",function(){return react_default.a.createElement(components_Clickable,{textId:Object(dist.text)("textId","Clickable")})})},459:function(module,exports,__webpack_require__){__webpack_require__(460),__webpack_require__(593),module.exports=__webpack_require__(594)},495:function(module,exports){},507:function(module,exports){},529:function(module,exports){},541:function(module,exports){},594:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(23),__webpack_require__(86),__webpack_require__(12),__webpack_require__(17),__webpack_require__(148),__webpack_require__(27);var _storybook_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(59),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__(395),__webpack_require__(396),__webpack_require__(1),__webpack_require__(96)),storybook_router__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(453),storybook_router__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(storybook_router__WEBPACK_IMPORTED_MODULE_11__),storybook_addon_smart_knobs__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(455),storybook_addon_intl__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(273),_app_i18n_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(191);Object.values=function(obj){return Object.keys(obj).map(function(key){return obj[key]})},Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(storybook_addon_smart_knobs__WEBPACK_IMPORTED_MODULE_12__.withSmartKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_10__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(storybook_router__WEBPACK_IMPORTED_MODULE_11___default()());Object(storybook_addon_intl__WEBPACK_IMPORTED_MODULE_13__.setIntlConfig)({locales:_app_i18n_js__WEBPACK_IMPORTED_MODULE_14__.b,defaultLocale:_app_i18n_js__WEBPACK_IMPORTED_MODULE_14__.a,getMessages:function(locale){return _app_i18n_js__WEBPACK_IMPORTED_MODULE_14__.c[locale]}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(storybook_addon_intl__WEBPACK_IMPORTED_MODULE_13__.withIntl),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.configure)(function loadStories(){return function requireAll(requireContext){return requireContext.keys().map(function(){return requireContext})}(__webpack_require__(1038))}(),module)}.call(this,__webpack_require__(595)(module))}},[[459,1,2]]]);
//# sourceMappingURL=main.e8ab493d2c8a0352238b.bundle.js.map