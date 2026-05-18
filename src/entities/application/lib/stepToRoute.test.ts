import { describe, it, expect } from 'vitest'
import { stepToRoute } from './stepToRoute'
import { STEP_VALUES } from '../types/enums'

describe('stepToRoute', () => {
    it('returns /loan for PRESCORING step', () => {
        expect(stepToRoute(STEP_VALUES.PRESCORING, 1)).toBe('/loan')
    })
    it('returns /loan/:id/offer for OFFERS step', () => {
        expect(stepToRoute(STEP_VALUES.OFFERS, 5)).toBe('/loan/5/offer')
    })
    it('returns /loan/:id/code for COMPLETE step', () => {
        expect(stepToRoute(STEP_VALUES.COMPLETE, 42)).toBe('/loan/42/code')
    })
    it('returns null for unknown step', () => {
        expect(stepToRoute('unknown' as any, 1)).toBeNull()
    })
})
