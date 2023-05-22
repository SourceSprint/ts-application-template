import logger from "moment-logger";

import { isProduction } from "@/config";

logger.info(`Running in ${isProduction ? "production" : "development"} mode`);
