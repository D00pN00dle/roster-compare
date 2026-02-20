
<script>
    import { sharedState } from '../js/SharedState.svelte.js';
    import { Button, Container, Input } from '@sveltestrap/sveltestrap';
    import { findMissingMembers } from '../js/compareRosters.js';
    let oldRosterFile = $state();
    let newRosterFile = $state();
    let error = $state(null);
    let isButtonDisabled = $derived(!oldRosterFile || !newRosterFile || error);
    const readFileContents = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (event) => {
                resolve(event.target.result);
            };
            
            reader.onerror = (error) => {
                reject(error);
            };
            
            reader.readAsText(file);
        });
    };

    const handleMissingMembers = async () => {

        if (oldRosterFile.length === 0 || newRosterFile.length === 0) {
            alert('Please select both roster files.');
            return;
        }

        try {
            // Read contents of both files
            const oldRosterContent = await readFileContents(oldRosterFile[0]);
            const newRosterContent = await readFileContents(newRosterFile[0]);

            // Now you can work with the file contents as strings
            console.log('Old Roster Content:', oldRosterContent);
            console.log('New Roster Content:', newRosterContent);

            // Pass contents to your comparison function instead of paths
            const missingMembers = findMissingMembers(oldRosterContent, newRosterContent);
            sharedState.names = missingMembers;
        } catch (error) {
            console.error('Error reading files:', error);
            alert('Error reading files');
        }

    };

    const validateInput = (file, target) => {
        if (target.invalid) return;
        if (file.length === 0) {
            alert('Please select a file.');
            error = true;
            return;
        }
        if (file[0].type !== 'text/plain') {
            alert('Please select a valid text file.');
            error = true;
            return;
        }
        error = false;
    };
</script>

<Container class="px-0 pb-3">
    <div class="d-flex pb-3 align-items-center">
        <Input type="file" placeholder="Old Roster..." id="oldRoster" bind:files={oldRosterFile} on:change={(event) => validateInput(oldRosterFile, event.target)} invalid={error ? true : false}/>
        <i class="bi bi-question-circle ms-2" title="Select the old roster file" style="cursor: pointer;"></i>
    </div>
    <div class="d-flex pb-3 align-items-center">
        <Input type="file" placeholder="New Roster..." id="newRoster" bind:files={newRosterFile} invalid={error ? true : false}/>
        <i class="bi bi-question-circle ms-2" title="Select the new roster file" style="cursor: pointer;"></i>
    </div>
    <Button color="primary m-0 w-100" disabled={error === null ? true : isButtonDisabled} on:click={handleMissingMembers}>Compare Rosters</Button>
</Container>