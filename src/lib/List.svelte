<script>
    import { Container, ListGroup, ListGroupItem } from '@sveltestrap/sveltestrap';

    let { items } = $props();
    let  isEmpty = $state(true);
    $effect(() => {
        if (items.length > 0) {
            isEmpty = false;
        } else {
            isEmpty = true;
        }
    });
</script>
<style>
    span {
        padding: 0.25em 0.5em;
        border-radius: 4px;    }
</style>
<Container class="m-0 px-0">
    <ListGroup class="primary">
    <h5 class="mb-3">Missing Members:</h5>
    {#if isEmpty}
        <ListGroupItem class="secondary text-center">No characters in the list</ListGroupItem>
    {:else}
        {#each items as item}
            <ListGroupItem class="secondary">
                <div class="d-flex gap-3">
                    <div class="d-flex flex-row flex-grow-1 justify-content-between" style="min-width: 25%; max-width: 50%;">
                        <p class="mb-0 min">{item.name}</p>
                        <p class="mb-0">{item.level}</p>
                    </div>
                    <p class="mb-0"><span style="background-color: {item.color}">{item.class}</span></p>
                </div>
            </ListGroupItem>
        {/each}
    {/if}
    </ListGroup>
</Container>