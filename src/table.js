import React, { useState } from 'react';
import { View, Text } from 'react-native';

const Table = () => {
  const data = [
    { baseUrl: '/gradebook', resourceUrl: '/teacher/register', method: 'POST' },
    { baseUrl: '/gradebook', resourceUrl: '/teacher/login', method: 'POST' },
    { baseUrl: '/gradebook', resourceUrl: '/grade/add', method: 'POST' },
    { baseUrl: '/gradebook', resourceUrl: '/grade/delete/{id}', method: 'DELETE' },
    { baseUrl: '/gradebook', resourceUrl: '/grade/update/{id}', method: 'PUT' },
    { baseUrl: '/gradebook', resourceUrl: '/grade', method: 'GET' },
    { baseUrl: '/gradebook', resourceUrl: '/student/register', method: 'POST' },
    { baseUrl: '/gradebook', resourceUrl: '/student/login', method: 'POST' },
    { baseUrl: '/gradebook', resourceUrl: '/subject/add', method: 'POST' },
    { baseUrl: '/gradebook', resourceUrl: '/subject/delete/{id}', method: 'DELETE' },
    { baseUrl: '/gradebook', resourceUrl: '/subject/update/{id}', method: 'PUT' },
    { baseUrl: '/gradebook', resourceUrl: '/subject', method: 'GET' },
  ];

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Base Url</Text>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Resource Url</Text>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Method</Text>
      </View>
      {data.map((item) => (
        <View key={item.resourceUrl} style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>{item.baseUrl}</Text>
          <Text style={{ flex: 1 }}>{item.resourceUrl}</Text>
          <Text style={{ flex: 1 }}>{item.method}</Text>
        </View>
      ))}
    </View>
  );
};

export default Table;
