import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert} from 'antd';
import Page from './page';
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'近十日新增用户'}
          type="info"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Page/>
      </Card>
    </PageContainer>

  );
};

export default Welcome;



