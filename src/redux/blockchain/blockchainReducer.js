const initialState = {
  loading: false,
  account: null,
  smartContract: null,
  SRCSmartContractObj: null,
  MCSmartContractObj: null,
  BTSmartContractObj: null,
  BVSmartContractObj: null,
  isEnableVisible: true,
  web3: null,
  errorMsg: "",
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "SET_ENABLE_VISIBILITY":
      return {
        ...state,
        isEnableVisible: action.payload
      };
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    case "CONNECTION_FAILED":
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
