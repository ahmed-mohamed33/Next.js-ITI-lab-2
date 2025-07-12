/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/todos/route";
exports.ids = ["app/api/todos/route"];
exports.modules = {

/***/ "(rsc)/./app/_lib/dbConnection.js":
/*!**********************************!*\
  !*** ./app/_lib/dbConnection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dbConnection: () => (/* binding */ dbConnection)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction dbConnection() {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://localhost:27017/\").then(()=>{\n        console.log(\"connected to db successfuly\");\n    }).catch((err)=>{\n        console.log(err);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvX2xpYi9kYkNvbm5lY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDO0lBQ2RELHVEQUNVLENBQUMsOEJBQ1JHLElBQUksQ0FBQztRQUNKQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7UUFDTkgsUUFBUUMsR0FBRyxDQUFDRTtJQUNkO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWhtZWRcXERvY3VtZW50c1xcUmFpbm1ldGVyXFxTa2luc1xcRHJvcHRvcCBGb2xkZXJzXFxDdXN0b21Gb2xkZXIxXFxEZXNrdG9wXFxDTGllbnQgc2lkZSB0ZWNoIGxhYnNcXE5leHRcXExhYjEgLSBDb3B5XFxhcHBcXF9saWJcXGRiQ29ubmVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYkNvbm5lY3Rpb24oKSB7XG4gIG1vbmdvb3NlXG4gICAgLmNvbm5lY3QoXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L1wiKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkIHRvIGRiIHN1Y2Nlc3NmdWx5XCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkYkNvbm5lY3Rpb24iLCJjb25uZWN0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/_lib/dbConnection.js\n");

/***/ }),

/***/ "(rsc)/./app/_lib/schema/todos.js":
/*!**********************************!*\
  !*** ./app/_lib/schema/todos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst todosSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    status: {\n        type: String,\n        default: \"todo\"\n    }\n});\nconst todosModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).todo || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"todo\", todosSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todosModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvX2xpYi9zY2hlbWEvdG9kb3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsSUFBSUQsd0RBQWUsQ0FBQztJQUN0Q0csTUFBTTtRQUNKQyxNQUFNQztRQUNOQyxRQUFRO1FBQ1JDLFVBQVU7SUFDWjtJQUNBQyxRQUFRO1FBQ05KLE1BQU1DO1FBQ05JLFNBQVM7SUFDWDtBQUNGO0FBRUEsTUFBTUMsYUFBYVYsd0RBQWUsQ0FBQ1ksSUFBSSxJQUFJWixxREFBYyxDQUFDLFFBQVFDO0FBRWxFLGlFQUFlUyxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFobWVkXFxEb2N1bWVudHNcXFJhaW5tZXRlclxcU2tpbnNcXERyb3B0b3AgRm9sZGVyc1xcQ3VzdG9tRm9sZGVyMVxcRGVza3RvcFxcQ0xpZW50IHNpZGUgdGVjaCBsYWJzXFxOZXh0XFxMYWIxIC0gQ29weVxcYXBwXFxfbGliXFxzY2hlbWFcXHRvZG9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgdG9kb3NTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB1bmlxdWU6IHRydWUsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHN0YXR1czoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcInRvZG9cIixcbiAgfSxcbn0pO1xuXG5jb25zdCB0b2Rvc01vZGVsID0gbW9uZ29vc2UubW9kZWxzLnRvZG8gfHwgbW9uZ29vc2UubW9kZWwoXCJ0b2RvXCIsIHRvZG9zU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb3NNb2RlbDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInRvZG9zU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsInN0YXR1cyIsImRlZmF1bHQiLCJ0b2Rvc01vZGVsIiwibW9kZWxzIiwidG9kbyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/_lib/schema/todos.js\n");

/***/ }),

/***/ "(rsc)/./app/api/todos/route.js":
/*!********************************!*\
  !*** ./app/api/todos/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_dbConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/_lib/dbConnection */ \"(rsc)/./app/_lib/dbConnection.js\");\n/* harmony import */ var _app_lib_schema_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_lib/schema/todos */ \"(rsc)/./app/_lib/schema/todos.js\");\n\n\n(0,_app_lib_dbConnection__WEBPACK_IMPORTED_MODULE_0__.dbConnection)();\nasync function GET() {\n    try {\n        const todos = await _app_lib_schema_todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return new Response(JSON.stringify(todos), {\n            status: 200\n        });\n    } catch (err) {\n        console.log(err);\n        return new Response(err.message, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    await (0,_app_lib_dbConnection__WEBPACK_IMPORTED_MODULE_0__.dbConnection)();\n    try {\n        const body = await request.json();\n        if (!body.name || typeof body.name !== \"string\") {\n            return Response.json({\n                error: \"name is required\"\n            }, {\n                status: 400\n            });\n        }\n        const newTodo = await _app_lib_schema_todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n            name: body.name,\n            status: body.status || \"todo\"\n        });\n        return Response.json(newTodo, {\n            status: 201\n        });\n    } catch (error) {\n        return Response.json({\n            error: \"Failed to create todo\",\n            details: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RvZG9zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUQ7QUFDTjtBQUVqREEsbUVBQVlBO0FBRUwsZUFBZUU7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFFBQVEsTUFBTUYsNkRBQVVBLENBQUNHLElBQUk7UUFDbkMsT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUNKLFFBQVE7WUFBRUssUUFBUTtRQUFJO0lBQzNELEVBQUUsT0FBT0MsS0FBSztRQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBRVosT0FBTyxJQUFJSixTQUFTSSxJQUFJRyxPQUFPLEVBQUU7WUFBRUosUUFBUTtRQUFJO0lBQ2pEO0FBQ0Y7QUFFTyxlQUFlSyxLQUFLQyxPQUFPO0lBQ2hDLE1BQU1kLG1FQUFZQTtJQUVsQixJQUFJO1FBQ0YsTUFBTWUsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO1FBRS9CLElBQUksQ0FBQ0QsS0FBS0UsSUFBSSxJQUFJLE9BQU9GLEtBQUtFLElBQUksS0FBSyxVQUFVO1lBQy9DLE9BQU9aLFNBQVNXLElBQUksQ0FBQztnQkFBRUUsT0FBTztZQUFtQixHQUFHO2dCQUFFVixRQUFRO1lBQUk7UUFDcEU7UUFFQSxNQUFNVyxVQUFVLE1BQU1sQiw2REFBVUEsQ0FBQ21CLE1BQU0sQ0FBQztZQUN0Q0gsTUFBTUYsS0FBS0UsSUFBSTtZQUNmVCxRQUFRTyxLQUFLUCxNQUFNLElBQUk7UUFDekI7UUFFQSxPQUFPSCxTQUFTVyxJQUFJLENBQUNHLFNBQVM7WUFBRVgsUUFBUTtRQUFJO0lBQzlDLEVBQUUsT0FBT1UsT0FBTztRQUNkLE9BQU9iLFNBQVNXLElBQUksQ0FDbEI7WUFBRUUsT0FBTztZQUF5QkcsU0FBU0gsTUFBTU4sT0FBTztRQUFDLEdBQ3pEO1lBQUVKLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFobWVkXFxEb2N1bWVudHNcXFJhaW5tZXRlclxcU2tpbnNcXERyb3B0b3AgRm9sZGVyc1xcQ3VzdG9tRm9sZGVyMVxcRGVza3RvcFxcQ0xpZW50IHNpZGUgdGVjaCBsYWJzXFxOZXh0XFxMYWIxIC0gQ29weVxcYXBwXFxhcGlcXHRvZG9zXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYkNvbm5lY3Rpb24gfSBmcm9tIFwiQC9hcHAvX2xpYi9kYkNvbm5lY3Rpb25cIjtcbmltcG9ydCB0b2Rvc01vZGVsIGZyb20gXCJAL2FwcC9fbGliL3NjaGVtYS90b2Rvc1wiO1xuXG5kYkNvbm5lY3Rpb24oKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b2RvcyA9IGF3YWl0IHRvZG9zTW9kZWwuZmluZCgpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkodG9kb3MpLCB7IHN0YXR1czogMjAwIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShlcnIubWVzc2FnZSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIGF3YWl0IGRiQ29ubmVjdGlvbigpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgaWYgKCFib2R5Lm5hbWUgfHwgdHlwZW9mIGJvZHkubmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJuYW1lIGlzIHJlcXVpcmVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUb2RvID0gYXdhaXQgdG9kb3NNb2RlbC5jcmVhdGUoe1xuICAgICAgbmFtZTogYm9keS5uYW1lLFxuICAgICAgc3RhdHVzOiBib2R5LnN0YXR1cyB8fCBcInRvZG9cIixcbiAgICB9KTtcblxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKG5ld1RvZG8sIHsgc3RhdHVzOiAyMDEgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgdG9kb1wiLCBkZXRhaWxzOiBlcnJvci5tZXNzYWdlIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGJDb25uZWN0aW9uIiwidG9kb3NNb2RlbCIsIkdFVCIsInRvZG9zIiwiZmluZCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsIm5hbWUiLCJlcnJvciIsIm5ld1RvZG8iLCJjcmVhdGUiLCJkZXRhaWxzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/todos/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=C%3A%5CUsers%5CAhmed%5CDocuments%5CRainmeter%5CSkins%5CDroptop%20Folders%5CCustomFolder1%5CDesktop%5CCLient%20side%20tech%20labs%5CNext%5CLab1%20-%20Copy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAhmed%5CDocuments%5CRainmeter%5CSkins%5CDroptop%20Folders%5CCustomFolder1%5CDesktop%5CCLient%20side%20tech%20labs%5CNext%5CLab1%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=C%3A%5CUsers%5CAhmed%5CDocuments%5CRainmeter%5CSkins%5CDroptop%20Folders%5CCustomFolder1%5CDesktop%5CCLient%20side%20tech%20labs%5CNext%5CLab1%20-%20Copy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAhmed%5CDocuments%5CRainmeter%5CSkins%5CDroptop%20Folders%5CCustomFolder1%5CDesktop%5CCLient%20side%20tech%20labs%5CNext%5CLab1%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Ahmed_Documents_Rainmeter_Skins_Droptop_Folders_CustomFolder1_Desktop_CLient_side_tech_labs_Next_Lab1_Copy_app_api_todos_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/todos/route.js */ \"(rsc)/./app/api/todos/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/todos/route\",\n        pathname: \"/api/todos\",\n        filename: \"route\",\n        bundlePath: \"app/api/todos/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ahmed\\\\Documents\\\\Rainmeter\\\\Skins\\\\Droptop Folders\\\\CustomFolder1\\\\Desktop\\\\CLient side tech labs\\\\Next\\\\Lab1 - Copy\\\\app\\\\api\\\\todos\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Ahmed_Documents_Rainmeter_Skins_Droptop_Folders_CustomFolder1_Desktop_CLient_side_tech_labs_Next_Lab1_Copy_app_api_todos_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0b2RvcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdG9kb3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0b2RvcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBaG1lZCU1Q0RvY3VtZW50cyU1Q1JhaW5tZXRlciU1Q1NraW5zJTVDRHJvcHRvcCUyMEZvbGRlcnMlNUNDdXN0b21Gb2xkZXIxJTVDRGVza3RvcCU1Q0NMaWVudCUyMHNpZGUlMjB0ZWNoJTIwbGFicyU1Q05leHQlNUNMYWIxJTIwLSUyMENvcHklNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FobWVkJTVDRG9jdW1lbnRzJTVDUmFpbm1ldGVyJTVDU2tpbnMlNUNEcm9wdG9wJTIwRm9sZGVycyU1Q0N1c3RvbUZvbGRlcjElNUNEZXNrdG9wJTVDQ0xpZW50JTIwc2lkZSUyMHRlY2glMjBsYWJzJTVDTmV4dCU1Q0xhYjElMjAtJTIwQ29weSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMkc7QUFDeEw7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFobWVkXFxcXERvY3VtZW50c1xcXFxSYWlubWV0ZXJcXFxcU2tpbnNcXFxcRHJvcHRvcCBGb2xkZXJzXFxcXEN1c3RvbUZvbGRlcjFcXFxcRGVza3RvcFxcXFxDTGllbnQgc2lkZSB0ZWNoIGxhYnNcXFxcTmV4dFxcXFxMYWIxIC0gQ29weVxcXFxhcHBcXFxcYXBpXFxcXHRvZG9zXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90b2Rvcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RvZG9zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90b2Rvcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEFobWVkXFxcXERvY3VtZW50c1xcXFxSYWlubWV0ZXJcXFxcU2tpbnNcXFxcRHJvcHRvcCBGb2xkZXJzXFxcXEN1c3RvbUZvbGRlcjFcXFxcRGVza3RvcFxcXFxDTGllbnQgc2lkZSB0ZWNoIGxhYnNcXFxcTmV4dFxcXFxMYWIxIC0gQ29weVxcXFxhcHBcXFxcYXBpXFxcXHRvZG9zXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=C%3A%5CUsers%5CAhmed%5CDocuments%5CRainmeter%5CSkins%5CDroptop%20Folders%5CCustomFolder1%5CDesktop%5CCLient%20side%20tech%20labs%5CNext%5CLab1%20-%20Copy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAhmed%5CDocuments%5CRainmeter%5CSkins%5CDroptop%20Folders%5CCustomFolder1%5CDesktop%5CCLient%20side%20tech%20labs%5CNext%5CLab1%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=C%3A%5CUsers%5CAhmed%5CDocuments%5CRainmeter%5CSkins%5CDroptop%20Folders%5CCustomFolder1%5CDesktop%5CCLient%20side%20tech%20labs%5CNext%5CLab1%20-%20Copy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAhmed%5CDocuments%5CRainmeter%5CSkins%5CDroptop%20Folders%5CCustomFolder1%5CDesktop%5CCLient%20side%20tech%20labs%5CNext%5CLab1%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();