import { cosmos } from '../src';
import Long from 'long';
import { MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyEncoded, MsgCreateGroupWithPolicyProtoMsg, DecisionPolicy_FromAmino } from '../src/codegen/cosmos/group/v1/tx';
import { DecisionPolicyWindows, DecisionPolicy_ToAmino, PercentageDecisionPolicyAmino } from '../src/codegen/cosmos/group/v1/types';
import { Msg } from '../src/codegen/cosmos/authz/v1beta1/tx.rpc.msg';

const { createGroupPolicy, createGroupWithPolicy } =
    cosmos.group.v1.MessageComposer.withTypeUrl;
const { PercentageDecisionPolicy } = cosmos.group.v1;

const msg1 = createGroupWithPolicy({
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
    decisionPolicy: PercentageDecisionPolicy.toProtoMsg({
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
    })
});


const policy: MsgCreateGroupWithPolicyEncoded = {
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
    decisionPolicy: PercentageDecisionPolicy.toProtoMsg({
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
    })
};

// const policyMsg: MsgCreateGroupWithPolicyProtoMsg = MsgCreateGroupWithPolicy.toProtoMsg(msg)
const protoMsg: MsgCreateGroupWithPolicyProtoMsg = MsgCreateGroupWithPolicy.toProtoMsg(policy)
const msg = {
    typeUrl: '/cosmos.group.v1.MsgCreateGroupWithPolicy',
    value: policy
}



// const msg = createGroupWithPolicy({
//     admin: 'address',
//     groupMetadata: 'https://some.ipfs.w3s.link/group_metadata.json',
//     groupPolicyAsAdmin: true,
//     groupPolicyMetadata: 'https://some.ipfs.w3s.link/group_metadata.json',
//     members: [
//         {
//             address: 'address',
//             weight: '10',
//             metadata: 'First user'
//         }
//     ],
//     decisionPolicy: {
//         typeUrl: '/cosmos.group.v1.PercentageDecisionPolicy',
//         value: PercentageDecisionPolicy.encode({
//             percentage: '0.5',
//             windows: {
//                 votingPeriod: {
//                     nanos: 0,
//                     seconds: Long.fromValue(100)
//                 },
//                 minExecutionPeriod: {
//                     nanos: 0,
//                     seconds: Long.fromValue(100)
//                 }
//             }
//         }).finish()
//     }
// });


it('where it breaks', () => {
    const myObj = MsgCreateGroupWithPolicy.toAmino(msg.value)
    // myObj is correct
    expect(myObj).toMatchSnapshot();

    const encodedVersion = DecisionPolicy_FromAmino(myObj.decision_policy);
    expect({ encodedVersion }).toMatchSnapshot();
    const decodedVersion = DecisionPolicy_ToAmino(encodedVersion);
    expect({ decodedVersion }).toMatchSnapshot();


    const encodedVersion2 = DecisionPolicy_FromAmino(decodedVersion);
    expect({ encodedVersion2 }).toMatchSnapshot();
    const decodedVersion2 = DecisionPolicy_ToAmino(encodedVersion2);
    expect({ decodedVersion2 }).toMatchSnapshot();



});

it('tests', () => {
    const objAmino = MsgCreateGroupWithPolicy.toAmino(msg.value)
    expect(objAmino).toMatchSnapshot();
    expect(objAmino.decision_policy).toMatchSnapshot();

    const encodedVersion = DecisionPolicy_FromAmino(objAmino.decision_policy);
    expect({ encodedVersion }).toMatchSnapshot();

    const decodedVersion = DecisionPolicy_ToAmino(encodedVersion);
    expect({ decodedVersion }).toMatchSnapshot();

    const simple1 = PercentageDecisionPolicy.fromAmino(objAmino.decision_policy.value);
    expect(simple1).toMatchSnapshot();

    const simple2 = PercentageDecisionPolicy.toAmino(simple1);
    expect(simple2).toMatchSnapshot();

    const origAttempt = MsgCreateGroupWithPolicy.fromAmino(objAmino);
    expect(origAttempt).toMatchSnapshot();

    // console.log({ origAttempt })

    const aminoFromOrig = MsgCreateGroupWithPolicy.toAmino(origAttempt);
    // console.log(JSON.stringify({ aminoFromOrig }, null, 2))
    // console.log(JSON.stringify({ objAmino }, null, 2))
    expect(aminoFromOrig).toEqual(objAmino);
});
