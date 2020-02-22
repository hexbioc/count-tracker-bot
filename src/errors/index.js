import { COUNTERS_NOT_FOUND, SPECIFIC_COUNTER_NOT_FOUND } from "../constants/strings"

export class CountersNotFoundError extends Error {
    constructor() {
        super()
        this.message = COUNTERS_NOT_FOUND
    }
}

export class SpecificCounterNotFoundError extends Error {
    constructor() {
        super()
        this.message = SPECIFIC_COUNTER_NOT_FOUND
    }
}