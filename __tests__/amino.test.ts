import { cosmos } from '../src';
import Long from 'long';
import { MsgCreateGroupWithPolicy } from '../src/codegen/cosmos/group/v1/tx';

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
it('fromAmino', () => {
    const amino = MsgCreateGroupWithPolicy.toAmino(msg.value)
    expect(amino).toMatchSnapshot();
    const orig = MsgCreateGroupWithPolicy.fromAmino(amino);
    expect(orig).toMatchSnapshot();
    const amino2 = MsgCreateGroupWithPolicy.toAmino(orig);
    expect(amino2).toEqual(amino);
});
