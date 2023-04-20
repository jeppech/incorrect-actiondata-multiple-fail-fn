<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

success: {form?.success} <br />
error: {form?.error} <br />
username: {form?.username} <br />
cooldown: {form?.cooldown} <br />

{JSON.stringify(form)}
<form action="?/test" method="post">
	<button type="submit">submit</button>
</form>
