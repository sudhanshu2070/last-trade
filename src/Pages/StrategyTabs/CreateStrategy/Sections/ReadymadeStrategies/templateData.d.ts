export interface StrategyTemplate {
  strategyType: 'time-based' | 'indicator';
  transactionType: 'long' | 'short' | 'bothLongAndShort';
  chartSettings?: {
    indicators: string[];
    rsiPeriod?: number;
    oversoldLevel?: number;
    // other indicator-specific settings
  };
  entryConditions?: {
    condition: string;
    value?: number;
    // other condition properties
  };
  exitConditions?: {
    takeProfit: number;
    stopLoss: number;
    // other exit properties
  };
  positionBuilder?: {
    positionSize: number;
    // other position properties
  };
  basicConfig?: {
    strategyName: string;
    instrument: string;
    orderType: string;
    // other basic configs
  };
}

export interface StrategyTemplates {
  [key: string]: StrategyTemplate;
}