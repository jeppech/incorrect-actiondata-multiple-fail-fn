import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions = {
	test: async () => {

		if (Math.random() > 0.5) {
			return fail(403, { success: false, error: 'invalid_username', username: 'test' })
		}

		if (Math.random() > 0.5) {
			return fail(400, { success: false, error: 'account_cooldown', cooldown_sec: 30 })
		}

		if (Math.random() > 0.5) {
			return fail(500, { success: false, error: 'server_error' })
		}

		return { success: true }
	}
} satisfies Actions
