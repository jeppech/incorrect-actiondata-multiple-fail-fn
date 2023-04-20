import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions = {
	default: async () => {

		if (Math.random() > 0.5) {
			return fail(404, { success: false, error: 'invalid_username', username: 'test' })
		}

		if (Math.random() > 0.5) {
			return fail(400, { success: false, error: 'account_cooldown', cooldown: 30 })
		}

		if (Math.random() > 0.5) {
			// This causes the generated ActionData-type to be narrowed down to:
			// { success: boolean, error: string } | { error?: undefined } | null
			return fail(400, { success: false, error: 'actiondata_missing_props' })
		}

		if (Math.random() > 0.5) {
			// This causes the generated ActionData-type to be narrowed down to:
			// { success: boolean } | { success: boolean } | null
			return fail(400, { success: false })
		}

		return { success: true }
	}
} satisfies Actions
