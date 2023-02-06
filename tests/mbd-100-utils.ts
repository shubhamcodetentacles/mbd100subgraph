import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  regLevelEvent,
  reentryLevelEvent,
  buyLevelEvent,
  getMoneyForLevelEvent,
  paidForLevelEv,
  binaryData,
  Jackpot,
  netProfit,
  jackpotfundEntry
} from "../generated/mbd100/mbd100"

export function createregLevelEventEvent(
  _user: Address,
  _userId: BigInt,
  _referralID: BigInt,
  _referrer: Address,
  _time: BigInt
): regLevelEvent {
  let regLevelEventEvent = changetype<regLevelEvent>(newMockEvent())

  regLevelEventEvent.parameters = new Array()

  regLevelEventEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  regLevelEventEvent.parameters.push(
    new ethereum.EventParam(
      "_userId",
      ethereum.Value.fromUnsignedBigInt(_userId)
    )
  )
  regLevelEventEvent.parameters.push(
    new ethereum.EventParam(
      "_referralID",
      ethereum.Value.fromUnsignedBigInt(_referralID)
    )
  )
  regLevelEventEvent.parameters.push(
    new ethereum.EventParam("_referrer", ethereum.Value.fromAddress(_referrer))
  )
  regLevelEventEvent.parameters.push(
    new ethereum.EventParam("_time", ethereum.Value.fromUnsignedBigInt(_time))
  )

  return regLevelEventEvent
}

export function createreentryLevelEventEvent(
  _user: Address,
  _userId: BigInt,
  _referralID: BigInt,
  _time: BigInt
): reentryLevelEvent {
  let reentryLevelEventEvent = changetype<reentryLevelEvent>(newMockEvent())

  reentryLevelEventEvent.parameters = new Array()

  reentryLevelEventEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  reentryLevelEventEvent.parameters.push(
    new ethereum.EventParam(
      "_userId",
      ethereum.Value.fromUnsignedBigInt(_userId)
    )
  )
  reentryLevelEventEvent.parameters.push(
    new ethereum.EventParam(
      "_referralID",
      ethereum.Value.fromUnsignedBigInt(_referralID)
    )
  )
  reentryLevelEventEvent.parameters.push(
    new ethereum.EventParam("_time", ethereum.Value.fromUnsignedBigInt(_time))
  )

  return reentryLevelEventEvent
}

export function createbuyLevelEventEvent(
  _user: Address,
  _level: BigInt,
  _time: BigInt,
  _amount: BigInt
): buyLevelEvent {
  let buyLevelEventEvent = changetype<buyLevelEvent>(newMockEvent())

  buyLevelEventEvent.parameters = new Array()

  buyLevelEventEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  buyLevelEventEvent.parameters.push(
    new ethereum.EventParam("_level", ethereum.Value.fromUnsignedBigInt(_level))
  )
  buyLevelEventEvent.parameters.push(
    new ethereum.EventParam("_time", ethereum.Value.fromUnsignedBigInt(_time))
  )
  buyLevelEventEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return buyLevelEventEvent
}

export function creategetMoneyForLevelEventEvent(
  _user: Address,
  _referral: Address,
  matrixLevel: BigInt,
  _level: BigInt,
  _time: BigInt,
  _amount: BigInt
): getMoneyForLevelEvent {
  let getMoneyForLevelEventEvent = changetype<getMoneyForLevelEvent>(
    newMockEvent()
  )

  getMoneyForLevelEventEvent.parameters = new Array()

  getMoneyForLevelEventEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  getMoneyForLevelEventEvent.parameters.push(
    new ethereum.EventParam("_referral", ethereum.Value.fromAddress(_referral))
  )
  getMoneyForLevelEventEvent.parameters.push(
    new ethereum.EventParam(
      "matrixLevel",
      ethereum.Value.fromUnsignedBigInt(matrixLevel)
    )
  )
  getMoneyForLevelEventEvent.parameters.push(
    new ethereum.EventParam("_level", ethereum.Value.fromUnsignedBigInt(_level))
  )
  getMoneyForLevelEventEvent.parameters.push(
    new ethereum.EventParam("_time", ethereum.Value.fromUnsignedBigInt(_time))
  )
  getMoneyForLevelEventEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return getMoneyForLevelEventEvent
}

export function createpaidForLevelEvEvent(
  _user: Address,
  _referral: Address,
  _level: BigInt,
  _amount: BigInt,
  _time: BigInt
): paidForLevelEv {
  let paidForLevelEvEvent = changetype<paidForLevelEv>(newMockEvent())

  paidForLevelEvEvent.parameters = new Array()

  paidForLevelEvEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  paidForLevelEvEvent.parameters.push(
    new ethereum.EventParam("_referral", ethereum.Value.fromAddress(_referral))
  )
  paidForLevelEvEvent.parameters.push(
    new ethereum.EventParam("_level", ethereum.Value.fromUnsignedBigInt(_level))
  )
  paidForLevelEvEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  paidForLevelEvEvent.parameters.push(
    new ethereum.EventParam("_time", ethereum.Value.fromUnsignedBigInt(_time))
  )

  return paidForLevelEvEvent
}

export function createbinaryDataEvent(
  _user: Address,
  _userId: BigInt,
  _referralID: BigInt,
  _level: BigInt,
  referralAddress: Address
): binaryData {
  let binaryDataEvent = changetype<binaryData>(newMockEvent())

  binaryDataEvent.parameters = new Array()

  binaryDataEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  binaryDataEvent.parameters.push(
    new ethereum.EventParam(
      "_userId",
      ethereum.Value.fromUnsignedBigInt(_userId)
    )
  )
  binaryDataEvent.parameters.push(
    new ethereum.EventParam(
      "_referralID",
      ethereum.Value.fromUnsignedBigInt(_referralID)
    )
  )
  binaryDataEvent.parameters.push(
    new ethereum.EventParam("_level", ethereum.Value.fromUnsignedBigInt(_level))
  )
  binaryDataEvent.parameters.push(
    new ethereum.EventParam(
      "referralAddress",
      ethereum.Value.fromAddress(referralAddress)
    )
  )

  return binaryDataEvent
}

export function createJackpotEvent(_user: Address, time: BigInt): Jackpot {
  let jackpotEvent = changetype<Jackpot>(newMockEvent())

  jackpotEvent.parameters = new Array()

  jackpotEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  jackpotEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return jackpotEvent
}

export function createnetProfitEvent(
  _amount: BigInt,
  _user: Address
): netProfit {
  let netProfitEvent = changetype<netProfit>(newMockEvent())

  netProfitEvent.parameters = new Array()

  netProfitEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  netProfitEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )

  return netProfitEvent
}

export function createjackpotfundEntryEvent(
  _user: Address,
  _amount: BigInt
): jackpotfundEntry {
  let jackpotfundEntryEvent = changetype<jackpotfundEntry>(newMockEvent())

  jackpotfundEntryEvent.parameters = new Array()

  jackpotfundEntryEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  jackpotfundEntryEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return jackpotfundEntryEvent
}
