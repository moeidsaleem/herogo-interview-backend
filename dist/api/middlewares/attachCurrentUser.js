"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const attachCurrentUser = async (req, res, next) => {
    // const Logger = Container.get<Logger>('logger');
    try {
        const prisma = new client_1.PrismaClient();
        const user = await prisma.user.findFirst({
            where: {
                id: req.user.id,
            },
        });
        console.log("user", user);
        if (!user) {
            return res.sendStatus(401);
        }
        if (user) {
            Reflect.deleteProperty(user, "password");
            Reflect.deleteProperty(user, "salt");
            req.currentUser = user;
            return next();
        }
    }
    catch (e) {
        // Logger.error('🔥 Error attaching user to req: %o', e);
        return next(e);
    }
};
exports.default = attachCurrentUser;
