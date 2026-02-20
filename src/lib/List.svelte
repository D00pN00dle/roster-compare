<script>
    import { Container, ListGroup, ListGroupItem } from '@sveltestrap/sveltestrap';

    let { names } = $props();
    let  isEmpty = $state(true);
    $effect(() => {
        if (names.length > 0) {
            isEmpty = false;
        } else {
            isEmpty = true;
        }
    });
</script>

<Container class="m-0 px-0">
    <ListGroup class="primary">
    <h5 class="mb-3">Missing Members:</h5>
    {#if isEmpty}
        <ListGroupItem class="secondary text-center">No names in the list</ListGroupItem>
    {:else}
        {#each names as name}
            <ListGroupItem class="secondary">{name}</ListGroupItem>
        {/each}
    {/if}
    </ListGroup>
</Container>