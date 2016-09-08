import React, { PropTypes } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import styles from './CreatePost.less';

function CreatePost({ loading, form, onSubmit }) {
  const { getFieldProps, getFieldsValue } = form;

  function handleSubmit(e) {
    e.preventDefault();
    const fields = getFieldsValue();
    onSubmit(fields);
  }

  return (
    <div className={styles.normal}>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit}>
          <div className={styles.group}>
            <div>Title</div>
            <div><Input {...getFieldProps('title')} /></div>
          </div>
          <div className={styles.group}>
            <div>Category</div>
            <div><Input {...getFieldProps('category')} /></div>
          </div>
          <div className={styles.group}>
            <div>Content</div>
            <div><Input type="textarea" {...getFieldProps('content')} /></div>
          </div>
          <div className={styles.buttons}>
            <Button type="primary" onClick={handleSubmit}>Submit</Button>
            { ' ' }
            <Button type="ghost">Cancel</Button>
          </div>
        </form>
      </Spin>
    </div>
  );
}

CreatePost.propTypes = {
  loading: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form.create()(CreatePost);
