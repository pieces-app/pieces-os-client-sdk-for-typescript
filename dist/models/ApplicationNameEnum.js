"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationNameEnumToJSON = exports.ApplicationNameEnumFromJSONTyped = exports.ApplicationNameEnumFromJSON = exports.ApplicationNameEnum = void 0;
/**
 * This is a running enumeration for the Names of all the Applications that can be Registered
 * @export
 * @enum {string}
 */
var ApplicationNameEnum;
(function (ApplicationNameEnum) {
    ApplicationNameEnum["Sublime"] = "SUBLIME";
    ApplicationNameEnum["VsCode"] = "VS_CODE";
    ApplicationNameEnum["Jetbrains"] = "JETBRAINS";
    ApplicationNameEnum["FirefoxAddonMv2"] = "FIREFOX_ADDON_MV2";
    ApplicationNameEnum["FirefoxAddonMv3"] = "FIREFOX_ADDON_MV3";
    ApplicationNameEnum["SafariExtensionMv2"] = "SAFARI_EXTENSION_MV2";
    ApplicationNameEnum["SafariExtensionMv3"] = "SAFARI_EXTENSION_MV3";
    ApplicationNameEnum["PiecesForDevelopers"] = "PIECES_FOR_DEVELOPERS";
    ApplicationNameEnum["PiecesForDevelopersCli"] = "PIECES_FOR_DEVELOPERS_CLI";
    ApplicationNameEnum["OsServer"] = "OS_SERVER";
    ApplicationNameEnum["GoogleChromeExtensionMv2"] = "GOOGLE_CHROME_EXTENSION_MV2";
    ApplicationNameEnum["GoogleChromeExtensionMv3"] = "GOOGLE_CHROME_EXTENSION_MV3";
    ApplicationNameEnum["UltraEdit"] = "ULTRA_EDIT";
    ApplicationNameEnum["AtomPackage"] = "ATOM_PACKAGE";
    ApplicationNameEnum["AdobeIllustratorPiecesColorShare"] = "ADOBE_ILLUSTRATOR_PIECES_COLOR_SHARE";
    ApplicationNameEnum["MicrosoftTeams"] = "MICROSOFT_TEAMS";
    ApplicationNameEnum["ChatGpt"] = "CHAT_GPT";
    ApplicationNameEnum["Obsidian"] = "OBSIDIAN";
    ApplicationNameEnum["JupyterHub"] = "JUPYTER_HUB";
    ApplicationNameEnum["VisualStudio"] = "VISUAL_STUDIO";
    ApplicationNameEnum["MicrosoftEdge"] = "MICROSOFT_EDGE";
    ApplicationNameEnum["Brave"] = "BRAVE";
    ApplicationNameEnum["GoogleChat"] = "GOOGLE_CHAT";
    ApplicationNameEnum["Slack"] = "SLACK";
    ApplicationNameEnum["AzureDataStudio"] = "AZURE_DATA_STUDIO";
    ApplicationNameEnum["OpenSource"] = "OPEN_SOURCE";
    ApplicationNameEnum["Unknown"] = "UNKNOWN";
})(ApplicationNameEnum || (exports.ApplicationNameEnum = ApplicationNameEnum = {}));
function ApplicationNameEnumFromJSON(json) {
    return ApplicationNameEnumFromJSONTyped(json, false);
}
exports.ApplicationNameEnumFromJSON = ApplicationNameEnumFromJSON;
function ApplicationNameEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ApplicationNameEnumFromJSONTyped = ApplicationNameEnumFromJSONTyped;
function ApplicationNameEnumToJSON(value) {
    return value;
}
exports.ApplicationNameEnumToJSON = ApplicationNameEnumToJSON;
