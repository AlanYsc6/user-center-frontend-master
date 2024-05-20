import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const [RegData, setRegData] = useState([]);

  useEffect(() => {
    // 假设后端提供了一个API接口，名为'/api/login-data'
    fetch('/api/user/regd')
      .then(response => response.json())
      .then(data => {
        // 数据通常会是数组格式，例如：[{ date: '2023-04-01', regs: 10 }, ...]
        setRegData(data);
      })
      .catch(error => {
        console.error('Error fetching reg data:', error);
      });
  }, []); // 空数组确保效果仅在组件挂载时运行一次

  const config = {
    data: RegData, // 使用从后端获取的数据
    height: 400,
    xField: 'date',
    yField: 'regs',
  };
  return <Line {...config} />;
};
export default Page;
