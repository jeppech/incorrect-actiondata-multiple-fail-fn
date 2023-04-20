<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

{JSON.stringify(form)}
<form action="?/test" method="post">
	<button type="submit">submit</button>
</form>
