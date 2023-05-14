"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const argon2_1 = __importDefault(require("argon2"));
const crypto_1 = require("crypto");
const client_1 = require("@prisma/client");
let AuthService = class AuthService {
    constructor() { }
    prisma = new client_1.PrismaClient();
    async SignUp(userInputDTO) {
        try {
            console.log("boy is here");
            const salt = (0, crypto_1.randomBytes)(32);
            // this.logger.silly('Hashing password');
            const hashedPassword = await argon2_1.default.hash(userInputDTO.password, { salt });
            userInputDTO.password = hashedPassword;
            userInputDTO.salt = salt.toString("hex");
            const userRecord = await this.prisma.user.create({
                data: {
                    ...userInputDTO,
                },
            });
            //  this.logger.silly('Generating JWT');
            const token = this.generateToken(userRecord);
            if (!userRecord) {
                throw new Error("User cannot be created");
            }
            //  this.logger.silly('Sending welcome email');
            Reflect.deleteProperty(userRecord, "password");
            Reflect.deleteProperty(userRecord, "salt");
            return { user: userRecord, token };
        }
        catch (e) {
            //  this.logger.error(e);
            throw e;
        }
    }
    async SignIn(email, password) {
        // const userRecord = await this.userModel.findOne({ email });
        const userRecord = await this.prisma.user.findFirst({
            where: {
                email,
            },
        });
        console.log("ss", userRecord);
        if (!userRecord) {
            throw new Error("User not registered");
        }
        const validPassword = await argon2_1.default.verify(userRecord.password, password);
        if (validPassword) {
            // this.logger.silly('Generating JWT');
            const token = this.generateToken(userRecord);
            const user = userRecord;
            Reflect.deleteProperty(user, "password");
            Reflect.deleteProperty(user, "salt");
            return { user, token };
        }
        else {
            throw new Error("Invalid Password");
        }
    }
    generateToken(user) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        //  this.logger.silly(`Sign JWT for userId: ${user._id}`);
        return jsonwebtoken_1.default.sign({
            _id: user._id,
            role: user.role,
            name: user.name,
            exp: exp.getTime() / 1000,
        }, config_1.default.jwtSecret);
    }
};
AuthService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], AuthService);
exports.default = AuthService;
