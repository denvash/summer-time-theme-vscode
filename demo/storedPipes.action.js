import actions from '../constants/actions';
import topics from '../constants/topics';

export const init = () => ({
  type: actions.SOCKET_INIT,
  payload: {
    topic: topics.PROGRESS,
    actionType: actions.UPDATE_ROW_DATA_TABLE
  }
});

export const execStoredPipe = pipeline => ({
  type: actions.REST_REQ_POST,
  payload: {
    url: 'exec/stored',
    body: pipeline,
    actionType: actions.EXEC_STORED_PIPE
  }
});

export const deleteStoredPipeline = pipelineName => ({
  type: actions.REST_REQ_DELETE,
  payload: {
    url: 'store/pipelines',
    body: { pipelineName },
    actionType: actions.DELETE_STORED_PIPE
  }
});

export const updateStoredPipeline = pipeline => ({
  type: actions.REST_REQ_PUT,
  payload: {
    url: 'store/pipelines',
    body: pipeline,
    actionType: actions.UPDATE_STORED_PIPELINE
  }
});

export const cronStart = (name, pattern) => ({
  type: actions.REST_REQ_POST,
  payload: {
    url: 'cron/start',
    body: { name, pattern },
    actionType: actions.CRON_START
  }
});

export const cronStop = (name, pattern) => ({
  type: actions.REST_REQ_POST,
  payload: {
    url: 'cron/stop',
    body: { name, pattern },
    actionType: actions.CRON_STOP
  }
});
