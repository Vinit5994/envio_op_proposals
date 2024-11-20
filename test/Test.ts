import assert from "assert";
import { 
  TestHelpers,
  OptimismGovernorV6_Initialized
} from "generated";
const { MockDb, OptimismGovernorV6 } = TestHelpers;

describe("OptimismGovernorV6 contract Initialized event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for OptimismGovernorV6 contract Initialized event
  const event = OptimismGovernorV6.Initialized.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("OptimismGovernorV6_Initialized is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await OptimismGovernorV6.Initialized.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualOptimismGovernorV6Initialized = mockDbUpdated.entities.OptimismGovernorV6_Initialized.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedOptimismGovernorV6Initialized: OptimismGovernorV6_Initialized = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      version: event.params.version,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualOptimismGovernorV6Initialized, expectedOptimismGovernorV6Initialized, "Actual OptimismGovernorV6Initialized should be the same as the expectedOptimismGovernorV6Initialized");
  });
});
