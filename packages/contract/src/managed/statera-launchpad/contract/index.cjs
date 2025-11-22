'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.8.1';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

var Sale;
(function (Sale) {
  Sale[Sale['Public'] = 0] = 'Public';
  Sale[Sale['Private'] = 1] = 'Private';
})(Sale = exports.Sale || (exports.Sale = {}));

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

const _descriptor_3 = new __compactRuntime.CompactTypeBoolean();

const _descriptor_4 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_5 = new __compactRuntime.CompactTypeEnum(1, 1);

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(4294967295n, 4);

class _SaleInfo_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_4.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_1.alignment().concat(_descriptor_5.alignment().concat(_descriptor_6.alignment()))))))))))))))));
  }
  fromValue(value_0) {
    return {
      target: _descriptor_1.fromValue(value_0),
      startTime: _descriptor_1.fromValue(value_0),
      endTime: _descriptor_1.fromValue(value_0),
      totalTokenAmount: _descriptor_2.fromValue(value_0),
      totalTokenSold: _descriptor_1.fromValue(value_0),
      saleInfoCID: _descriptor_0.fromValue(value_0),
      amountRaised: _descriptor_1.fromValue(value_0),
      acceptableExchangeToken: _descriptor_0.fromValue(value_0),
      hasEnded: _descriptor_3.fromValue(value_0),
      min: _descriptor_1.fromValue(value_0),
      max: _descriptor_1.fromValue(value_0),
      participants: _descriptor_4.fromValue(value_0),
      organizer: _descriptor_0.fromValue(value_0),
      hasWithdrawn: _descriptor_3.fromValue(value_0),
      exchangeRatio: _descriptor_1.fromValue(value_0),
      saleType: _descriptor_5.fromValue(value_0),
      slope: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.target).concat(_descriptor_1.toValue(value_0.startTime).concat(_descriptor_1.toValue(value_0.endTime).concat(_descriptor_2.toValue(value_0.totalTokenAmount).concat(_descriptor_1.toValue(value_0.totalTokenSold).concat(_descriptor_0.toValue(value_0.saleInfoCID).concat(_descriptor_1.toValue(value_0.amountRaised).concat(_descriptor_0.toValue(value_0.acceptableExchangeToken).concat(_descriptor_3.toValue(value_0.hasEnded).concat(_descriptor_1.toValue(value_0.min).concat(_descriptor_1.toValue(value_0.max).concat(_descriptor_4.toValue(value_0.participants).concat(_descriptor_0.toValue(value_0.organizer).concat(_descriptor_3.toValue(value_0.hasWithdrawn).concat(_descriptor_1.toValue(value_0.exchangeRatio).concat(_descriptor_5.toValue(value_0.saleType).concat(_descriptor_6.toValue(value_0.slope)))))))))))))))));
  }
}

const _descriptor_7 = new _SaleInfo_0();

class _FundingInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_3.alignment());
  }
  fromValue(value_0) {
    return {
      privateStateHash: _descriptor_0.fromValue(value_0),
      claimed: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.privateStateHash).concat(_descriptor_3.toValue(value_0.claimed));
  }
}

const _descriptor_8 = new _FundingInfo_0();

class _QualifiedCoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_1.alignment())));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_2.fromValue(value_0),
      mt_index: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_2.toValue(value_0.value).concat(_descriptor_1.toValue(value_0.mt_index))));
  }
}

const _descriptor_9 = new _QualifiedCoinInfo_0();

class _CoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_2.toValue(value_0.value)));
  }
}

const _descriptor_10 = new _CoinInfo_0();

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_11 = new _ZswapCoinPublicKey_0();

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_12 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_11.alignment().concat(_descriptor_12.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_3.fromValue(value_0),
      left: _descriptor_11.fromValue(value_0),
      right: _descriptor_12.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_left).concat(_descriptor_11.toValue(value_0.left).concat(_descriptor_12.toValue(value_0.right)));
  }
}

const _descriptor_13 = new _Either_0();

class _UserPrivateState_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment())));
  }
  fromValue(value_0) {
    return {
      saleId: _descriptor_0.fromValue(value_0),
      contribution: _descriptor_2.fromValue(value_0),
      totalAllocation: _descriptor_1.fromValue(value_0),
      claimedAllocation: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.saleId).concat(_descriptor_2.toValue(value_0.contribution).concat(_descriptor_1.toValue(value_0.totalAllocation).concat(_descriptor_1.toValue(value_0.claimedAllocation))));
  }
}

const _descriptor_14 = new _UserPrivateState_0();

class _Maybe_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_10.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_3.fromValue(value_0),
      value: _descriptor_10.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_some).concat(_descriptor_10.toValue(value_0.value));
  }
}

const _descriptor_15 = new _Maybe_0();

class _SendResult_0 {
  alignment() {
    return _descriptor_15.alignment().concat(_descriptor_10.alignment());
  }
  fromValue(value_0) {
    return {
      change: _descriptor_15.fromValue(value_0),
      sent: _descriptor_10.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_15.toValue(value_0.change).concat(_descriptor_10.toValue(value_0.sent));
  }
}

const _descriptor_16 = new _SendResult_0();

const _descriptor_17 = new __compactRuntime.CompactTypeField();

const _descriptor_18 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

const _descriptor_19 = new __compactRuntime.CompactTypeBytes(6);

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_10.alignment().concat(_descriptor_3.alignment().concat(_descriptor_0.alignment().concat(_descriptor_19.alignment())));
  }
  fromValue(value_0) {
    return {
      info: _descriptor_10.fromValue(value_0),
      dataType: _descriptor_3.fromValue(value_0),
      data: _descriptor_0.fromValue(value_0),
      domain_sep: _descriptor_19.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_10.toValue(value_0.info).concat(_descriptor_3.toValue(value_0.dataType).concat(_descriptor_0.toValue(value_0.data).concat(_descriptor_19.toValue(value_0.domain_sep))));
  }
}

const _descriptor_20 = new _CoinPreimage_0();

const _descriptor_21 = new __compactRuntime.CompactTypeVector(2, _descriptor_17);

const _descriptor_22 = new __compactRuntime.CompactTypeVector(3, _descriptor_17);

const _descriptor_23 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    if (typeof(witnesses_0.local_secret_key) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named local_secret_key');
    }
    if (typeof(witnesses_0.generate_sale_id) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named generate_sale_id');
    }
    if (typeof(witnesses_0.get_current_time) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named get_current_time');
    }
    if (typeof(witnesses_0.calculateAllocation) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named calculateAllocation');
    }
    if (typeof(witnesses_0.update_user_private_state) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named update_user_private_state');
    }
    if (typeof(witnesses_0.get_user_private_state_hash) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named get_user_private_state_hash');
    }
    if (typeof(witnesses_0.remove_sale_from_private_state) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named remove_sale_from_private_state');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      createYourToken: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`createYourToken: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const domain_sep_0 = args_1[1];
        const total_amount_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('createYourToken',
                                      'argument 1 (as invoked from Typescript)',
                                      'TokenMint.compact line 7 char 5',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(domain_sep_0.buffer instanceof ArrayBuffer && domain_sep_0.BYTES_PER_ELEMENT === 1 && domain_sep_0.length === 32)) {
          __compactRuntime.type_error('createYourToken',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'TokenMint.compact line 7 char 5',
                                      'Bytes<32>',
                                      domain_sep_0)
        }
        if (!(typeof(total_amount_0) === 'bigint' && total_amount_0 >= 0n && total_amount_0 <= 18446744073709551615n)) {
          __compactRuntime.type_error('createYourToken',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'TokenMint.compact line 7 char 5',
                                      'Uint<0..18446744073709551615>',
                                      total_amount_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(domain_sep_0).concat(_descriptor_1.toValue(total_amount_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_1.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._createYourToken_0(context,
                                                 partialProofData,
                                                 domain_sep_0,
                                                 total_amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      createSale: (...args_1) => {
        if (args_1.length !== 11) {
          throw new __compactRuntime.CompactError(`createSale: expected 11 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const start_price_0 = args_1[1];
        const total_amount_0 = args_1[2];
        const total_amount_sold_0 = args_1[3];
        const exchange_token_0 = args_1[4];
        const end_time_0 = args_1[5];
        const min_0 = args_1[6];
        const max_0 = args_1[7];
        const infoCID_0 = args_1[8];
        const price_slope_0 = args_1[9];
        const isPrivate_0 = args_1[10];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('createSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(start_price_0) === 'bigint' && start_price_0 >= 0n && start_price_0 <= 18446744073709551615n)) {
          __compactRuntime.type_error('createSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Uint<0..18446744073709551615>',
                                      start_price_0)
        }
        if (!(typeof(total_amount_0) === 'bigint' && total_amount_0 >= 0n && total_amount_0 <= 18446744073709551615n)) {
          __compactRuntime.type_error('createSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Uint<0..18446744073709551615>',
                                      total_amount_0)
        }
        if (!(typeof(total_amount_sold_0) === 'bigint' && total_amount_sold_0 >= 0n && total_amount_sold_0 <= 18446744073709551615n)) {
          __compactRuntime.type_error('createSale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Uint<0..18446744073709551615>',
                                      total_amount_sold_0)
        }
        if (!(exchange_token_0.buffer instanceof ArrayBuffer && exchange_token_0.BYTES_PER_ELEMENT === 1 && exchange_token_0.length === 32)) {
          __compactRuntime.type_error('createSale',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Bytes<32>',
                                      exchange_token_0)
        }
        if (!(typeof(end_time_0) === 'bigint' && end_time_0 >= 0n && end_time_0 <= 18446744073709551615n)) {
          __compactRuntime.type_error('createSale',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Uint<0..18446744073709551615>',
                                      end_time_0)
        }
        if (!(typeof(min_0) === 'bigint' && min_0 >= 0n && min_0 <= 18446744073709551615n)) {
          __compactRuntime.type_error('createSale',
                                      'argument 6 (argument 7 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Uint<0..18446744073709551615>',
                                      min_0)
        }
        if (!(typeof(max_0) === 'bigint' && max_0 >= 0n && max_0 <= 18446744073709551615n)) {
          __compactRuntime.type_error('createSale',
                                      'argument 7 (argument 8 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Uint<0..18446744073709551615>',
                                      max_0)
        }
        if (!(infoCID_0.buffer instanceof ArrayBuffer && infoCID_0.BYTES_PER_ELEMENT === 1 && infoCID_0.length === 32)) {
          __compactRuntime.type_error('createSale',
                                      'argument 8 (argument 9 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Bytes<32>',
                                      infoCID_0)
        }
        if (!(typeof(price_slope_0) === 'bigint' && price_slope_0 >= 0n && price_slope_0 <= 4294967295n)) {
          __compactRuntime.type_error('createSale',
                                      'argument 9 (argument 10 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Uint<0..4294967295>',
                                      price_slope_0)
        }
        if (!(typeof(isPrivate_0) === 'boolean')) {
          __compactRuntime.type_error('createSale',
                                      'argument 10 (argument 11 as invoked from Typescript)',
                                      'SalesManager.compact line 10 char 5',
                                      'Boolean',
                                      isPrivate_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(start_price_0).concat(_descriptor_1.toValue(total_amount_0).concat(_descriptor_1.toValue(total_amount_sold_0).concat(_descriptor_0.toValue(exchange_token_0).concat(_descriptor_1.toValue(end_time_0).concat(_descriptor_1.toValue(min_0).concat(_descriptor_1.toValue(max_0).concat(_descriptor_0.toValue(infoCID_0).concat(_descriptor_6.toValue(price_slope_0).concat(_descriptor_3.toValue(isPrivate_0)))))))))),
            alignment: _descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_6.alignment().concat(_descriptor_3.alignment())))))))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._createSale_0(context,
                                            partialProofData,
                                            start_price_0,
                                            total_amount_0,
                                            total_amount_sold_0,
                                            exchange_token_0,
                                            end_time_0,
                                            min_0,
                                            max_0,
                                            infoCID_0,
                                            price_slope_0,
                                            isPrivate_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      fundSale: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`fundSale: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const sale_id_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('fundSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'SalesManager.compact line 54 char 5',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0n && coin_0.value <= 340282366920938463463374607431768211455n)) {
          __compactRuntime.type_error('fundSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'SalesManager.compact line 54 char 5',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        }
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32)) {
          __compactRuntime.type_error('fundSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'SalesManager.compact line 54 char 5',
                                      'Bytes<32>',
                                      sale_id_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_10.toValue(coin_0).concat(_descriptor_0.toValue(sale_id_0)),
            alignment: _descriptor_10.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._fundSale_0(context,
                                          partialProofData,
                                          coin_0,
                                          sale_id_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      claimTokens: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`claimTokens: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('claimTokens',
                                      'argument 1 (as invoked from Typescript)',
                                      'SalesManager.compact line 108 char 5',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32)) {
          __compactRuntime.type_error('claimTokens',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'SalesManager.compact line 108 char 5',
                                      'Bytes<32>',
                                      sale_id_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._claimTokens_0(context,
                                             partialProofData,
                                             sale_id_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      refund: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`refund: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        const refundAmount_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('refund',
                                      'argument 1 (as invoked from Typescript)',
                                      'SalesManager.compact line 149 char 5',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32)) {
          __compactRuntime.type_error('refund',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'SalesManager.compact line 149 char 5',
                                      'Bytes<32>',
                                      sale_id_0)
        }
        if (!(typeof(refundAmount_0) === 'bigint' && refundAmount_0 >= 0n && refundAmount_0 <= 18446744073709551615n)) {
          __compactRuntime.type_error('refund',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'SalesManager.compact line 149 char 5',
                                      'Uint<0..18446744073709551615>',
                                      refundAmount_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0).concat(_descriptor_1.toValue(refundAmount_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_1.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._refund_0(context,
                                        partialProofData,
                                        sale_id_0,
                                        refundAmount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = {
      createYourToken: this.circuits.createYourToken,
      createSale: this.circuits.createSale,
      fundSale: this.circuits.fundSale,
      claimTokens: this.circuits.claimTokens,
      refund: this.circuits.refund
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 3) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 3 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    const address_0 = args_0[1];
    const initialNonce_0 = args_0[2];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!(typeof(address_0) === 'object' && address_0.bytes.buffer instanceof ArrayBuffer && address_0.bytes.BYTES_PER_ELEMENT === 1 && address_0.bytes.length === 32)) {
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 1 (argument 2 as invoked from Typescript)',
                                  'main.compact line 17 char 1',
                                  'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                  address_0)
    }
    if (!(initialNonce_0.buffer instanceof ArrayBuffer && initialNonce_0.BYTES_PER_ELEMENT === 1 && initialNonce_0.length === 32)) {
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 2 (argument 3 as invoked from Typescript)',
                                  'main.compact line 17 char 1',
                                  'Bytes<32>',
                                  initialNonce_0)
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('createYourToken', new __compactRuntime.ContractOperation());
    state_0.setOperation('createSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('fundSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('claimTokens', new __compactRuntime.ContractOperation());
    state_0.setOperation('refund', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(0n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue({ nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n, mt_index: 0n }),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(1n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue({ nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n, mt_index: 0n }),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(2n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue({ bytes: new Uint8Array(32) }),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(3n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(4n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(5n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(6n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(7n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(8n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(8n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(initialNonce_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_0 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(7n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_4.toValue(tmp_0),
                                              alignment: _descriptor_4.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(2n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(address_0),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  _some_0(value_0) { return { is_some: true, value: value_0 }; }
  _none_0() {
    return { is_some: false,
             value:
               { nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n } };
  }
  _left_0(value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  _right_0(value_0) {
    return { is_left: false, left: { bytes: new Uint8Array(32) }, right: value_0 };
  }
  _transientHash_0(value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_21, value_0);
    return result_0;
  }
  _transientHash_1(value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_22, value_0);
    return result_0;
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_18, value_0);
    return result_0;
  }
  _persistentHash_1(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_20, value_0);
    return result_0;
  }
  _persistentCommit_0(value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_14,
                                                       value_0,
                                                       rand_0);
    return result_0;
  }
  _persistentCommit_1(value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_18,
                                                       value_0,
                                                       rand_0);
    return result_0;
  }
  _degradeToTransient_0(x_0) {
    const result_0 = __compactRuntime.degradeToTransient(x_0);
    return result_0;
  }
  _upgradeFromTransient_0(x_0) {
    const result_0 = __compactRuntime.upgradeFromTransient(x_0);
    return result_0;
  }
  _ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_11.toValue(result_0),
      alignment: _descriptor_11.alignment()
    });
    return result_0;
  }
  _createZswapInput_0(context, partialProofData, coin_0) {
    const result_0 = __compactRuntime.createZswapInput(context, coin_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  _createZswapOutput_0(context, partialProofData, coin_0, recipient_0) {
    const result_0 = __compactRuntime.createZswapOutput(context,
                                                        coin_0,
                                                        recipient_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  _tokenType_0(domain_sep_0, contractAddress_0) {
    return this._persistentCommit_1([domain_sep_0, contractAddress_0.bytes],
                                    new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 100, 101, 114, 105, 118, 101, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  }
  _mintToken_0(context,
               partialProofData,
               domain_sep_0,
               value_0,
               nonce_0,
               recipient_0)
  {
    const coin_0 = { nonce: nonce_0,
                     color:
                       this._tokenType_0(domain_sep_0,
                                         _descriptor_12.fromValue(Contract._query(context,
                                                                                  partialProofData,
                                                                                  [
                                                                                   { dup: { n: 2 } },
                                                                                   { idx: { cached: true,
                                                                                            pushPath: false,
                                                                                            path: [
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_23.toValue(0n),
                                                                                                              alignment: _descriptor_23.alignment() } }] } },
                                                                                   { popeq: { cached: true,
                                                                                              result: undefined } }]).value)),
                     value: value_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(4n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(domain_sep_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 1 } },
                     { dup: { n: 1 } },
                     'member',
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(value_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     'neg',
                     { branch: { skip: 4 } },
                     { dup: { n: 2 } },
                     { dup: { n: 2 } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [ { tag: 'stack' }] } },
                     'add',
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    this._createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const cm_0 = this._coinCommitment_0(coin_0, recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(2n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return coin_0;
  }
  _evolveNonce_0(index_0, nonce_0) {
    return this._upgradeFromTransient_0(this._transientHash_1([__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                             new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                               index_0,
                                                               this._degradeToTransient_0(nonce_0)]));
  }
  _receive_0(context, partialProofData, coin_0) {
    const recipient_0 = this._right_0(_descriptor_12.fromValue(Contract._query(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 2 } },
                                                                                { idx: { cached: true,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_23.toValue(0n),
                                                                                                           alignment: _descriptor_23.alignment() } }] } },
                                                                                { popeq: { cached: true,
                                                                                           result: undefined } }]).value));
    this._createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const tmp_0 = this._coinCommitment_0(coin_0, recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(1n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return [];
  }
  _send_0(context, partialProofData, input_0, recipient_0, value_0) {
    const selfAddr_0 = _descriptor_12.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 2 } },
                                                                 { idx: { cached: true,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_23.toValue(0n),
                                                                                            alignment: _descriptor_23.alignment() } }] } },
                                                                 { popeq: { cached: true,
                                                                            result: undefined } }]).value);
    this._createZswapInput_0(context, partialProofData, input_0);
    const tmp_0 = this._coinNullifier_0(this._downcastQualifiedCoin_0(input_0),
                                        selfAddr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(0n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    let t_0;
    const change_0 = (t_0 = input_0.value,
                      (__compactRuntime.assert(!(t_0 < value_0),
                                               'result of subtraction would be negative'),
                       t_0 - value_0));
    const output_0 = { nonce:
                         this._upgradeFromTransient_0(this._transientHash_0([__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                           new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                             this._degradeToTransient_0(input_0.nonce)])),
                       color: input_0.color,
                       value: value_0 };
    this._createZswapOutput_0(context, partialProofData, output_0, recipient_0);
    const tmp_1 = this._coinCommitment_0(output_0, recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(2n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    if (this._equal_0(change_0, 0n)) {
      return { change: this._none_0(), sent: output_0 };
    } else {
      const changeCoin_0 = { nonce:
                               this._upgradeFromTransient_0(this._transientHash_0([__compactRuntime.convert_Uint8Array_to_bigint(30,
                                                                                                                                 new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101, 47, 50])),
                                                                                   this._degradeToTransient_0(input_0.nonce)])),
                             color: input_0.color,
                             value: change_0 };
      this._createZswapOutput_0(context,
                                partialProofData,
                                changeCoin_0,
                                this._right_0(selfAddr_0));
      const cm_0 = this._coinCommitment_0(changeCoin_0,
                                          this._right_0(selfAddr_0));
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(2n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(1n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      return { change: this._some_0(changeCoin_0), sent: output_0 };
    }
  }
  _mergeCoin_0(context, partialProofData, a_0, b_0) {
    const selfAddr_0 = _descriptor_12.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 2 } },
                                                                 { idx: { cached: true,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_23.toValue(0n),
                                                                                            alignment: _descriptor_23.alignment() } }] } },
                                                                 { popeq: { cached: true,
                                                                            result: undefined } }]).value);
    this._createZswapInput_0(context, partialProofData, a_0);
    const tmp_0 = this._coinNullifier_0(this._downcastQualifiedCoin_0(a_0),
                                        selfAddr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(0n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    this._createZswapInput_0(context, partialProofData, b_0);
    const tmp_1 = this._coinNullifier_0(this._downcastQualifiedCoin_0(b_0),
                                        selfAddr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(0n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    __compactRuntime.assert(this._equal_1(a_0.color, b_0.color),
                            'Can only merge coins of the same color');
    const newCoin_0 = { nonce:
                          this._upgradeFromTransient_0(this._transientHash_0([__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                            new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                              this._degradeToTransient_0(a_0.nonce)])),
                        color: a_0.color,
                        value:
                          ((t1) => {
                            if (t1 > 340282366920938463463374607431768211455n) {
                              throw new __compactRuntime.CompactError('<standard library>: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                            }
                            return t1;
                          })(a_0.value + b_0.value) };
    this._createZswapOutput_0(context,
                              partialProofData,
                              newCoin_0,
                              this._right_0(selfAddr_0));
    const cm_0 = this._coinCommitment_0(newCoin_0, this._right_0(selfAddr_0));
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(2n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(1n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return newCoin_0;
  }
  _mergeCoinImmediate_0(context, partialProofData, a_0, b_0) {
    return this._mergeCoin_0(context,
                             partialProofData,
                             a_0,
                             this._upcastQualifiedCoin_0(b_0));
  }
  _downcastQualifiedCoin_0(coin_0) {
    return { nonce: coin_0.nonce, color: coin_0.color, value: coin_0.value };
  }
  _upcastQualifiedCoin_0(coin_0) {
    return { nonce: coin_0.nonce,
             color: coin_0.color,
             value: coin_0.value,
             mt_index: 0n };
  }
  _coinCommitment_0(coin_0, recipient_0) {
    return this._persistentHash_1({ info: coin_0,
                                    dataType: recipient_0.is_left,
                                    data:
                                      recipient_0.is_left ?
                                      recipient_0.left.bytes :
                                      recipient_0.right.bytes,
                                    domain_sep:
                                      new Uint8Array([109, 100, 110, 58, 99, 99]) });
  }
  _coinNullifier_0(coin_0, addr_0) {
    return this._persistentHash_1({ info: coin_0,
                                    dataType: false,
                                    data: addr_0.bytes,
                                    domain_sep:
                                      new Uint8Array([109, 100, 110, 58, 99, 110]) });
  }
  _local_secret_key_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.local_secret_key(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.type_error('local_secret_key',
                                  'return value',
                                  'VariablesAndTypes.compact line 53 char 5',
                                  'Bytes<32>',
                                  result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _generate_sale_id_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.generate_sale_id(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.type_error('generate_sale_id',
                                  'return value',
                                  'VariablesAndTypes.compact line 54 char 5',
                                  'Bytes<32>',
                                  result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _get_current_time_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.get_current_time(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0n && result_0 <= 18446744073709551615n)) {
      __compactRuntime.type_error('get_current_time',
                                  'return value',
                                  'VariablesAndTypes.compact line 55 char 5',
                                  'Uint<0..18446744073709551615>',
                                  result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_1.toValue(result_0),
      alignment: _descriptor_1.alignment()
    });
    return result_0;
  }
  _calculateAllocation_0(context,
                         partialProofData,
                         ratio_0,
                         priceSlope_0,
                         contribution_0,
                         tokenSold_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.calculateAllocation(witnessContext_0,
                                                                              ratio_0,
                                                                              priceSlope_0,
                                                                              contribution_0,
                                                                              tokenSold_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0n && result_0 <= 18446744073709551615n)) {
      __compactRuntime.type_error('calculateAllocation',
                                  'return value',
                                  'VariablesAndTypes.compact line 56 char 5',
                                  'Uint<0..18446744073709551615>',
                                  result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_1.toValue(result_0),
      alignment: _descriptor_1.alignment()
    });
    return result_0;
  }
  _update_user_private_state_0(context, partialProofData, newPrivateState_0) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.update_user_private_state(witnessContext_0,
                                                                                    newPrivateState_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(Array.isArray(result_0) && result_0.length === 0 )) {
      __compactRuntime.type_error('update_user_private_state',
                                  'return value',
                                  'VariablesAndTypes.compact line 57 char 5',
                                  '[]',
                                  result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  _get_user_private_state_hash_0(context, partialProofData, saleId_0) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.get_user_private_state_hash(witnessContext_0,
                                                                                      saleId_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'object' && result_0.saleId.buffer instanceof ArrayBuffer && result_0.saleId.BYTES_PER_ELEMENT === 1 && result_0.saleId.length === 32 && typeof(result_0.contribution) === 'bigint' && result_0.contribution >= 0n && result_0.contribution <= 340282366920938463463374607431768211455n && typeof(result_0.totalAllocation) === 'bigint' && result_0.totalAllocation >= 0n && result_0.totalAllocation <= 18446744073709551615n && typeof(result_0.claimedAllocation) === 'bigint' && result_0.claimedAllocation >= 0n && result_0.claimedAllocation <= 18446744073709551615n)) {
      __compactRuntime.type_error('get_user_private_state_hash',
                                  'return value',
                                  'VariablesAndTypes.compact line 58 char 5',
                                  'struct UserPrivateState<saleId: Bytes<32>, contribution: Uint<0..340282366920938463463374607431768211455>, totalAllocation: Uint<0..18446744073709551615>, claimedAllocation: Uint<0..18446744073709551615>>',
                                  result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_14.toValue(result_0),
      alignment: _descriptor_14.alignment()
    });
    return result_0;
  }
  _remove_sale_from_private_state_0(context, partialProofData, saleId_0) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.remove_sale_from_private_state(witnessContext_0,
                                                                                         saleId_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(Array.isArray(result_0) && result_0.length === 0 )) {
      __compactRuntime.type_error('remove_sale_from_private_state',
                                  'return value',
                                  'VariablesAndTypes.compact line 59 char 5',
                                  '[]',
                                  result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  _public_key_0(sk_0) {
    return this._persistentHash_0([new Uint8Array([115, 116, 97, 116, 101, 114, 97, 45, 108, 97, 117, 110, 99, 104, 112, 97, 100, 58, 117, 115, 101, 114, 45, 112, 107, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0]);
  }
  _generatePrivateStateHash_0(metadata_0, userPk_0) {
    return this._persistentCommit_0(metadata_0, userPk_0);
  }
  _recieveFund_0(context, partialProofData, disclosedCoin_0) {
    this._receive_0(context, partialProofData, disclosedCoin_0);
    const coinToInsert_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                   partialProofData,
                                                                   [
                                                                    { dup: { n: 0 } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_23.toValue(1n),
                                                                                               alignment: _descriptor_23.alignment() } }] } },
                                                                    { popeq: { cached: false,
                                                                               result: undefined } }]).value).value
                           >
                           0n
                           ?
                           this._mergeCoinImmediate_0(context,
                                                      partialProofData,
                                                      _descriptor_9.fromValue(Contract._query(context,
                                                                                              partialProofData,
                                                                                              [
                                                                                               { dup: { n: 0 } },
                                                                                               { idx: { cached: false,
                                                                                                        pushPath: false,
                                                                                                        path: [
                                                                                                               { tag: 'value',
                                                                                                                 value: { value: _descriptor_23.toValue(1n),
                                                                                                                          alignment: _descriptor_23.alignment() } }] } },
                                                                                               { popeq: { cached: false,
                                                                                                          result: undefined } }]).value),
                                                      disclosedCoin_0)
                           :
                           disclosedCoin_0;
    const tmp_0 = this._right_0(_descriptor_12.fromValue(Contract._query(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 2 } },
                                                                          { idx: { cached: true,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_23.toValue(0n),
                                                                                                     alignment: _descriptor_23.alignment() } }] } },
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(1n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { dup: { n: 3 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_10.toValue(coinToInsert_0),
                                                                              alignment: _descriptor_10.alignment() },
                                                                            { value: _descriptor_13.toValue(tmp_0),
                                                                              alignment: _descriptor_13.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(1n),
                                                alignment: _descriptor_23.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(coinToInsert_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } }]);
    return [];
  }
  _createYourToken_0(context, partialProofData, domain_sep_0, total_amount_0) {
    const discloseDomainSep_0 = domain_sep_0;
    const disclosedAmount_0 = total_amount_0;
    __compactRuntime.assert(disclosedAmount_0 > 0n,
                            'token amount must be atleast 1');
    const newNonce_0 = this._evolveNonce_0(_descriptor_1.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_23.toValue(7n),
                                                                                                               alignment: _descriptor_23.alignment() } }] } },
                                                                                    { popeq: { cached: true,
                                                                                               result: undefined } }]).value),
                                           _descriptor_0.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_23.toValue(8n),
                                                                                                               alignment: _descriptor_23.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value));
    this._mintToken_0(context,
                      partialProofData,
                      discloseDomainSep_0,
                      disclosedAmount_0,
                      newNonce_0,
                      this._left_0(this._ownPublicKey_0(context,
                                                        partialProofData)));
    const tmp_0 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(7n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_4.toValue(tmp_0),
                                              alignment: _descriptor_4.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _createSale_0(context,
                partialProofData,
                start_price_0,
                total_amount_0,
                total_amount_sold_0,
                exchange_token_0,
                end_time_0,
                min_0,
                max_0,
                infoCID_0,
                price_slope_0,
                isPrivate_0)
  {
    __compactRuntime.assert(start_price_0 > 0n,
                            'Sale ratio must be greater than 0!');
    __compactRuntime.assert(total_amount_0 > 0n
                            &&
                            total_amount_0
                            <=
                            _descriptor_9.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(0n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value).value,
                            'Sale amount must be greater than 0!');
    const organizer_0 = this._public_key_0(this._local_secret_key_0(context,
                                                                    partialProofData));
    const saleId_0 = this._generate_sale_id_0(context, partialProofData);
    const current_time_0 = this._get_current_time_0(context, partialProofData);
    const tmp_0 = { target:
                      ((t1) => {
                        if (t1 > 18446744073709551615n) {
                          throw new __compactRuntime.CompactError('SalesManager.compact line 34 char 21: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                        }
                        return t1;
                      })(total_amount_0 * start_price_0),
                    startTime: current_time_0,
                    endTime: end_time_0,
                    totalTokenAmount: total_amount_0,
                    totalTokenSold: total_amount_sold_0,
                    saleInfoCID: infoCID_0,
                    amountRaised: 0n,
                    acceptableExchangeToken: exchange_token_0,
                    hasEnded: false,
                    min: min_0,
                    max: max_0,
                    participants: 0n,
                    organizer: new Uint8Array(32),
                    hasWithdrawn: false,
                    exchangeRatio: start_price_0,
                    saleType: isPrivate_0 ? 1 : 0,
                    slope: price_slope_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(5n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(saleId_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_0),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _fundSale_0(context, partialProofData, coin_0, sale_id_0) {
    const disclosedCoin_0 = coin_0;
    const disclosedCoinAmount_0 = disclosedCoin_0.value;
    const disclosedSaleId_0 = sale_id_0;
    __compactRuntime.assert(_descriptor_3.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(5n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(disclosedSaleId_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "This sale doesn't exist");
    const userPk_0 = this._ownPublicKey_0(context, partialProofData).bytes;
    const saleInfo_0 = _descriptor_7.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_23.toValue(5n),
                                                                                           alignment: _descriptor_23.alignment() } }] } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_0.toValue(disclosedSaleId_0),
                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value);
    if (saleInfo_0.saleType === 1) {
      __compactRuntime.assert(_descriptor_3.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_23.toValue(4n),
                                                                                                  alignment: _descriptor_23.alignment() } }] } },
                                                                       { push: { storage: false,
                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(userPk_0),
                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                       'member',
                                                                       { popeq: { cached: true,
                                                                                  result: undefined } }]).value),
                              'You are not eligible for this sale');
      __compactRuntime.assert(!saleInfo_0.hasEnded, 'This sale has ended');
      __compactRuntime.assert(this._equal_2(saleInfo_0.acceptableExchangeToken,
                                            disclosedCoin_0.color),
                              'Please provided the acceptable token');
      __compactRuntime.assert(disclosedCoinAmount_0 <= saleInfo_0.max
                              &&
                              disclosedCoinAmount_0 >= saleInfo_0.min,
                              'Amount entered breaches did not fall within threshold');
      __compactRuntime.assert(saleInfo_0.amountRaised < saleInfo_0.target,
                              'Sale target has already been achieved');
      this._recieveFund_0(context, partialProofData, disclosedCoin_0);
      const funder_0 = this._public_key_0(this._local_secret_key_0(context,
                                                                   partialProofData));
      const allocation_0 = this._calculateAllocation_0(context,
                                                       partialProofData,
                                                       saleInfo_0.exchangeRatio,
                                                       saleInfo_0.slope,
                                                       disclosedCoinAmount_0,
                                                       saleInfo_0.totalTokenSold);
      const newPrivateState_0 = { saleId: disclosedSaleId_0,
                                  contribution: disclosedCoinAmount_0,
                                  totalAllocation: allocation_0,
                                  claimedAllocation: 0n };
      this._update_user_private_state_0(context,
                                        partialProofData,
                                        newPrivateState_0);
      const userPrivateStateHash_0 = this._generatePrivateStateHash_0(newPrivateState_0,
                                                                      userPk_0);
      const tmp_0 = { privateStateHash: userPrivateStateHash_0, claimed: false };
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(6n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(funder_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_0),
                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
      const current_time_0 = this._get_current_time_0(context, partialProofData);
      const tmp_1 = { target: saleInfo_0.target,
                      startTime: saleInfo_0.startTime,
                      endTime: saleInfo_0.endTime,
                      totalTokenAmount: saleInfo_0.totalTokenAmount,
                      totalTokenSold:
                        ((t1) => {
                          if (t1 > 18446744073709551615n) {
                            throw new __compactRuntime.CompactError('SalesManager.compact line 104 char 29: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                          }
                          return t1;
                        })(disclosedCoinAmount_0 + saleInfo_0.totalTokenSold),
                      saleInfoCID: saleInfo_0.saleInfoCID,
                      amountRaised: 0n,
                      acceptableExchangeToken:
                        saleInfo_0.acceptableExchangeToken,
                      hasEnded: current_time_0 > saleInfo_0.endTime,
                      min: saleInfo_0.min,
                      max: saleInfo_0.max,
                      participants:
                        ((t1) => {
                          if (t1 > 65535n) {
                            throw new __compactRuntime.CompactError('SalesManager.compact line 102 char 27: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 65535');
                          }
                          return t1;
                        })(saleInfo_0.participants + 1n),
                      organizer: saleInfo_0.organizer,
                      hasWithdrawn: saleInfo_0.hasWithdrawn,
                      exchangeRatio: saleInfo_0.exchangeRatio,
                      saleType: saleInfo_0.saleType,
                      slope: saleInfo_0.slope };
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(5n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(disclosedSaleId_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_1),
                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
      return [];
    } else {
      return [];
    }
  }
  _claimTokens_0(context, partialProofData, sale_id_0) {
    const disclosedSaleId_0 = sale_id_0;
    const userPk_0 = this._ownPublicKey_0(context, partialProofData).bytes;
    __compactRuntime.assert(_descriptor_3.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(5n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(disclosedSaleId_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Sale does not exist');
    const saleInfo_0 = _descriptor_7.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_23.toValue(5n),
                                                                                           alignment: _descriptor_23.alignment() } }] } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_0.toValue(disclosedSaleId_0),
                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value);
    __compactRuntime.assert(saleInfo_0.hasEnded,
                            "Can't claim token until sale is over");
    const funderPk_0 = this._public_key_0(this._local_secret_key_0(context,
                                                                   partialProofData));
    __compactRuntime.assert(_descriptor_3.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(6n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(funderPk_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'You didnt not participate in this sale');
    const funderOnchainInfo_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                        partialProofData,
                                                                        [
                                                                         { dup: { n: 0 } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_23.toValue(6n),
                                                                                                    alignment: _descriptor_23.alignment() } }] } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_0.toValue(funderPk_0),
                                                                                                    alignment: _descriptor_0.alignment() } }] } },
                                                                         { popeq: { cached: false,
                                                                                    result: undefined } }]).value);
    const funderPrivateState_0 = this._get_user_private_state_hash_0(context,
                                                                     partialProofData,
                                                                     disclosedSaleId_0);
    const funderPrivateStateHash_0 = this._generatePrivateStateHash_0(funderPrivateState_0,
                                                                      userPk_0);
    __compactRuntime.assert(this._equal_3(funderPrivateStateHash_0,
                                          funderOnchainInfo_0.privateStateHash),
                            'Private state and onchain state mismatch');
    __compactRuntime.assert(funderOnchainInfo_0.claimed === false
                            ||
                            this._equal_4(funderPrivateState_0.totalAllocation,
                                          funderPrivateState_0.claimedAllocation),
                            'you have already claimed your token');
    const sendResult_0 = this._send_0(context,
                                      partialProofData,
                                      _descriptor_9.fromValue(Contract._query(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_23.toValue(0n),
                                                                                                          alignment: _descriptor_23.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value),
                                      this._left_0(this._ownPublicKey_0(context,
                                                                        partialProofData)),
                                      funderPrivateState_0.totalAllocation);
    if (sendResult_0.change.is_some) {
      const tmp_0 = sendResult_0.change.value;
      const tmp_1 = this._right_0(_descriptor_12.fromValue(Contract._query(context,
                                                                           partialProofData,
                                                                           [
                                                                            { dup: { n: 2 } },
                                                                            { idx: { cached: true,
                                                                                     pushPath: false,
                                                                                     path: [
                                                                                            { tag: 'value',
                                                                                              value: { value: _descriptor_23.toValue(0n),
                                                                                                       alignment: _descriptor_23.alignment() } }] } },
                                                                            { popeq: { cached: true,
                                                                                       result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(0n),
                                                                              alignment: _descriptor_23.alignment() }).encode() } },
                       { dup: { n: 3 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_10.toValue(tmp_0),
                                                                                alignment: _descriptor_10.alignment() },
                                                                              { value: _descriptor_13.toValue(tmp_1),
                                                                                alignment: _descriptor_13.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(1n),
                                                  alignment: _descriptor_23.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_0),
                                                                              alignment: _descriptor_10.alignment() }).encode() } },
                       { swap: { n: 0 } },
                       { concat: { cached: true, n: 91 } },
                       { ins: { cached: false, n: 1 } }]);
    } else {
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(0n),
                                                                              alignment: _descriptor_23.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue({ nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n, mt_index: 0n }),
                                                                              alignment: _descriptor_9.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } }]);
    }
    const newPrivateState_0 = { saleId: funderPrivateState_0.saleId,
                                contribution: funderPrivateState_0.contribution,
                                totalAllocation:
                                  funderPrivateState_0.totalAllocation,
                                claimedAllocation:
                                  funderPrivateState_0.totalAllocation };
    this._update_user_private_state_0(context,
                                      partialProofData,
                                      newPrivateState_0);
    const newFunderPrivateStateHash_0 = this._generatePrivateStateHash_0(newPrivateState_0,
                                                                         userPk_0);
    const tmp_2 = { privateStateHash: newFunderPrivateStateHash_0, claimed: true };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(6n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(funderPk_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_2),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _refund_0(context, partialProofData, sale_id_0, refundAmount_0) {
    const disclosedSaleId_0 = sale_id_0;
    const disclosedRefundAmount_0 = refundAmount_0;
    const userPk_0 = this._ownPublicKey_0(context, partialProofData).bytes;
    __compactRuntime.assert(_descriptor_3.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(5n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(disclosedSaleId_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Sale does not exist');
    const saleInfo_0 = _descriptor_7.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_23.toValue(5n),
                                                                                           alignment: _descriptor_23.alignment() } }] } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_0.toValue(disclosedSaleId_0),
                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value);
    __compactRuntime.assert(!saleInfo_0.hasEnded,
                            "Sale is over can't apply for a refund");
    const funderPk_0 = this._public_key_0(this._local_secret_key_0(context,
                                                                   partialProofData));
    __compactRuntime.assert(_descriptor_3.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(6n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(funderPk_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'You didnt not participate in this sale');
    const funderOnchainInfo_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                        partialProofData,
                                                                        [
                                                                         { dup: { n: 0 } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_23.toValue(6n),
                                                                                                    alignment: _descriptor_23.alignment() } }] } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_0.toValue(funderPk_0),
                                                                                                    alignment: _descriptor_0.alignment() } }] } },
                                                                         { popeq: { cached: false,
                                                                                    result: undefined } }]).value);
    const funderPrivateState_0 = this._get_user_private_state_hash_0(context,
                                                                     partialProofData,
                                                                     disclosedSaleId_0);
    const funderPrivateStateHash_0 = this._generatePrivateStateHash_0(funderPrivateState_0,
                                                                      userPk_0);
    __compactRuntime.assert(this._equal_5(funderPrivateStateHash_0,
                                          funderOnchainInfo_0.privateStateHash),
                            'Private state and onchain state mismatch');
    __compactRuntime.assert(funderPrivateState_0.contribution
                            >=
                            disclosedRefundAmount_0,
                            'Refund can not be greater than contribution');
    if (!this._equal_6(funderPrivateState_0.contribution,
                       disclosedRefundAmount_0))
    {
      const sendResult_0 = this._send_0(context,
                                        partialProofData,
                                        _descriptor_9.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 0 } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_23.toValue(1n),
                                                                                                            alignment: _descriptor_23.alignment() } }] } },
                                                                                 { popeq: { cached: false,
                                                                                            result: undefined } }]).value),
                                        this._left_0(this._ownPublicKey_0(context,
                                                                          partialProofData)),
                                        disclosedRefundAmount_0);
      if (sendResult_0.change.is_some) {
        const tmp_0 = sendResult_0.change.value;
        const tmp_1 = this._right_0(_descriptor_12.fromValue(Contract._query(context,
                                                                             partialProofData,
                                                                             [
                                                                              { dup: { n: 2 } },
                                                                              { idx: { cached: true,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_23.toValue(0n),
                                                                                                         alignment: _descriptor_23.alignment() } }] } },
                                                                              { popeq: { cached: true,
                                                                                         result: undefined } }]).value));
        Contract._query(context,
                        partialProofData,
                        [
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(1n),
                                                                                alignment: _descriptor_23.alignment() }).encode() } },
                         { dup: { n: 3 } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                                { value: _descriptor_10.toValue(tmp_0),
                                                                                  alignment: _descriptor_10.alignment() },
                                                                                { value: _descriptor_13.toValue(tmp_1),
                                                                                  alignment: _descriptor_13.alignment() }
                                                                              )).encode() } },
                         { idx: { cached: true,
                                  pushPath: false,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_23.toValue(1n),
                                                    alignment: _descriptor_23.alignment() } },
                                         { tag: 'stack' }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_0),
                                                                                alignment: _descriptor_10.alignment() }).encode() } },
                         { swap: { n: 0 } },
                         { concat: { cached: true, n: 91 } },
                         { ins: { cached: false, n: 1 } }]);
      } else {
        Contract._query(context,
                        partialProofData,
                        [
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(1n),
                                                                                alignment: _descriptor_23.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue({ nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n, mt_index: 0n }),
                                                                                alignment: _descriptor_9.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } }]);
      }
      let t_0;
      const contribution_0 = (t_0 = funderPrivateState_0.contribution,
                              (__compactRuntime.assert(!(t_0
                                                         <
                                                         disclosedRefundAmount_0),
                                                       'result of subtraction would be negative'),
                               t_0 - disclosedRefundAmount_0));
      const allocation_0 = this._calculateAllocation_0(context,
                                                       partialProofData,
                                                       saleInfo_0.exchangeRatio,
                                                       saleInfo_0.slope,
                                                       contribution_0,
                                                       saleInfo_0.totalTokenSold);
      const newPrivateState_0 = { saleId: funderPrivateState_0.saleId,
                                  contribution: contribution_0,
                                  totalAllocation: allocation_0,
                                  claimedAllocation:
                                    funderPrivateState_0.claimedAllocation };
      this._update_user_private_state_0(context,
                                        partialProofData,
                                        newPrivateState_0);
      const userPrivateStateHash_0 = this._generatePrivateStateHash_0(newPrivateState_0,
                                                                      userPk_0);
      const tmp_2 = { privateStateHash: userPrivateStateHash_0, claimed: false };
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(6n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(funderPk_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_2),
                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      const sendResult_1 = this._send_0(context,
                                        partialProofData,
                                        _descriptor_9.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 0 } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_23.toValue(1n),
                                                                                                            alignment: _descriptor_23.alignment() } }] } },
                                                                                 { popeq: { cached: false,
                                                                                            result: undefined } }]).value),
                                        this._left_0(this._ownPublicKey_0(context,
                                                                          partialProofData)),
                                        disclosedRefundAmount_0);
      if (sendResult_1.change.is_some) {
        const tmp_3 = sendResult_1.change.value;
        const tmp_4 = this._right_0(_descriptor_12.fromValue(Contract._query(context,
                                                                             partialProofData,
                                                                             [
                                                                              { dup: { n: 2 } },
                                                                              { idx: { cached: true,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_23.toValue(0n),
                                                                                                         alignment: _descriptor_23.alignment() } }] } },
                                                                              { popeq: { cached: true,
                                                                                         result: undefined } }]).value));
        Contract._query(context,
                        partialProofData,
                        [
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(1n),
                                                                                alignment: _descriptor_23.alignment() }).encode() } },
                         { dup: { n: 3 } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                                { value: _descriptor_10.toValue(tmp_3),
                                                                                  alignment: _descriptor_10.alignment() },
                                                                                { value: _descriptor_13.toValue(tmp_4),
                                                                                  alignment: _descriptor_13.alignment() }
                                                                              )).encode() } },
                         { idx: { cached: true,
                                  pushPath: false,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_23.toValue(1n),
                                                    alignment: _descriptor_23.alignment() } },
                                         { tag: 'stack' }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_3),
                                                                                alignment: _descriptor_10.alignment() }).encode() } },
                         { swap: { n: 0 } },
                         { concat: { cached: true, n: 91 } },
                         { ins: { cached: false, n: 1 } }]);
      } else {
        Contract._query(context,
                        partialProofData,
                        [
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(1n),
                                                                                alignment: _descriptor_23.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue({ nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n, mt_index: 0n }),
                                                                                alignment: _descriptor_9.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } }]);
      }
      this._remove_sale_from_private_state_0(context,
                                             partialProofData,
                                             disclosedSaleId_0);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(6n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(disclosedSaleId_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    }
    return [];
  }
  _equal_0(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_2(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_3(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_4(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
  _equal_5(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_6(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get TVL() {
      return _descriptor_9.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_23.toValue(0n),
                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get raisedTokenPool() {
      return _descriptor_9.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_23.toValue(1n),
                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get superAdmin() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_23.toValue(3n),
                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    contractSalesInfo: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(5n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                                                               alignment: _descriptor_1.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(5n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'VariablesAndTypes.compact line 13 char 5',
                                      'Bytes<32>',
                                      key_0)
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(5n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'VariablesAndTypes.compact line 13 char 5',
                                      'Bytes<32>',
                                      key_0)
        }
        return _descriptor_7.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(5n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[5];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_7.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    fundingInfo: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(6n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                                                               alignment: _descriptor_1.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(6n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'VariablesAndTypes.compact line 14 char 5',
                                      'Bytes<32>',
                                      key_0)
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(6n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'VariablesAndTypes.compact line 14 char 5',
                                      'Bytes<32>',
                                      key_0)
        }
        return _descriptor_8.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(6n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[6];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_8.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({
  local_secret_key: (...args) => undefined,
  generate_sale_id: (...args) => undefined,
  get_current_time: (...args) => undefined,
  calculateAllocation: (...args) => undefined,
  update_user_private_state: (...args) => undefined,
  get_user_private_state_hash: (...args) => undefined,
  remove_sale_from_private_state: (...args) => undefined
});
const pureCircuits = {};
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
