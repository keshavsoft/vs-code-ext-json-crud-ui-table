import { startOrchestration } from './orchestration/startOrchestration.js';

const showAllCommand = (context) => {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};

export default showAllCommand;