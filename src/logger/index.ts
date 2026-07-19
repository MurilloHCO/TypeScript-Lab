import { styleText } from "node:util"

// interface LoggerOptions {
//     info(texto: string): void;
//     warn(texto: string): void;
//     error(texto: string): void;
// }

// const data = new Date().toLocaleTimeString("pt-br");

class Logger {
    private data: string = new Date().toLocaleTimeString("pt-br");
    private log(): void {
        
    }
    public success(texto: string): void {
        return console.log(styleText("green", `[${this.data}] [SUCCESS] ${texto}`));
    }
    public info(texto: string): void {
        return console.log(styleText("green", `[${this.data}] [INFO] ${texto}`));
    }
    public warn(texto: string): void {
        return console.log(styleText("yellow", `[${this.data}] [WARN] ${texto}`));
    }
    public error(texto: string): void {
        return console.log(styleText("red", `[${this.data}] [ERROR] ${texto}`));
    }
}

export const logger = new Logger();

logger.success("Bot iniciado");
logger.info("10/10");
logger.warn("Queda de memoria");
logger.error("Erro de código");