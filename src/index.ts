export * from './codegen';

import { cosmos } from './codegen';

const {
    createGroupWithPolicy
} = cosmos.group.v1.MessageComposer.withTypeUrl;

const msg = createGroupWithPolicy({
    admin: 'a string',
    groupMetadata: 'string here',
    groupPolicyAsAdmin: true,
    groupPolicyMetadata: 'a string here too',
    members: [], // MemberRequest[],
    decisionPolicy: {
        typeUrl: '/cosmos.group.v1.PercentageDecisionPolicy',
        value: {

        }
    }

})