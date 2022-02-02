import bunyan from 'bunyan';

/**
 * Custom logger using bunyan for logging server
 * requests to the console.
 */
export const logger = bunyan.createLogger({
  name: 'solana-service',
  level: (process.env.LOG_LEVEL as bunyan.LogLevelString) || 'debug',
  serializers: bunyan.stdSerializers
});
