import type { UUID } from "node:crypto";

type LoggerMethod = (...args: any[]) => void;

export interface Logger {
  log?: LoggerMethod;
  debug: LoggerMethod;
  warn: LoggerMethod;
  error: LoggerMethod;
  info: LoggerMethod;
}

/**
 * Represents a registered service instance in the registry
 *
 * @interface Instance
 * @property {UUID} id - Unique identifier for this instance
 * @property {string} serviceType - The type of service this instance provides (e.g. "product-database")
 * @property {string} host - Hostname where the service is running
 * @property {string} port - Port number the service is listening on
 * @property {number} created - Timestamp when this instance was registered
 * @property {number} lastUpdated - Timestamp of most recent health check or update
 * @property {boolean} healthy - Current health status based on health checks
 * @property {Record<string,any>} meta - Additional metadata about this instance
 */
export interface Instance {
  id: UUID;
  token: string;
  serviceType: string;
  host: string;
  port: string;
  created: number;
  lastUpdated: number;
  healthy: boolean;
  meta?: Record<string, any>;
}

export type InstanceRegisterRequest = Pick<
  Instance,
  "serviceType" | "port" | "meta" | "host"
>;

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}
