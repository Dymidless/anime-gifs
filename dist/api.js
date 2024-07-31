"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGif = fetchGif;
exports.fetchAllReactions = fetchAllReactions;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = 'https://api.otakugifs.xyz/gif';
function fetchGif(reaction_1) {
    return __awaiter(this, arguments, void 0, function* (reaction, format = 'GIF') {
        try {
            const response = yield axios_1.default.get(`${BASE_URL}?reaction=${reaction}&format=${format}`);
            return response.data.url;
        }
        catch (error) {
            console.error('Error fetching gif:', error);
            throw error;
        }
    });
}
function fetchAllReactions() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://api.otakugifs.xyz/gif/allreactions');
            return response.data.reactions;
        }
        catch (error) {
            console.error('Error fetching reactions:', error);
            throw error;
        }
    });
}
