"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const method_override_1 = __importDefault(require("method-override"));
const api_1 = __importDefault(require("../api"));
const config_1 = __importDefault(require("../config"));
exports.default = ({ app }) => {
    /**
     * API Status Check !!
     */
    app.get("/status", (req, res) => {
        res.status(200).json({
            status: "OK! Server is working 100%  🔥",
        });
    });
    app.head("/status", (req, res) => {
        res.status(200).end();
    });
    /* Setting up basics */
    app.enable("trust proxy");
    app.use((0, cors_1.default)());
    app.use((0, method_override_1.default)());
    app.use(body_parser_1.default.json());
    // Load API routes with /api
    app.use(config_1.default.api.prefix, (0, api_1.default)());
    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = new Error("Not Found");
        // err["status"] = 404;
        next(err);
    });
    /// error handlers
    app.use((err, req, res, next) => {
        /**
         * Handler 401
         */
        if (err.name === "UnauthorizedError") {
            return res.status(err.status).send({ message: err.message }).end();
        }
        return next(err);
    });
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
};
