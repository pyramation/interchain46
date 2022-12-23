import { cosmos } from '../src';
import Long from 'long';
import { MsgCreateGroupWithPolicy, DecisionPolicy_FromAmino } from '../src/codegen/cosmos/group/v1/tx';
import { DecisionPolicy_ToAmino } from '../src/codegen/cosmos/group/v1/types';

const { createGroupPolicy, createGroupWithPolicy } =
    cosmos.group.v1.MessageComposer.withTypeUrl;
const { PercentageDecisionPolicy } = cosmos.group.v1;

const msg = createGroupWithPolicy({
    admin: 'address',
    groupMetadata: 'https://some.ipfs.w3s.link/group_metadata.json',
    groupPolicyAsAdmin: true,
    groupPolicyMetadata: 'https://some.ipfs.w3s.link/group_metadata.json',
    members: [
        {
            address: 'address',
            weight: '10',
            metadata: 'First user'
        }
    ],
    decisionPolicy: {
        typeUrl: '/cosmos.group.v1.PercentageDecisionPolicy',
        value: PercentageDecisionPolicy.encode({
            percentage: '0.5',
            windows: {
                votingPeriod: {
                    nanos: 0,
                    seconds: Long.fromValue(100)
                },
                minExecutionPeriod: {
                    nanos: 0,
                    seconds: Long.fromValue(100)
                }
            }
        }).finish()
    }
});


it('toAmino', () => {
    const amino = MsgCreateGroupWithPolicy.toAmino(msg.value);
    expect(amino).toMatchSnapshot();
});

interface Intf {
    amino: any;
    orig: any;
    amino2: any;
}
const obj: Intf = {
    //
};

it('fromAmino 1', () => {
    obj.amino = MsgCreateGroupWithPolicy.toAmino(msg.value)
    expect(obj.amino).toMatchSnapshot();
});
it('emulate orig', () => {
    // console.log(obj.amino.decision_policy)

    expect(obj.amino.decision_policy).toMatchSnapshot();
    const subtlediff = PercentageDecisionPolicy.fromAmino(obj.amino.decision_policy.value);
    expect(subtlediff).toMatchSnapshot();
    const encodedVersion = DecisionPolicy_FromAmino(obj.amino.decision_policy);
    expect({ encodedVersion }).toMatchSnapshot();
    const decodedVersion = DecisionPolicy_ToAmino(encodedVersion);
    // console.log({ decodedVersion })
    expect({ decodedVersion }).toMatchSnapshot();

    const subtlediff2 = PercentageDecisionPolicy.fromAmino(obj.amino.decision_policy);
    expect(subtlediff2).toMatchSnapshot();
    console.log(subtlediff2);
    // obj.orig = MsgCreateGroupWithPolicy.fromAmino(obj.amino);
    // expect(obj.orig).toMatchSnapshot();
});
it('orig', () => {
    obj.orig = MsgCreateGroupWithPolicy.fromAmino(obj.amino);
    expect(obj.orig).toMatchSnapshot();
});
it('final', () => {
    obj.amino2 = MsgCreateGroupWithPolicy.toAmino(obj.orig);
    expect(obj.amino2).toEqual(obj.amino);
});

describe('PercentageDecisionPolicy', () => {
    //
});
