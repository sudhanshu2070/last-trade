interface ChartSettings {
  indicators: string[];
  rsiPeriod?: number;
  oversoldLevel?: number;
  fastEMA?: number;
  slowEMA?: number;
}

interface EntryConditions {
  condition: string;
  value?: number;
  fastEMA?: number;
  slowEMA?: number;
}

interface ExitConditions {
  takeProfit: number;
  stopLoss: number;
}

interface PositionBuilder {
  positionSize: number;
}

interface BasicConfig {
  strategyType: string;
  executionTime?: string;
  noTradeAfterTime?: string;
  strategyName: string;
  instrument: string;
  orderType: string;
}
interface OrderLeg {
  legType: 'buy' | 'sell';  
  quantity: number;
  expiry: string; 
  optionType: 'call' | 'put' | ' '; // ' ' for non-option instruments 
  strikeType: 'ATM' | 'OTM' | 'ITM' | ' '; // ' ' for non-option instruments
  strikeSelection: 'manual' | 'auto' | ' '; // ' ' for non-option instruments
  stopLoss: number; // in percentage
  target: number; // in percentage
}

interface StrategyTemplate {
  strategyType: 'time-based' | 'indicator';
  transactionType: 'long' | 'short' | 'bothLongAndShort';
  chartSettings: ChartSettings;
  entryConditions: EntryConditions;
  exitConditions: ExitConditions;
  positionBuilder: PositionBuilder;
  basicConfig: BasicConfig;
  orderLegs?: OrderLeg[]; // Optional, only for time-based strategies
}

interface StrategyTemplates {
  rsiOversold: StrategyTemplate;
  goldenCross: StrategyTemplate;
  // Add more template keys here as needed
}

const strategyTemplates: StrategyTemplates = {
  rsiOversold: {
    strategyType: "time-based",
    transactionType: "bothLongAndShort",
    chartSettings: {
      indicators: ["RSI"],
      rsiPeriod: 14,
      oversoldLevel: 30
    },
    entryConditions: {
      condition: "RSI_crosses_below",
      value: 30
    },
    exitConditions: {
      takeProfit: 5,
      stopLoss: 2
    },
    positionBuilder: {
      positionSize: 2
    },
    basicConfig: {
      strategyType: "time-based",
      executionTime: "09:45",
      noTradeAfterTime: "15:15",
      strategyName: "RSI Oversold Strategy",
      instrument: "nifty50",
      orderType: "MIS"
    },
    orderLegs: [
      { legType: "buy", expiry:" ", quantity: 2, optionType: " ", strikeType:" ", strikeSelection:" ", stopLoss: 2, target:5 },
      { legType: "buy", expiry:" ", quantity: 2, optionType: " ", strikeType:" ", strikeSelection:" ", stopLoss: 2, target:5 },
      { legType: "buy", expiry:" ", quantity: 2, optionType: " ", strikeType:" ", strikeSelection:" ", stopLoss: 2, target:5 },
      { legType: "buy", expiry:" ", quantity: 2, optionType: " ", strikeType:" ", strikeSelection:" ", stopLoss: 2, target:5 },
    ], 
  },
  goldenCross: {
    strategyType: "time-based",
    transactionType: "long",
    chartSettings: {
      indicators: ["EMA_50", "EMA_200"]
    },
    entryConditions: {
      condition: "EMA_crossover",
      fastEMA: 50,
      slowEMA: 200
    },
    exitConditions: {
      takeProfit: 10,
      stopLoss: 5
    },
    positionBuilder: {
      positionSize: 1
    },
    basicConfig: {
      strategyType: "time-based",
      executionTime: "09:45",
      noTradeAfterTime: "15:15",
      strategyName: "Golden Cross Strategy",
      instrument: "nifty50",
      orderType: "MIS"
    }
  }
};

export default strategyTemplates;