import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { regLevelEvent } from "../generated/schema"
import { regLevelEvent as regLevelEventEvent } from "../generated/mbd100/mbd100"
import { handleregLevelEvent } from "../src/mbd-100"
import { createregLevelEventEvent } from "./mbd-100-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _user = Address.fromString("0x0000000000000000000000000000000000000001")
    let _userId = BigInt.fromI32(234)
    let _referralID = BigInt.fromI32(234)
    let _referrer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _time = BigInt.fromI32(234)
    let newregLevelEventEvent = createregLevelEventEvent(
      _user,
      _userId,
      _referralID,
      _referrer,
      _time
    )
    handleregLevelEvent(newregLevelEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("regLevelEvent created and stored", () => {
    assert.entityCount("regLevelEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "regLevelEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "regLevelEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_userId",
      "234"
    )
    assert.fieldEquals(
      "regLevelEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_referralID",
      "234"
    )
    assert.fieldEquals(
      "regLevelEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_referrer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "regLevelEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_time",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
