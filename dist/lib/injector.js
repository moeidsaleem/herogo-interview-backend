"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const logger_1 = __importDefault(require("./logger"));
const agenda_1 = __importDefault(require("./agenda"));
exports.default = () => {
    try {
        const agendaInstance = (0, agenda_1.default)();
        typedi_1.Container.set("agendaInstance", agendaInstance);
        typedi_1.Container.set("logger", logger_1.default);
        logger_1.default.info("✌️ Agenda injected into container");
        return { agenda: agendaInstance };
    }
    catch (e) {
        logger_1.default.error("🔥 Error on dependency injector loader: %o", e);
        throw e;
    }
};
