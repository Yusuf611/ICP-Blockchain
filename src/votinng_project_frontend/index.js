import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as voting_idl, canisterId as voting_id } from 'dfx-generated/voting_project';

const agent = new HttpAgent();
const votingActor = Actor.createActor(voting_idl, { agent, canisterId: voting_id });

document.getElementById('addTopicButton').addEventListener('click', async () => {
    const topic = document.getElementById('topicInput').value;
    await votingActor.addTopic(topic);
    alert(`Topic "${topic}" added.`);
});

document.getElementById('voteYesButton').addEventListener('click', async () => {
    const topic = document.getElementById('voteTopicInput').value;
    try {
        await votingActor.vote(topic, true);
        alert(`Voted "Yes" on topic "${topic}".`);
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('voteNoButton').addEventListener('click', async () => {
    const topic = document.getElementById('voteTopicInput').value;
    try {
        await votingActor.vote(topic, false);
        alert(`Voted "No" on topic "${topic}".`);
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('viewResultsButton').addEventListener('click', async () => {
    const topic = document.getElementById('resultTopicInput').value;
    const result = await votingActor.getResult(topic);
    if (result) {
        document.getElementById('results').innerText = `Results for "${topic}": Yes: ${result[0]}, No: ${result[1]}`;
    } else {
        document.getElementById('results').innerText = `No results found for "${topic}".`;
    }
});

