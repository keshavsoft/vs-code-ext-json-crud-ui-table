import { startOrchestration } from './orchestration/startOrchestration.js';

const showAllCommand = (context, uri) => {
    startOrchestration({ uri });
};

export default showAllCommand;