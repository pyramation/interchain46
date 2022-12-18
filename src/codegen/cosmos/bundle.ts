import * as _3 from "./app/module/v1alpha1/module";
import * as _4 from "./app/v1alpha1/config";
import * as _5 from "./app/v1alpha1/module";
import * as _6 from "./app/v1alpha1/query";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./authz/v1beta1/authz";
import * as _11 from "./authz/v1beta1/event";
import * as _12 from "./authz/v1beta1/genesis";
import * as _13 from "./authz/v1beta1/query";
import * as _14 from "./authz/v1beta1/tx";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/kv/v1beta1/kv";
import * as _22 from "./base/node/v1beta1/query";
import * as _23 from "./base/query/v1beta1/pagination";
import * as _24 from "./base/reflection/v1beta1/reflection";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/snapshots/v1beta1/snapshot";
import * as _27 from "./base/store/v1beta1/commit_info";
import * as _28 from "./base/store/v1beta1/listening";
import * as _29 from "./base/tendermint/v1beta1/query";
import * as _30 from "./base/tendermint/v1beta1/types";
import * as _31 from "./base/v1beta1/coin";
import * as _32 from "./capability/v1beta1/capability";
import * as _33 from "./capability/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/genesis";
import * as _35 from "./crisis/v1beta1/tx";
import * as _36 from "./crypto/ed25519/keys";
import * as _37 from "./crypto/hd/v1/hd";
import * as _38 from "./crypto/keyring/v1/record";
import * as _39 from "./crypto/multisig/keys";
import * as _40 from "./crypto/secp256k1/keys";
import * as _41 from "./crypto/secp256r1/keys";
import * as _42 from "./distribution/v1beta1/distribution";
import * as _43 from "./distribution/v1beta1/genesis";
import * as _44 from "./distribution/v1beta1/query";
import * as _45 from "./distribution/v1beta1/tx";
import * as _46 from "./evidence/v1beta1/evidence";
import * as _47 from "./evidence/v1beta1/genesis";
import * as _48 from "./evidence/v1beta1/query";
import * as _49 from "./evidence/v1beta1/tx";
import * as _50 from "./feegrant/v1beta1/feegrant";
import * as _51 from "./feegrant/v1beta1/genesis";
import * as _52 from "./feegrant/v1beta1/query";
import * as _53 from "./feegrant/v1beta1/tx";
import * as _54 from "./genutil/v1beta1/genesis";
import * as _55 from "./gov/v1/genesis";
import * as _56 from "./gov/v1/gov";
import * as _57 from "./gov/v1/query";
import * as _58 from "./gov/v1/tx";
import * as _59 from "./gov/v1beta1/genesis";
import * as _60 from "./gov/v1beta1/gov";
import * as _61 from "./gov/v1beta1/query";
import * as _62 from "./gov/v1beta1/tx";
import * as _63 from "./group/v1/events";
import * as _64 from "./group/v1/genesis";
import * as _65 from "./group/v1/query";
import * as _66 from "./group/v1/tx";
import * as _67 from "./group/v1/types";
import * as _68 from "./mint/v1beta1/genesis";
import * as _69 from "./mint/v1beta1/mint";
import * as _70 from "./mint/v1beta1/query";
import * as _71 from "./msg/v1/msg";
import * as _72 from "./nft/v1beta1/event";
import * as _73 from "./nft/v1beta1/genesis";
import * as _74 from "./nft/v1beta1/nft";
import * as _75 from "./nft/v1beta1/query";
import * as _76 from "./nft/v1beta1/tx";
import * as _77 from "./orm/module/v1alpha1/module";
import * as _78 from "./orm/v1/orm";
import * as _79 from "./orm/v1alpha1/schema";
import * as _80 from "./params/v1beta1/params";
import * as _81 from "./params/v1beta1/query";
import * as _82 from "./slashing/v1beta1/genesis";
import * as _83 from "./slashing/v1beta1/query";
import * as _84 from "./slashing/v1beta1/slashing";
import * as _85 from "./slashing/v1beta1/tx";
import * as _86 from "./staking/v1beta1/authz";
import * as _87 from "./staking/v1beta1/genesis";
import * as _88 from "./staking/v1beta1/query";
import * as _89 from "./staking/v1beta1/staking";
import * as _90 from "./staking/v1beta1/tx";
import * as _91 from "./tx/signing/v1beta1/signing";
import * as _92 from "./tx/v1beta1/service";
import * as _93 from "./tx/v1beta1/tx";
import * as _94 from "./upgrade/v1beta1/query";
import * as _95 from "./upgrade/v1beta1/tx";
import * as _96 from "./upgrade/v1beta1/upgrade";
import * as _97 from "./vesting/v1beta1/tx";
import * as _98 from "./vesting/v1beta1/vesting";
import * as _118 from "./authz/v1beta1/tx.amino";
import * as _119 from "./bank/v1beta1/tx.amino";
import * as _120 from "./crisis/v1beta1/tx.amino";
import * as _121 from "./distribution/v1beta1/tx.amino";
import * as _122 from "./evidence/v1beta1/tx.amino";
import * as _123 from "./feegrant/v1beta1/tx.amino";
import * as _124 from "./gov/v1/tx.amino";
import * as _125 from "./gov/v1beta1/tx.amino";
import * as _126 from "./group/v1/tx.amino";
import * as _127 from "./nft/v1beta1/tx.amino";
import * as _128 from "./slashing/v1beta1/tx.amino";
import * as _129 from "./staking/v1beta1/tx.amino";
import * as _130 from "./upgrade/v1beta1/tx.amino";
import * as _131 from "./vesting/v1beta1/tx.amino";
import * as _132 from "./authz/v1beta1/tx.registry";
import * as _133 from "./bank/v1beta1/tx.registry";
import * as _134 from "./crisis/v1beta1/tx.registry";
import * as _135 from "./distribution/v1beta1/tx.registry";
import * as _136 from "./evidence/v1beta1/tx.registry";
import * as _137 from "./feegrant/v1beta1/tx.registry";
import * as _138 from "./gov/v1/tx.registry";
import * as _139 from "./gov/v1beta1/tx.registry";
import * as _140 from "./group/v1/tx.registry";
import * as _141 from "./nft/v1beta1/tx.registry";
import * as _142 from "./slashing/v1beta1/tx.registry";
import * as _143 from "./staking/v1beta1/tx.registry";
import * as _144 from "./upgrade/v1beta1/tx.registry";
import * as _145 from "./vesting/v1beta1/tx.registry";
import * as _146 from "./app/v1alpha1/query.rpc.Query";
import * as _147 from "./auth/v1beta1/query.rpc.Query";
import * as _148 from "./authz/v1beta1/query.rpc.Query";
import * as _149 from "./bank/v1beta1/query.rpc.Query";
import * as _150 from "./base/node/v1beta1/query.rpc.Service";
import * as _151 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _152 from "./distribution/v1beta1/query.rpc.Query";
import * as _153 from "./evidence/v1beta1/query.rpc.Query";
import * as _154 from "./feegrant/v1beta1/query.rpc.Query";
import * as _155 from "./gov/v1/query.rpc.Query";
import * as _156 from "./gov/v1beta1/query.rpc.Query";
import * as _157 from "./group/v1/query.rpc.Query";
import * as _158 from "./mint/v1beta1/query.rpc.Query";
import * as _159 from "./nft/v1beta1/query.rpc.Query";
import * as _160 from "./params/v1beta1/query.rpc.Query";
import * as _161 from "./slashing/v1beta1/query.rpc.Query";
import * as _162 from "./staking/v1beta1/query.rpc.Query";
import * as _163 from "./tx/v1beta1/service.rpc.Service";
import * as _164 from "./upgrade/v1beta1/query.rpc.Query";
import * as _165 from "./authz/v1beta1/tx.rpc.msg";
import * as _166 from "./bank/v1beta1/tx.rpc.msg";
import * as _167 from "./crisis/v1beta1/tx.rpc.msg";
import * as _168 from "./distribution/v1beta1/tx.rpc.msg";
import * as _169 from "./evidence/v1beta1/tx.rpc.msg";
import * as _170 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _171 from "./gov/v1/tx.rpc.msg";
import * as _172 from "./gov/v1beta1/tx.rpc.msg";
import * as _173 from "./group/v1/tx.rpc.msg";
import * as _174 from "./nft/v1beta1/tx.rpc.msg";
import * as _175 from "./slashing/v1beta1/tx.rpc.msg";
import * as _176 from "./staking/v1beta1/tx.rpc.msg";
import * as _177 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _178 from "./vesting/v1beta1/tx.rpc.msg";
import * as _179 from "./rpc.query";
import * as _180 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = { ..._3
      };
    }
    export const v1alpha1 = { ..._4,
      ..._5,
      ..._6,
      ..._146
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._7,
      ..._8,
      ..._9,
      ..._147
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._118,
      ..._132,
      ..._148,
      ..._165
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._119,
      ..._133,
      ..._149,
      ..._166
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._20
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._21
      };
    }
    export namespace node {
      export const v1beta1 = { ..._22,
        ..._150
      };
    }
    export namespace query {
      export const v1beta1 = { ..._23
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._24
      };
      export const v2alpha1 = { ..._25
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._26
      };
    }
    export namespace store {
      export const v1beta1 = { ..._27,
        ..._28
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._29,
        ..._30,
        ..._151
      };
    }
    export const v1beta1 = { ..._31
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._32,
      ..._33
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._34,
      ..._35,
      ..._120,
      ..._134,
      ..._167
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._36
    };
    export namespace hd {
      export const v1 = { ..._37
      };
    }
    export namespace keyring {
      export const v1 = { ..._38
      };
    }
    export const multisig = { ..._39
    };
    export const secp256k1 = { ..._40
    };
    export const secp256r1 = { ..._41
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._121,
      ..._135,
      ..._152,
      ..._168
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._122,
      ..._136,
      ..._153,
      ..._169
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._123,
      ..._137,
      ..._154,
      ..._170
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._54
    };
  }
  export namespace gov {
    export const v1 = { ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._124,
      ..._138,
      ..._155,
      ..._171
    };
    export const v1beta1 = { ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._125,
      ..._139,
      ..._156,
      ..._172
    };
  }
  export namespace group {
    export const v1 = { ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._126,
      ..._140,
      ..._157,
      ..._173
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._68,
      ..._69,
      ..._70,
      ..._158
    };
  }
  export namespace msg {
    export const v1 = { ..._71
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._127,
      ..._141,
      ..._159,
      ..._174
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = { ..._77
      };
    }
    export const v1 = { ..._78
    };
    export const v1alpha1 = { ..._79
    };
  }
  export namespace params {
    export const v1beta1 = { ..._80,
      ..._81,
      ..._160
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._128,
      ..._142,
      ..._161,
      ..._175
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._129,
      ..._143,
      ..._162,
      ..._176
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._91
      };
    }
    export const v1beta1 = { ..._92,
      ..._93,
      ..._163
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._94,
      ..._95,
      ..._96,
      ..._130,
      ..._144,
      ..._164,
      ..._177
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._97,
      ..._98,
      ..._131,
      ..._145,
      ..._178
    };
  }
  export const ClientFactory = { ..._179,
    ..._180
  };
}