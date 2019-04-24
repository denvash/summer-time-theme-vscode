import { connect } from 'react-redux';
import {
  Table,
  Card,
  Button,
  Row,
  Col,
  Modal,
  Icon,
  Tag,
  Tooltip,
  Switch,
  Input,
  Popover,
  notification
} from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import cronstrue from 'cronstrue';

import { init } from '../../../actions/storedPipes.action';
import { openModal } from '../../../actions/modal.action';
import {
  execStoredPipe,
  deleteStoredPipeline,
  updateStoredPipeline,
  cronStart,
  cronStop
} from '../../../actions/storedPipes.action';
import './StoredPipesTable.scss';
import HEditor from '../HEditor.react';
import { RECORD_STATUS } from '../../../constants/colors';
import { ReactComponent as PlayIconSvg } from '../../../images/play-icon.svg';

const { Column } = Table;

const generateNCards = N =>
  [...Array(N)].map((_, i) => <Card key={`Card_${i}`}>Card-{i}</Card>);
class StoredPipesTable extends Component {
  componentWillMount() {
    this.props.init();
  }

  renderColumns() {}

  render() {
    const { dataSource } = this.props;

    // Need to remove "nodes" key from each pipeline.
    const fixedDataSource = [];
    dataSource.forEach(p => {
      const pipe = JSON.parse(JSON.stringify(p));
      delete pipe.nodes;
      fixedDataSource.push(pipe);
    });

    const deleteConfirmAction = (action, record) => {
      Modal.confirm({
        title: 'WARNING Deleting Pipeline',
        content: `Are you sure you want to delete ${
          record.name
        }? Deleting Pipeline will Stop-ALL related Jobs and Executions`,
        okText: 'Confirm',
        okType: 'danger',
        cancelText: 'Cancel',
        onOk() {
          action(record.name);
        },
        onCancel() {}
      });
    };

    const revertCronTrigger = (record, cronStart, cronStop) => {
      const pipelineName = record.name;
      const isCronEnabled =
        record.hasOwnProperty('triggers') &&
        record.triggers.hasOwnProperty('cron');
      return () =>
        isCronEnabled
          ? record.triggers.cron.enabled
            ? cronStop(pipelineName)
            : cronStart(pipelineName)
          : {};
    };

    const updateCronPattern = (pipeline, pattern, updateStoredPipeline) => {
      try {
        cronstrue.toString(pattern);
        pipeline.triggers.cron.pattern = pattern;
        updateStoredPipeline(pipeline);
      } catch (errorMessage) {
        notification.config({
          placement: 'bottomRight'
        });
        notification.open({
          message: 'Cron Job Error',
          description: errorMessage,
          icon: <Icon type="warning" style={{ color: 'red' }} />
        });
      }
    };

    return (
      <div>
        <Table
          rowKey="name"
          dataSource={dataSource.asMutable()}
          pagination={{
            className: 'tablePagination',
            defaultCurrent: 1,
            pageSize: 15,
            hideOnSinglePage: true
          }}
          locale={{ emptyText: 'No Stored Pipelines' }}
          expandedRowRender={record => (
            <Card title="Full details">
              <ReactJson
                src={record}
                displayDataTypes={false}
                displayObjectSize={false}
                iconStyle="triangle"
                indentWidth="4"
                collapsed="2"
                enableClipboard={false}
              />
            </Card>
          )}
        >
          <Column title="Pipeline Name" dataIndex="name" key="name" />
          <Column
            title="Cron Job"
            dataIndex="cron"
            key="cron"
            render={(_, record) => {
              const cronIsEnabled =
                record.hasOwnProperty('triggers') &&
                record.triggers.hasOwnProperty('cron') &&
                record.triggers.cron.enabled;
              const cronExpr = cronIsEnabled
                ? record.triggers.cron.pattern
                : '* * * * *';
              return (
                <Row type="flex" justify="start">
                  <Col span={4} order={1}>
                    <Switch
                      checkedChildren={<Icon type="check" />}
                      unCheckedChildren={<Icon type="close" />}
                      checked={cronIsEnabled}
                      onChange={revertCronTrigger(
                        record,
                        this.props.cronStart,
                        this.props.cronStop
                      )}
                    />
                  </Col>
                  <Col span={8} order={2}>
                    <Popover
                      content={
                        cronExpr.split(' ').length === 5
                          ? cronstrue.toString(cronExpr, {
                              use24HourTimeFormat: true
                            })
                          : 'Invalid Cron-Expression'
                      }
                      trigger="focus"
                    >
                      <Input.Search
                        className="cronInput"
                        size="small"
                        disabled={!cronIsEnabled}
                        placeholder="Cron Expression"
                        enterButton={<Icon type="check" />}
                        defaultValue={cronExpr}
                        onSearch={pattern =>
                          updateCronPattern(
                            JSON.parse(JSON.stringify(record)),
                            pattern,
                            this.props.updateStoredPipeline
                          )
                        }
                      />
                    </Popover>
                  </Col>
                </Row>
              );
            }}
          />
          <Column
            title="Status"
            dataIndex="status"
            key="status"
            render={() => (
              <Row>
                <Col className="align-center" span={2}>
                  <Tooltip placement="top" title={'Creating'}>
                    <Tag color={RECORD_STATUS.creating}>{3}</Tag>
                  </Tooltip>
                </Col>
                <Col className="align-center" span={2}>
                  <Tooltip placement="top" title={'Completed'}>
                    <Tag color={RECORD_STATUS.completed}>{3}</Tag>
                  </Tooltip>
                </Col>
                <Col className="align-center" span={2}>
                  <Tooltip placement="top" title={'Active'}>
                    <Tag color={RECORD_STATUS.active}>{3}</Tag>
                  </Tooltip>
                </Col>
                <Col className="align-center" span={2}>
                  <Tooltip placement="top" title={'Stopped'}>
                    <Tag color={RECORD_STATUS.stopped}>{3}</Tag>
                  </Tooltip>
                </Col>
                <Col className="align-center" span={2}>
                  <Tooltip className="toolTip" placement="top" title={'Failed'}>
                    <Tag color={RECORD_STATUS.failed}>{3}</Tag>
                  </Tooltip>
                </Col>
                <Col className="align-center" span={2}>
                  <Tooltip
                    className="toolTip"
                    placement="top"
                    title={'Skipped'}
                  >
                    <Tag color={RECORD_STATUS.skipped}>{3}</Tag>
                  </Tooltip>
                </Col>
              </Row>
            )}
          />
          <Column
            title="Action"
            dataIndex="action"
            key="action"
            render={(_, record) => (
              <Row type="flex" justify="start">
                <Col span={4}>
                  <HEditor
                    jsonTemplate={JSON.stringify(
                      fixedDataSource.find(p => p.name === record.name),
                      null,
                      2
                    )}
                    styledButton={onClick => (
                      <Button shape="circle" onClick={onClick}>
                        <Icon component={PlayIconSvg} />
                      </Button>
                    )}
                    title={'Execute Pipeline Editor'}
                    okText={'Execute'}
                    action={this.props.execStoredPipe}
                  />
                </Col>
                <Col span={4}>
                  <HEditor
                    jsonTemplate={JSON.stringify(
                      dataSource.find(p => p.name === record.name),
                      null,
                      2
                    )}
                    styledButton={onClick => (
                      <Button shape="circle" icon="edit" onClick={onClick} />
                    )}
                    title={'Edit Pipeline Editor'}
                    okText={'Update'}
                    action={this.props.updateStoredPipeline}
                  />
                </Col>
                <Col span={4}>
                  <Button
                    type="danger"
                    shape="circle"
                    icon="delete"
                    onClick={() =>
                      deleteConfirmAction(
                        this.props.deleteStoredPipeline,
                        record
                      )
                    }
                  />
                </Col>
              </Row>
            )}
          />
        </Table>
      </div>
    );
  }
}

StoredPipesTable.propTypes = {
  init: PropTypes.func.isRequired,
  dataSource: PropTypes.array.isRequired,
  execStoredPipe: PropTypes.func.isRequired,
  deleteStoredPipeline: PropTypes.func.isRequired,
  updateStoredPipeline: PropTypes.func.isRequired,
  cronStop: PropTypes.func.isRequired,
  cronStart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dataSource: state.storedPipeline.dataSource
});

export default connect(
  mapStateToProps,
  {
    openModal,
    init,
    execStoredPipe,
    deleteStoredPipeline,
    updateStoredPipeline,
    cronStop,
    cronStart
  }
)(StoredPipesTable);
