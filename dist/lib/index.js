"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const logger_1 = __importDefault(require("./logger"));
const index_1 = __importDefault(require("../config/index"));
exports.default = async ({ serverApp }) => {
    await (0, express_1.default)({ app: serverApp });
    logger_1.default.info(`${index_1.default.serverType} ready to go!!`);
};
