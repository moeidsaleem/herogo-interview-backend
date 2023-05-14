"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./config/index"));
const logger_1 = __importDefault(require("./lib/logger"));
const libs = __importStar(require("./lib"));
async function startServer() {
    const app = (0, express_1.default)();
    await libs.default({ serverApp: app });
    app &&
        app.listen(index_1.default.port, () => {
            logger_1.default.info(`
                  /|");
   _______________)|..");
 <'______________<(,_|)");
            .((()))| ))");
            (======)| '\\");
           ((( \"_\"()|_ \\");
          '()))(_)/_/ ' )");
          .--/_\\ /(  /./");
         /'._.--\\ .-(_/");
        / / )\\___:___)");
       ( -.'.._  |  /");
        \\  \\_\\ ( | )");
         '. /\\)_(_)|");
           '-|  XX |");
            %%%%%%%%");
           / %%%%%%%\\");
          ( /.-'%%%. \\");
         /(.'     \\ :|");
        / ,|       ) )");
      _|___)      (__|_.		   ⚡️-------------------------------------------------------⚡️
      )___/       )___(			      ⚡️|	Running Node Server for ${process.env.NODE_ENV}	|⚡️
       |x/      mrf\\ >			      ⚡️|	      Version: ${process.env.VERSION}                    |⚡️
       |x)         / '.			      ⚡️|	    Ready now on port: ${index_1.default.port}             |⚡️
       |x\\       _(____''.__                  ⚡️|	    Author: ${process.env.AUTHOR}           |⚡️
     --\\ -\\--");                           
      --\\__|--"); 

    `);
        });
}
startServer();
