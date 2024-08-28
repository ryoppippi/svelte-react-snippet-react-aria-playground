<script lang="ts">
  import './select.css';
  import { selectSnippet } from '$lib';

  const options = ['apple', 'meta', 'amzn'];

  let selected = $state<typeof options[number]>()
</script>

<h1> Selected option: {selected ?? 'none'} </h1>

{@render selectSnippet({
  options,
  onSelectionChange: (e) => ( selected = e )
}) }

