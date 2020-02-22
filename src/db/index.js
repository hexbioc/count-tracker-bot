import { CountersNotFoundError, SpecificCounterNotFoundError } from "../errors"

const mockDB = {}

export async function addCounter(chatId, description) {
    const counters = (mockDB[chatId] = mockDB[chatId] || {})
    const newCounterId = Math.max(Object.keys(counters)) + 1
    counters[newCounterId] = {
        description,
        count: 0
    }

    return newCounterId
}

export async function deleteCounter(chatId, counterId) {
    const counters = mockDB[chatId] || {}

    if (!counters[counterId]) throw new SpecificCounterNotFoundError()

    delete counters[counterId]
}

export async function getCounters(chatId) {
    const counters = mockDB[chatId]

    if (!counters) throw new CountersNotFoundError()

    return counters
}

export async function getCounter(chatId) {
    const counters = mockDB[chatId] || {}

    if (!counters[counterId]) throw new SpecificCounterNotFoundError()

    return counters[counterId]
}

export async function incrementCounter(chatId, counterId) {
    const counter = (mockDB[chatId] || {})[counterId]

    if (!counter) throw new SpecificCounterNotFoundError()

    counter.count += 1

    return counter.count
}

export async function decrementCounter(chatId, counterId) {
    const counter = (mockDB[chatId] || {})[counterId]

    if (!counter) throw new SpecificCounterNotFoundError()

    counter.count -= 1

    return counter.count
}