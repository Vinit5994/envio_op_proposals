/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  OptimismGovernorV6,
  OptimismGovernorV6_Initialized,
  OptimismGovernorV6_ProposalCanceled,
  OptimismGovernorV6_ProposalCreated,
  OptimismGovernorV6_ProposalDeadlineUpdated,
  OptimismGovernorV6_ProposalExecuted,
  OptimismGovernorV6_ProposalThresholdSet,
  OptimismGovernorV6_ProposalTypeUpdated,
  OptimismGovernorV6_QuorumNumeratorUpdated,
  OptimismGovernorV6_VoteCast,
  OptimismGovernorV6_VoteCastWithParams,
  OptimismGovernorV6_VotingDelaySet,
  OptimismGovernorV6_VotingPeriodSet,
} from "generated";

OptimismGovernorV6.Initialized.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.OptimismGovernorV6_Initialized.set(entity);
});

OptimismGovernorV6.ProposalCanceled.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_ProposalCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
  };

  context.OptimismGovernorV6_ProposalCanceled.set(entity);
});

OptimismGovernorV6.ProposalCreated.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_ProposalCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    proposer: event.params.proposer,
    targets: event.params.targets,
    values: event.params.values,
    signatures: event.params.signatures,
    calldatas: event.params.calldatas,
    startBlock: event.params.startBlock,
    endBlock: event.params.endBlock,
    description: event.params.description,
    proposalType: event.params.proposalType,
  };

  context.OptimismGovernorV6_ProposalCreated.set(entity);
});

OptimismGovernorV6.ProposalDeadlineUpdated.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_ProposalDeadlineUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    deadline: event.params.deadline,
  };

  context.OptimismGovernorV6_ProposalDeadlineUpdated.set(entity);
});

OptimismGovernorV6.ProposalExecuted.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_ProposalExecuted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
  };

  context.OptimismGovernorV6_ProposalExecuted.set(entity);
});

OptimismGovernorV6.ProposalThresholdSet.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_ProposalThresholdSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldProposalThreshold: event.params.oldProposalThreshold,
    newProposalThreshold: event.params.newProposalThreshold,
  };

  context.OptimismGovernorV6_ProposalThresholdSet.set(entity);
});

OptimismGovernorV6.ProposalTypeUpdated.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_ProposalTypeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    proposalType: event.params.proposalType,
  };

  context.OptimismGovernorV6_ProposalTypeUpdated.set(entity);
});

OptimismGovernorV6.QuorumNumeratorUpdated.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_QuorumNumeratorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldQuorumNumerator: event.params.oldQuorumNumerator,
    newQuorumNumerator: event.params.newQuorumNumerator,
  };

  context.OptimismGovernorV6_QuorumNumeratorUpdated.set(entity);
});

OptimismGovernorV6.VoteCast.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_VoteCast = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    proposalId: event.params.proposalId,
    support: event.params.support,
    weight: event.params.weight,
    reason: event.params.reason,
  };

  context.OptimismGovernorV6_VoteCast.set(entity);
});

OptimismGovernorV6.VoteCastWithParams.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_VoteCastWithParams = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    proposalId: event.params.proposalId,
    support: event.params.support,
    weight: event.params.weight,
    reason: event.params.reason,
    params: event.params.params,
  };

  context.OptimismGovernorV6_VoteCastWithParams.set(entity);
});

OptimismGovernorV6.VotingDelaySet.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_VotingDelaySet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVotingDelay: event.params.oldVotingDelay,
    newVotingDelay: event.params.newVotingDelay,
  };

  context.OptimismGovernorV6_VotingDelaySet.set(entity);
});

OptimismGovernorV6.VotingPeriodSet.handler(async ({ event, context }) => {
  const entity: OptimismGovernorV6_VotingPeriodSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVotingPeriod: event.params.oldVotingPeriod,
    newVotingPeriod: event.params.newVotingPeriod,
  };

  context.OptimismGovernorV6_VotingPeriodSet.set(entity);
});
