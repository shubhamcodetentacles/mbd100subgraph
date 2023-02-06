import {
  regLevelEvent as regLevelEventEvent,
  reentryLevelEvent as reentryLevelEventEvent,
  buyLevelEvent as buyLevelEventEvent,
  getMoneyForLevelEvent as getMoneyForLevelEventEvent,
  paidForLevelEv as paidForLevelEvEvent,
  binaryData as binaryDataEvent,
  Jackpot as JackpotEvent,
  netProfit as netProfitEvent,
  jackpotfundEntry as jackpotfundEntryEvent
} from "../generated/mbd100/mbd100"
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
} from "../generated/schema"

export function handleregLevelEvent(event: regLevelEventEvent): void {
  let entity = new regLevelEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._userId = event.params._userId
  entity._referralID = event.params._referralID
  entity._referrer = event.params._referrer
  entity._time = event.params._time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlereentryLevelEvent(event: reentryLevelEventEvent): void {
  let entity = new reentryLevelEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._userId = event.params._userId
  entity._referralID = event.params._referralID
  entity._time = event.params._time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlebuyLevelEvent(event: buyLevelEventEvent): void {
  let entity = new buyLevelEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._level = event.params._level
  entity._time = event.params._time
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlegetMoneyForLevelEvent(
  event: getMoneyForLevelEventEvent
): void {
  let entity = new getMoneyForLevelEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._referral = event.params._referral
  entity.matrixLevel = event.params.matrixLevel
  entity._level = event.params._level
  entity._time = event.params._time
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlepaidForLevelEv(event: paidForLevelEvEvent): void {
  let entity = new paidForLevelEv(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._referral = event.params._referral
  entity._level = event.params._level
  entity._amount = event.params._amount
  entity._time = event.params._time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlebinaryData(event: binaryDataEvent): void {
  let entity = new binaryData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._userId = event.params._userId
  entity._referralID = event.params._referralID
  entity._level = event.params._level
  entity.referralAddress = event.params.referralAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleJackpot(event: JackpotEvent): void {
  let entity = new Jackpot(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenetProfit(event: netProfitEvent): void {
  let entity = new netProfit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._amount = event.params._amount
  entity._user = event.params._user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlejackpotfundEntry(event: jackpotfundEntryEvent): void {
  let entity = new jackpotfundEntry(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
