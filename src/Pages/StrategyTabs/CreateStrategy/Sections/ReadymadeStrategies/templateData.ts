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
  legType: 'BUY' | 'SELL';  
  quantity: number;
  expiry: string; 
  optionType: 'CALL' | 'PUT' | ' '; // ' ' for non-option instruments 
  strikeType: 'ATM' | 'OTM' | 'ITM' | ' '; // ' ' for non-option instruments
  strikeSelection: string; 
  stopLoss: number; // in percentage
  targetType: 'percent' | 'points'; 
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
  ironCondor: StrategyTemplate;
  bullCallSpread: StrategyTemplate;
  // Add more template keys here as needed
}

const strategyTemplates: StrategyTemplates = {
  ironCondor: {
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
      {
        legType: "SELL",
        expiry: "weekly",
        quantity: 75,
        optionType: "CALL",
        strikeType: "OTM",
        strikeSelection: "OTM200",
        stopLoss: 25,
        targetType: "percent",
        target: 60
      },
      {
        legType: "SELL",
        expiry: "weekly",
        quantity: 75,
        optionType: "PUT",
        strikeType: "OTM",
        strikeSelection: "OTM200",
        stopLoss: 25,
        targetType: "percent",
        target: 60
      },
      {
        legType: "BUY",
        expiry: "weekly",
        quantity: 75,
        optionType: "CALL",
        strikeType: "OTM",
        strikeSelection: "OTM400",
        stopLoss: 0,
        targetType: "percent",
        target: 60
      },
      {
        legType: "BUY",
        expiry: "weekly",
        quantity: 75,
        optionType: "PUT",
        strikeType: "OTM",
        strikeSelection: "OTM400",
        stopLoss: 0,
        targetType: "percent",
        target: 60
      }
    ], 
  },
  bullCallSpread: {
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
    },
    orderLegs: [
      {
        legType: "SELL",
        expiry: "monthly",
        quantity: 30,
        optionType: "CALL",
        strikeType: "OTM",
        strikeSelection: "OTM200",
        stopLoss: 0,
        targetType: "percent",
        target: 50
      },
      {
        legType: "BUY",
        expiry: "monthly",
        quantity: 30,
        optionType: "CALL",
        strikeType: "OTM",
        strikeSelection: "OTM200",
        stopLoss: 0,
        targetType: "percent",
        target: 50
      }
    ],
  }
};

export default strategyTemplates;